const externalAttrs = (href) =>
  href.startsWith("http") ? ' rel="noreferrer"' : "";

const footerLinks = (links, marketingPath = "") =>
  links
    .map(([label, href]) => {
      const destination = href.startsWith("#") && marketingPath ? `${marketingPath}${href}` : href;
      return `<a href="${destination}"${externalAttrs(destination)}>${label}</a>`;
    })
    .join("");

const upArrow = () =>
  '<svg class="arrow-icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5"/></svg>';

export const renderFooter = ({
  footer,
  activeLocale = "en",
  homeHref = `/${activeLocale}/`,
  marketingPath = "",
  topHref = "#home",
} = {}) => `
  <footer class="site-footer" lang="en" dir="ltr">
    <div class="shell footer-signal reveal" aria-hidden="true">
      <span></span><i></i><i></i><i></i>
    </div>
    <div class="shell footer-main">
      <div class="footer-brand">
        <a class="brand" href="${homeHref}" aria-label="FixAds home">
          <span class="brand-mark"><img src="/assets/fixads-logo.png" alt="" width="72" height="72" /></span>
          <span class="brand-name">FixAds</span>
        </a>
        <p>${footer.statement}</p>
        <a class="footer-email" href="mailto:info@fixads.xyz">info@fixads.xyz</a>
      </div>
      <nav class="footer-links footer-links--company" aria-label="${footer.company}">
        <h2>${footer.company}</h2>
        <div class="footer-link-grid">${footerLinks(footer.links, marketingPath)}</div>
      </nav>
      <nav class="footer-links footer-links--legal" aria-label="${footer.legal}">
        <h2>${footer.legal}</h2>
        <div class="footer-link-grid">${footerLinks(footer.legalLinks)}</div>
      </nav>
      <div class="locale-control">
        <h2>${footer.locale}</h2>
        <details>
          <summary><span>${footer.current}</span><i aria-hidden="true"></i></summary>
          <div class="locale-options">
            ${footer.locales.map(([label, href]) => `<a href="${href}"${href === `/${activeLocale}/` ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
          </div>
        </details>
      </div>
    </div>
    <div class="shell footer-bottom">
      <span>${footer.rights}</span>
      <a href="${topHref}">${footer.top}${upArrow()}</a>
    </div>
  </footer>
`;
