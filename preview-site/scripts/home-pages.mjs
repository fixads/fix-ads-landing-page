import { renderHomePage } from "../render-home.js";

const escapeAttribute = value => String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;");
const replaceMeta = (html, attribute, name, value) => html.replace(
  new RegExp(`<meta(?=[^>]*${attribute}="${name}")[^>]*>`, "i"),
  tag => tag.replace(/content="[^"]*"/i, `content="${escapeAttribute(value)}"`),
);

export function localizeHomepage(template, page) {
  let html = template
    .replace(/<html lang="[^"]+" dir="[^"]+">/i, `<html lang="${page.locale}" dir="${page.dir}">`)
    .replace(/<title>[^<]*<\/title>/i, `<title>${page.seo.title}</title>`)
    .replace(/<link rel="canonical" href="[^"]+"\s*\/>/i, `<link rel="canonical" href="${page.seo.canonical}" />`)
    .replace('<div id="app"></div>', `<div id="app" data-rendered-locale="${page.locale}">${renderHomePage(page, { optimizedAssets: true })}</div>`)
    .replace(/<noscript>[\s\S]*?<\/noscript>/, "")
    .replace(/<a class="skip-link" href="#main-content">[^<]*<\/a>/, `<a class="skip-link" href="#main-content">${page.skip}</a>`);
  for (const [attribute, name, value] of [
    ["name", "description", page.seo.description],
    ["property", "og:url", page.seo.canonical],
    ["property", "og:title", page.seo.title],
    ["property", "og:description", page.seo.description],
    ["property", "og:locale", page.seo.ogLocale],
    ["name", "twitter:title", page.seo.title],
    ["name", "twitter:description", page.seo.description],
  ]) html = replaceMeta(html, attribute, name, value);
  return html;
}
