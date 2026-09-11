import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { content } from "../content.js";
import { optimizeTextAsset } from "./optimize-assets.mjs";
import { servicePageEntries } from "./service-pages.mjs";
import { localizeHomepage } from "./home-pages.mjs";
import { responsiveImageEntries } from "./responsive-images.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "netlify-dist");
const locales = ["en", "de", "he"];


await fs.rm(output, { recursive: true, force: true });
await fs.mkdir(output, { recursive: true });
const template = await fs.readFile(path.join(root, "index.html"), "utf8");

await Promise.all(
  locales.map(async (locale) => {
    const localeDirectory = path.join(output, locale);
    await fs.mkdir(localeDirectory, { recursive: true });
    await fs.writeFile(path.join(localeDirectory, "index.html"), localizeHomepage(template, content[locale]));
  }),
);
await Promise.all(
  servicePageEntries.map(async ({ relativePath, html }) => {
    const destination = path.join(output, relativePath);
    await fs.mkdir(path.dirname(destination), { recursive: true });
    await fs.writeFile(destination, html);
  }),
);

await fs.writeFile(path.join(output, "index.html"), localizeHomepage(template, content.en));
const optimizedAssets = ["app.js", "render-home.js", "content.js", "footer.js", "legal.js", "service-page.js", "styles.css", "growth.css"];
await Promise.all(
  optimizedAssets.map(async (file) => {
    const source = await fs.readFile(path.join(root, file), "utf8");
    await fs.writeFile(path.join(output, file), await optimizeTextAsset(file, source));
  }),
);
await Promise.all(
  ["robots.txt", "sitemap.xml", "llms.txt"].map((file) =>
    fs.copyFile(path.join(root, file), path.join(output, file)),
  ),
);
await Promise.all(
  ["impressum", "privacy", "terms", "accessibility"].map((directory) =>
    fs.cp(path.join(root, directory), path.join(output, directory), { recursive: true }),
  ),
);
await fs.cp(path.join(root, "assets"), path.join(output, "assets"), { recursive: true });
for (const { relativePath, bytes } of await responsiveImageEntries(root)) {
  const destination = path.join(output, relativePath);
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.writeFile(destination, bytes);
}

console.log(`Built Netlify marketing package at ${output}`);
