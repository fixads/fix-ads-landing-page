import { clients } from "./content.js";
import { renderFooter } from "./footer.js";

export function renderHomePage(page, { optimizedAssets = false } = {}) {
const market = page.growth.market;
const photoAttrs = (src) => {
  if (!optimizedAssets) return `src="${src}"`;
  const name = src.split("/").at(-1).replace(/\.(jpg|png)$/, "");
  return `src="/assets/optimized/${name}-640.webp" srcset="/assets/optimized/${name}-640.webp 640w, /assets/optimized/${name}-1040.webp 1040w" sizes="(max-width: 760px) calc(100vw - 64px), 40vw"`;
};
const arrowIcon = (direction = "forward") => {
  const shouldFlip = page.dir === "rtl" && direction === "forward";
  return `<svg class="arrow-icon${shouldFlip ? " is-flipped" : ""}" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5"/></svg>`;
};

const externalAttrs = (href) =>
  href.startsWith("http") ? ' rel="noreferrer"' : "";

const linkList = (links, className = "") =>
  links
    .map(
      ([label, href]) =>
        `<a class="${className}" href="${href}"${externalAttrs(href)}>${label}</a>`,
    )
    .join("");

const platformMarks = {
  "Meta Ads": {
    src: "/assets/platforms/meta.svg",
    className: "ticker-logo--meta",
    width: 290,
    height: 191,
    href: "https://www.facebook.com/business/ads",
  },
  "Google Ads": {
    src: "/assets/platforms/google-ads.svg",
    className: "ticker-logo--google",
    width: 251,
    height: 230,
    href: "https://ads.google.com/",
  },
  "Yelp Ads": {
    src: "/assets/platforms/yelp.svg",
    className: "ticker-logo--yelp",
    width: 40,
    height: 53,
    href: "https://business.yelp.com/products/yelp-ads/",
  },
  "Amazon Ads": {
    src: optimizedAssets ? "/assets/optimized/amazon-ads-320.png" : "/assets/platforms/amazon-ads.png",
    className: "ticker-logo--amazon",
    width: 4496,
    height: 1134,
    lockup: true,
    href: "https://advertising.amazon.com/",
  },
  Klaviyo: {
    src: "/assets/platforms/klaviyo.svg",
    className: "ticker-logo--klaviyo",
    width: 581,
    height: 172,
    lockup: true,
    href: "https://www.klaviyo.com/",
  },
  Shopify: {
    src: "/assets/platforms/shopify.svg",
    className: "ticker-logo--shopify",
    width: 304,
    height: 87,
    lockup: true,
    href: "https://www.shopify.com/",
  },
  Odoo: {
    src: "/assets/platforms/odoo.svg",
    className: "ticker-logo--odoo",
    width: 621,
    height: 196,
    lockup: true,
    href: "https://www.odoo.com/",
  },
};

const tickerItem = (item, hidden = false) => {
  const mark = platformMarks[item];
  const brandTag = mark?.href ? "a" : "span";
  const brandAttrs = mark?.href
    ? ` href="${mark.href}" rel="noreferrer" aria-label="${item}"${hidden ? ' tabindex="-1"' : ""}`
    : "";
  const content = mark
    ? `<${brandTag} class="ticker-brand${mark.lockup ? " ticker-brand--lockup" : ""}"${brandAttrs}>
        <img class="ticker-logo ${mark.className}" src="${mark.src}" alt="" aria-hidden="true" width="${mark.width}" height="${mark.height}" decoding="async" />
        ${mark.lockup ? `<span class="ticker-label--sr">${item}</span>` : `<span class="ticker-label">${item}</span>`}
      </${brandTag}>`
    : `<span class="ticker-label">${item}</span>`;

  return `<span class="ticker-item${mark ? " ticker-item--platform" : ""}"${hidden ? ' aria-hidden="true"' : ""}>${content}<i aria-hidden="true"></i></span>`;
};

const tickerRail = [
  ...page.ticker.map((item) => tickerItem(item)),
  ...page.ticker.map((item) => tickerItem(item, true)),
].join("");

const serviceCards = page.services.map((service, index) => `
  <details class="capability" name="capabilities"${index === 0 ? " open" : ""}>
    <summary><h3>${service.title}</h3><span class="capability-toggle" aria-hidden="true">+</span></summary>
    <div class="capability-body">
      ${service.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      <ul class="tag-list">${service.tags.map(tag => `<li>${tag}</li>`).join("")}</ul>
      <div class="capability-actions">
        <a href="${page.servicePage.path}#service-${index + 1}">${page.growth.readMore}${arrowIcon()}</a>
        <a href="#contact" data-service="${[1,2,3,4,5,6,7,8][index]}">${page.growth.discussService}${arrowIcon()}</a>
      </div>
    </div>
  </details>`).join("");

const processItems = market.principles
  .map(
    ([title, body], index) => `
      <article class="process-item reveal reveal-soft">
        <span class="process-number">0${index + 1}</span>
        <div>
          <h3>${title}</h3>
          <p>${body}</p>
        </div>
      </article>`,
  )
  .join("");

const clientSet = (hidden = false) => `
  <div class="client-set"${hidden ? ' aria-hidden="true"' : ""}>
    ${clients
      .map(
        (client) => `
          <a
            class="client-logo-link"
            href="${client.href}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="${client.name}"
            ${hidden ? 'tabindex="-1"' : ""}
          >
            <img
              class="client-logo${client.className ? ` ${client.className}` : ""}"
              src="${client.logo}"
              alt=""
              width="${client.width}"
              height="${client.height}"
              loading="lazy"
              decoding="async"
            />
          </a>`,
      )
      .join("")}
  </div>`;

const clientRail = `${clientSet()}${clientSet(true)}`;

const formOptions = page.form.options
  .map(
    (option, index) =>
      `<option value="${index === 0 ? "" : option}"${index === 0 ? " disabled selected" : ""}>${option}</option>`,
  )
  .join("");

return `
  <header class="site-header" data-header>
    <div class="shell header-inner">
      <a class="brand" href="/${page.locale}/" aria-label="FixAds home">
        <span class="brand-mark"><img src="/assets/fixads-logo.png" alt="" width="72" height="72" /></span>
        <span class="brand-name">FixAds</span>
      </a>
      <nav class="desktop-nav" aria-label="Primary navigation">
        ${linkList(page.nav)}
      </nav>
      <div class="header-actions">
        <a class="text-link desktop-only" href="https://www.fixads.xyz/transparency">${page.login}</a>
        <a class="button button--small button--light desktop-only" href="#contact">${page.headerCta}${arrowIcon()}</a>
        <button class="menu-button" type="button" aria-label="${page.menu}" aria-expanded="false" aria-controls="mobile-menu">
          <span>${page.menu}</span><i></i><i></i>
        </button>
      </div>
    </div>
  </header>

  <div class="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="${page.menu}" aria-hidden="true">
    <div class="mobile-menu__visual" aria-hidden="true"><span></span><span></span><i></i></div>
    <div class="shell mobile-menu__inner">
      <div class="mobile-menu__links">${linkList(page.nav, "mobile-nav-link")}</div>
      <div class="mobile-menu__bottom">
        <a href="https://www.fixads.xyz/transparency">${page.login}</a>
        <a class="button button--light" href="#contact">${page.headerCta}${arrowIcon()}</a>
      </div>
    </div>
  </div>

  <main id="main-content" class="growth-home">
    <section class="hero" id="home">
      <div class="hero-aura" aria-hidden="true"><i></i><i></i></div>
      <div class="shell hero-inner">
        <div class="hero-copy">
          <p class="eyebrow hero-eyebrow reveal">${page.hero.eyebrow}</p>
          <h1 class="hero-title">${page.hero.title}</h1>
          <p class="hero-body reveal">${page.hero.body}</p>
          <p class="hero-care reveal">${page.hero.care}</p>
          <div class="hero-actions reveal">
            <a class="button button--primary" href="#contact">${page.hero.cta}${arrowIcon()}</a>
            <a class="button button--ghost" href="${page.servicePage.path}">${page.hero.secondary}</a>
          </div>
          <p class="hero-note">${page.growth.note}</p>
          <ul class="hero-assurances">${market.introPoints.map(item => `<li>${item}</li>`).join("")}</ul>
        </div>
        <aside class="growth-picker" aria-labelledby="growth-question">
          <h2 id="growth-question">${page.growth.choose}</h2>
          <div class="growth-choices" role="group" aria-label="${page.growth.focusLabel}">
            ${page.growth.goals.map((goal, index) => `<a href="#contact" data-goal="${index}"${index === 0 ? ' aria-current="true"' : ""}>${goal.label}</a>`).join("")}
          </div>
          ${page.growth.goals.map((goal, index) => `<div class="growth-panel" data-goal-panel="${index}"${index ? " hidden" : ""}>
            <div class="growth-panel__photo"><img ${photoAttrs(goal.image)} alt="${goal.alt}" width="1400" height="805" ${index ? 'loading="lazy"' : 'fetchpriority="high"'} />
              <ol class="journey-steps">${goal.steps.map(step => `<li>${step}</li>`).join("")}</ol>
            </div>
            <div class="growth-panel__copy">
              <h3>${goal.title}</h3><p>${goal.body}</p>
              <ul class="goal-scope" aria-label="${market.scopeLabel}">${goal.scope.map(item => `<li>${item}</li>`).join("")}</ul>
              <a class="growth-panel__cta" href="#contact" data-service="${goal.service}">${page.growth.selected}${arrowIcon()}</a>
            </div>
          </div>`).join("")}
        </aside>
      </div>
    </section>

    <section class="ticker" aria-label="Platforms and capabilities">
      <div class="ticker-track">
        ${tickerRail}
      </div>
    </section>

    <section class="section clients" id="clients">
      <div class="shell section-heading section-heading--center reveal">
        
        <h2>${page.growth.trust}</h2>

      </div>
      <div class="client-rail" aria-label="${page.clients.eyebrow}"><div class="client-track">${clientRail}</div></div>

    </section>

    <section class="section services" id="services">
      <div class="shell">
        <div class="section-heading reveal">
          
          <h2>${page.growth.servicesTitle}</h2>
          <p>${page.growth.servicesBody}</p>
        </div>
        <div class="capabilities-layout">
          <div class="capabilities-visual">
            <img ${photoAttrs('/assets/market-automation.png')} alt="${market.workflowAlt}" loading="lazy" width="1536" height="1024" />
            <div><strong>FixAds</strong><p>${page.growth.servicePrompt}</p></div>
          </div>
          <div class="capabilities-list">${serviceCards}</div>
        </div>
        <div class="services-more reveal">
          <a class="button button--primary" href="${page.servicePage.path}">${page.servicePage.explore}${arrowIcon()}</a>
        </div>
      </div>
    </section>

    <section class="section process" id="process">
      <div class="shell process-layout">
        <div class="process-intro reveal">
          <h2>${market.processTitle}</h2>
          <p class="process-context">${market.processIntro}</p>
          <div class="owner-intro">
            <img src="/assets/fixads-logo.png" alt="" width="48" height="48" />
            <div><strong>${market.ownerLabel}</strong><p>${market.ownerBody}</p>
              <a href="https://www.linkedin.com/in/anton-goldberg-200052193" target="_blank" rel="noopener noreferrer">${market.ownerLink}${arrowIcon()}</a>
            </div>
          </div>
        </div>
        <div class="process-list">${processItems}</div>
      </div>
    </section>

    <section class="section transparency-section">
      <div class="transparency-grid" aria-hidden="true"></div>
      <div class="shell transparency-layout">
        <div class="transparency-copy reveal">
          <p class="eyebrow">${page.transparency.eyebrow}</p>
          <h2>${page.transparency.title}</h2>
          <p>${page.transparency.body}</p>
          <a class="button button--light" href="https://www.fixads.xyz/transparency">${page.transparency.cta}${arrowIcon()}</a>
        </div>
        <div class="dashboard-card reveal" aria-label="Transparency dashboard preview">
          <div class="dashboard-top"><span>FIXADS / OVERVIEW</span><i></i></div>
          <div class="dashboard-chart" aria-hidden="true">
            <svg viewBox="0 0 600 190" preserveAspectRatio="none">
              <defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3264ff" stop-opacity=".5"/><stop offset="1" stop-color="#3264ff" stop-opacity="0"/></linearGradient></defs>
              <path class="chart-area" d="M0 160 C70 150 75 115 140 124 S230 75 290 96 S365 65 405 72 S485 24 600 34 L600 190 L0 190 Z" />
              <path class="chart-line" d="M0 160 C70 150 75 115 140 124 S230 75 290 96 S365 65 405 72 S485 24 600 34" />
            </svg>
          </div>
          <ul>${page.transparency.list.map((item, index) => `<li><span>0${index + 1}</span><strong>${item}</strong><i></i></li>`).join("")}</ul>
        </div>
      </div>
    </section>

    <section class="section about" id="about">
      <div class="shell about-layout">
        <div class="about-title reveal">
          <p class="eyebrow">${page.about.eyebrow}</p>
          <h2>${market.aboutTitle}</h2>
        </div>
        <div class="about-copy reveal">
          ${page.about.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>
      </div>
      <section class="shell workflow-story" aria-labelledby="workflow-title">
        <div class="workflow-visual">
          <img ${photoAttrs('/assets/market-automation.png')} alt="${market.workflowAlt}" loading="lazy" width="1536" height="1024" />
          <p>${market.workflowLabel}</p>
        </div>
        <div class="workflow-copy">
          <h2 id="workflow-title">${market.workflowTitle}</h2>
          <p>${market.workflowIntro}</p>
          <div class="workflow-steps">${market.workflowSteps.map(([title, body], index) => `<details class="workflow-step" name="workflow"${index === 0 ? ' open' : ''}>
            <summary><span class="workflow-number">${index + 1}</span><h3>${title}</h3><span class="workflow-toggle" aria-hidden="true">+</span></summary><p>${body}</p>
          </details>`).join("")}</div>
          <a class="workflow-cta" href="#contact" data-service="6">${market.workflowCta}${arrowIcon()}</a>
        </div>
      </section>
    </section>

    <section class="section home-faq">
      <div class="shell home-faq-layout"><h2>${page.growth.faqTitle}</h2>
        <div>${page.growth.faqs.map(([question, answer]) => `<details class="home-faq-item"><summary>${question}<span aria-hidden="true">+</span></summary><p>${answer}</p></details>`).join("")}</div>
      </div>
    </section>

    <section class="section contact" id="contact">
      <div class="shell contact-layout">
        <div class="contact-intro reveal">
          <p class="eyebrow">${page.form.eyebrow}</p>
          <h2>${page.form.title}</h2>
          <p>${page.form.body}</p>
          <a href="mailto:info@fixads.xyz">info@fixads.xyz</a>

        </div>
        <form class="contact-form reveal" id="contact-form" name="fixads-contact" method="POST" action="/${page.locale}/" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="fixads-contact" />
          <input type="hidden" name="locale" value="${page.locale}" />
          <p class="honeypot" aria-hidden="true"><label>Do not fill this out: <input name="bot-field" tabindex="-1" autocomplete="off" /></label></p>
          <div class="field-row">
            <label class="field"><span>${page.form.fields.name} <i>${page.form.required}</i></span><input name="full-name" autocomplete="name" dir="auto" enterkeyhint="next" maxlength="160" required /></label>
            <label class="field"><span>${page.form.fields.email} <i>${page.form.required}</i></span><input name="email" type="email" autocomplete="email" dir="ltr" enterkeyhint="next" maxlength="254" required /></label>
          </div>
          <label class="field"><span>${page.form.fields.service} <i>${page.form.required}</i></span><select name="service" required>${formOptions}</select></label>
          <label class="field"><span>${page.form.fields.message} <i>${page.growth.optional}</i></span><textarea name="message" rows="3" dir="auto" maxlength="5000" placeholder="${page.growth.messagePlaceholder}"></textarea></label>
          <details class="form-extra">
            <summary>${page.growth.extra}<span aria-hidden="true">+</span></summary>
            <div class="extra-fields">
              <label class="field"><span>${page.form.fields.company}</span><input name="company" autocomplete="organization" dir="auto" maxlength="180" /></label>
              <label class="field"><span>${page.form.fields.website}</span><input name="website" type="url" autocomplete="url" dir="ltr" inputmode="url" placeholder="https://" maxlength="500" /></label>
              <label class="field"><span>${page.form.fields.phone}</span><input name="phone" type="tel" autocomplete="tel" inputmode="tel" dir="ltr" maxlength="60" /></label>
            </div>
          </details>
          <label class="consent"><input name="consent" type="checkbox" value="yes" required /><span>${page.form.fields.consent}</span></label>
          <div class="form-footer">
            <button class="button button--primary" type="submit"><span>${page.form.submit}</span>${arrowIcon()}</button>
            <p id="form-status" class="form-status" role="status" aria-live="polite" tabindex="-1"></p>
          </div>
          <p class="form-note">${page.growth.formNote}</p>
        </form>
          <div class="next-steps"><h3>${page.growth.nextTitle}</h3><ol>
            ${page.growth.nextSteps.map(([title, body]) => `<li><strong>${title}</strong><p>${body}</p></li>`).join("")}
          </ol></div>
      </div>
    </section>
  </main>

  <a class="mobile-contact-dock button button--primary" href="#contact" aria-hidden="true" tabindex="-1">
    ${page.headerCta}${arrowIcon()}
  </a>

  ${renderFooter({ footer: page.footer, activeLocale: page.locale })}
`;

}
