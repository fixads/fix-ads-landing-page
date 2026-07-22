import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist");
const hosting = JSON.parse(await fs.readFile(path.join(root, ".openai/hosting.json"), "utf8"));
const projectId = process.env.SITES_PROJECT_ID || hosting.project_id;

if (!projectId) {
  throw new Error("SITES_PROJECT_ID is required to build the Sites review package.");
}

const textFiles = [
  "index.html",
  "styles.css",
  "app.js",
  "content.js",
  "footer.js",
  "legal.js",
  "impressum/index.html",
  "privacy/index.html",
  "terms/index.html",
  "accessibility/index.html",
];

const collectFiles = async (directory, prefix = "") => {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const relative = path.join(prefix, entry.name);
      const absolute = path.join(directory, entry.name);
      return entry.isDirectory() ? collectFiles(absolute, relative) : relative;
    }),
  );
  return files.flat();
};

const assetFiles = (await collectFiles(path.join(root, "assets"), "assets")).sort();
const assetMimeType = (file) => {
  const extension = path.extname(file).toLowerCase();
  if (extension === ".svg") return "image/svg+xml";
  if (extension === ".png") return "image/png";
  if (extension === ".jpg" || extension === ".jpeg") return "image/jpeg";
  if (extension === ".webp") return "image/webp";
  return "application/octet-stream";
};

const textEntries = await Promise.all(
  textFiles.map(async (file) => [`/${file}`, await fs.readFile(path.join(root, file), "utf8")]),
);
const assetEntries = await Promise.all(
  assetFiles.map(async (file) => [`/${file}`, (await fs.readFile(path.join(root, file))).toString("base64")]),
);
const mimeTypes = {
  "/index.html": "text/html; charset=utf-8",
  "/styles.css": "text/css; charset=utf-8",
  "/app.js": "text/javascript; charset=utf-8",
  "/content.js": "text/javascript; charset=utf-8",
  ...Object.fromEntries(assetFiles.map((file) => [`/${file}`, assetMimeType(file)])),
};

const worker = `"use strict";

const TEXT_FILES = ${JSON.stringify(Object.fromEntries(textEntries))};
const BINARY_FILES = ${JSON.stringify(Object.fromEntries(assetEntries))};
const MIME_TYPES = ${JSON.stringify(mimeTypes)};

function response(body, init = {}) {
  return new Response(body, {
    status: init.status || 200,
    headers: {
      "content-type": init.contentType || "text/plain; charset=utf-8",
      "cache-control": init.cacheControl || "no-cache",
      "x-content-type-options": "nosniff",
      "referrer-policy": "strict-origin-when-cross-origin",
      ...(init.headers || {}),
    },
  });
}

function decodeBase64(value) {
  const decoded = atob(value);
  const bytes = new Uint8Array(decoded.length);
  for (let index = 0; index < decoded.length; index += 1) bytes[index] = decoded.charCodeAt(index);
  return bytes;
}

function visitorCountry(request) {
  return String(request.cf?.country || request.headers.get("cf-ipcountry") || "").toUpperCase();
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    if (request.method === "POST" && (pathname === "/" || /^\\/(en|de|he)\\/$/.test(pathname))) {
      return response(null, {
        status: 204,
        headers: { "x-fixads-review-form": "accepted-not-delivered" },
      });
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      return response("Method not allowed", { status: 405, headers: { allow: "GET, HEAD, POST" } });
    }

    if (pathname === "/") {
      const country = visitorCountry(request);
      const locale = country === "IL" ? "he" : country === "DE" ? "de" : "en";
      return Response.redirect(new URL(\`/\${locale}/\`, request.url), 302);
    }

    const localeWithoutSlash = pathname.match(/^\\/(en|de|he)$/);
    if (localeWithoutSlash) {
      return Response.redirect(new URL(\`/\${localeWithoutSlash[1]}/\`, request.url), 308);
    }

    if (/^\\/(en|de|he)\\/$/.test(pathname)) {
      return response(request.method === "HEAD" ? null : TEXT_FILES["/index.html"], {
        contentType: MIME_TYPES["/index.html"],
      });
    }

    const legalPage = pathname.match(/^\\/(impressum|privacy|terms|accessibility)\\/?$/);
    if (legalPage) {
      const file = \`/\${legalPage[1]}/index.html\`;
      return response(request.method === "HEAD" ? null : TEXT_FILES[file], {
        contentType: "text/html; charset=utf-8",
      });
    }

    if (TEXT_FILES[pathname]) {
      return response(request.method === "HEAD" ? null : TEXT_FILES[pathname], {
        contentType: MIME_TYPES[pathname],
        cacheControl: pathname === "/index.html" ? "no-cache" : "public, max-age=300",
      });
    }

    if (BINARY_FILES[pathname]) {
      return response(request.method === "HEAD" ? null : decodeBase64(BINARY_FILES[pathname]), {
        contentType: MIME_TYPES[pathname],
        cacheControl: "public, max-age=31536000, immutable",
      });
    }

    return response("Not found", { status: 404 });
  },
};
`;

await fs.rm(output, { recursive: true, force: true });
await fs.mkdir(path.join(output, "server"), { recursive: true });
await fs.mkdir(path.join(output, ".openai"), { recursive: true });
await fs.writeFile(path.join(output, "server/index.js"), worker);
await fs.writeFile(
  path.join(output, ".openai/hosting.json"),
  `${JSON.stringify({ ...hosting, project_id: projectId }, null, 2)}\n`,
);

console.log(`Built Sites package at ${output}`);
