import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { content } from "../content.js";
import { servicePageEntries } from "./service-pages.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "netlify-dist");
const locales = ["en", "de", "he"];

const escapeAttribute = (value) => String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;");

const replaceMeta = (html, attribute, name, value) => {
  const pattern = new RegExp(`<meta(?=[^>]*${attribute}="${name}")[^>]*>`, "i");
  return html.replace(pattern, (tag) =>
    tag.replace(/content="[^"]*"/i, `content="${escapeAttribute(value)}"`),
  );
};

const localizeHtml = (template, page) => {
  let html = template
    .replace(/<html lang="[^"]+" dir="[^"]+">/i, `<html lang="${page.locale}" dir="${page.dir}">`)
    .replace(/<title>[^<]*<\/title>/i, `<title>${page.seo.title}</title>`)
    .replace(
      /<link rel="canonical" href="[^"]+"\s*\/>/i,
      `<link rel="canonical" href="${page.seo.canonical}" />`,
    );

  html = replaceMeta(html, "name", "description", page.seo.description);
  html = replaceMeta(html, "property", "og:url", page.seo.canonical);
  html = replaceMeta(html, "property", "og:title", page.seo.title);
  html = replaceMeta(html, "property", "og:description", page.seo.description);
  html = replaceMeta(html, "property", "og:locale", page.seo.ogLocale);
  html = replaceMeta(html, "name", "twitter:title", page.seo.title);
  html = replaceMeta(html, "name", "twitter:description", page.seo.description);
  return html;
};

await fs.rm(output, { recursive: true, force: true });
await fs.mkdir(output, { recursive: true });
const template = await fs.readFile(path.join(root, "index.html"), "utf8");

await Promise.all(
  locales.map(async (locale) => {
    const localeDirectory = path.join(output, locale);
    await fs.mkdir(localeDirectory, { recursive: true });
    await fs.writeFile(path.join(localeDirectory, "index.html"), localizeHtml(template, content[locale]));
  }),
);
await Promise.all(
  servicePageEntries.map(async ({ relativePath, html }) => {
    const destination = path.join(output, relativePath);
    await fs.mkdir(path.dirname(destination), { recursive: true });
    await fs.writeFile(destination, html);
  }),
);

await fs.writeFile(path.join(output, "index.html"), localizeHtml(template, content.en));
await Promise.all(
  ["app.js", "content.js", "footer.js", "legal.js", "service-page.js", "styles.css", "robots.txt", "sitemap.xml"].map((file) =>
    fs.copyFile(path.join(root, file), path.join(output, file)),
  ),
);
await Promise.all(
  ["impressum", "privacy", "terms", "accessibility"].map((directory) =>
    fs.cp(path.join(root, directory), path.join(output, directory), { recursive: true }),
  ),
);
await fs.cp(path.join(root, "assets"), path.join(output, "assets"), { recursive: true });

console.log(`Built Netlify marketing package at ${output}`);
