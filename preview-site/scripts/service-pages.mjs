import { content } from "../content.js";
import { renderFooter } from "../footer.js";

const routes = {
  en: "/en/services/",
  de: "/de/leistungen/",
  he: "/he/services/",
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const arrowIcon = (rtl = false) =>
  `<svg class="arrow-icon${rtl ? " is-flipped" : ""}" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5"/></svg>`;

const renderServiceCard = (service, index, rtl) => `
  <article class="service-detail reveal reveal-soft" id="service-${index + 1}">
    <div class="service-detail__number">
      <span>0${index + 1}</span>
      <i aria-hidden="true"></i>
    </div>
    <div class="service-detail__content">
      <h2>${service.title}</h2>
      <div class="service-detail__copy">
        ${service.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
      <ul class="tag-list" aria-label="Capabilities">
        ${service.tags.map((tag) => `<li>${tag}</li>`).join("")}
      </ul>
    </div>
    ${
      service.image
        ? `<figure class="service-detail__image">
            <img src="${service.image}" alt="${escapeHtml(service.imageAlt || service.title)}" loading="lazy" width="1400" height="1050" />
          </figure>`
        : `<div class="service-detail__signal" aria-hidden="true">
            <span></span><span></span><span></span><i></i>
          </div>`
    }
    <a class="service-detail__contact" href="/${rtl ? "he" : "en"}/#contact" aria-hidden="true" tabindex="-1">${arrowIcon(rtl)}</a>
  </article>
`;

const renderProcessItem = (item) => `
  <article class="service-method__item reveal reveal-soft">
    <span>${item.number}</span>
    <div>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </div>
  </article>
`;

const renderFaqItem = (item) => `
  <article class="service-faq__item reveal reveal-soft">
    <h3>${item.question}</h3>
    <p class="service-faq__answer">${item.answer}</p>
  </article>
`;

export const servicePageEntries = Object.entries(content).map(([locale, page]) => {
  const service = page.servicePage;
  const rtl = page.dir === "rtl";
  const alternates = Object.entries(routes)
    .map(([language, href]) => `<link rel="alternate" hreflang="${language}" href="https://www.fixads.xyz${href}" />`)
    .join("\n    ");
  const serviceItems = page.services.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      "@id": `${service.canonical}#service-${index + 1}`,
      name: item.title,
      description: item.body.join(" "),
      url: `${service.canonical}#service-${index + 1}`,
      provider: { "@id": "https://www.fixads.xyz/#organization" },
    },
  }));
  const faqItems = service.faqItems.map((item, index) => ({
    "@type": "Question",
    "@id": `${service.canonical}#question-${index + 1}`,
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.fixads.xyz/#organization",
        name: "FixAds",
        url: "https://www.fixads.xyz/",
        logo: "https://www.fixads.xyz/assets/fixads-logo.png",
        image: "https://www.fixads.xyz/assets/hero-team.jpg",
        email: "info@fixads.xyz",
        description: page.seo.description,
        sameAs: ["https://www.linkedin.com/company/fixads"],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales and customer support",
          email: "info@fixads.xyz",
          url: `https://www.fixads.xyz/${locale}/#contact`,
          availableLanguage: ["English", "German", "Hebrew"],
        },
      },
      {
        "@type": "Person",
        "@id": "https://www.fixads.xyz/#anton-goldberg",
        name: "Anton Goldberg",
        jobTitle: "Owner",
        worksFor: { "@id": "https://www.fixads.xyz/#organization" },
        sameAs: ["https://www.linkedin.com/in/anton-goldberg-200052193"],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.fixads.xyz/#website",
        url: "https://www.fixads.xyz/",
        name: "FixAds",
        publisher: { "@id": "https://www.fixads.xyz/#organization" },
        inLanguage: ["en", "de", "he"],
      },
      {
        "@type": ["CollectionPage", "FAQPage"],
        "@id": `${service.canonical}#page`,
        url: service.canonical,
        name: service.seoTitle,
        description: service.seoDescription,
        inLanguage: locale,
        dateModified: service.reviewedDate,
        reviewedBy: { "@id": "https://www.fixads.xyz/#anton-goldberg" },
        publisher: { "@id": "https://www.fixads.xyz/#organization" },
        isPartOf: { "@id": "https://www.fixads.xyz/#website" },
        about: { "@id": "https://www.fixads.xyz/#organization" },
        breadcrumb: { "@id": `${service.canonical}#breadcrumb` },
        hasPart: { "@id": `${service.canonical}#services` },
        mainEntity: faqItems,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".service-page-hero__intro", ".service-faq__answer"],
        },
      },
      {
        "@type": "ItemList",
        "@id": `${service.canonical}#services`,
        name: service.detailTitle,
        numberOfItems: serviceItems.length,
        itemListElement: serviceItems,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${service.canonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: service.homeLabel,
            item: `https://www.fixads.xyz/${locale}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: service.detailTitle,
            item: service.canonical,
          },
        ],
      },
    ],
  }).replaceAll("<", "\\u003c");

  const html = `<!doctype html>
<html lang="${locale}" dir="${page.dir}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="theme-color" content="#070b18" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="FixAds" />
    <meta name="description" content="${escapeHtml(service.seoDescription)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${service.canonical}" />
    <meta property="og:title" content="${escapeHtml(service.seoTitle)}" />
    <meta property="og:description" content="${escapeHtml(service.seoDescription)}" />
    <meta property="og:image" content="https://www.fixads.xyz/assets/hero-team.jpg" />
    <meta property="og:site_name" content="FixAds" />
    <meta property="og:locale" content="${page.seo.ogLocale}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(service.seoTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(service.seoDescription)}" />
    <meta name="twitter:image" content="https://www.fixads.xyz/assets/hero-team.jpg" />
    <link rel="icon" type="image/png" href="/assets/fixads-logo.png" />
    <link rel="canonical" href="${service.canonical}" />
    ${alternates}
    <link rel="alternate" hreflang="x-default" href="https://www.fixads.xyz/en/services/" />
    <link rel="stylesheet" href="/styles.css" />
    <script type="application/ld+json">${schema}</script>
    <title>${escapeHtml(service.seoTitle)}</title>
  </head>
  <body id="top" class="service-page-body">
    <a class="skip-link" href="#main-content">${page.skip}</a>
    <div class="scroll-progress" aria-hidden="true"><span></span></div>

    <header class="service-page-header" data-header>
      <div class="shell service-page-header__inner">
        <a class="brand" href="/${locale}/" aria-label="FixAds home">
          <span class="brand-mark"><img src="/assets/fixads-logo.png" alt="" width="72" height="72" /></span>
          <span class="brand-name">FixAds</span>
        </a>
        <nav class="service-page-header__actions" aria-label="Page navigation">
          <a class="service-page-back" href="/${locale}/">${service.back}</a>
          <a class="button button--small button--light" href="/${locale}/#contact">${page.headerCta}${arrowIcon(rtl)}</a>
        </nav>
      </div>
    </header>

    <main id="main-content">
      <section class="service-page-hero">
        <div class="service-page-hero__grid" aria-hidden="true"></div>
        <div class="service-page-orbit" aria-hidden="true"><span></span><span></span><i></i></div>
        <div class="shell service-page-hero__inner">
          <p class="eyebrow reveal">${service.eyebrow}</p>
          <h1 class="reveal">${service.title}</h1>
          <p class="service-page-hero__intro reveal">${service.intro}</p>
          <a class="button button--primary reveal" href="#service-list">${service.explore}${arrowIcon(rtl)}</a>
        </div>
        <nav class="shell service-index reveal" aria-label="${service.indexLabel}">
          ${page.services.map((item, index) => `<a href="#service-${index + 1}"><span>0${index + 1}</span>${item.title}</a>`).join("")}
        </nav>
      </section>

      <section class="section service-page-details" id="service-list">
        <div class="shell">
          <div class="section-heading reveal">
            <p class="eyebrow">${service.detailEyebrow}</p>
            <h2>${service.detailTitle}</h2>
            <p>${page.servicesHeading.body}</p>
          </div>
          <div class="service-detail-list">
            ${page.services.map((item, index) => renderServiceCard(item, index, rtl).replace(`/${rtl ? "he" : "en"}/#contact`, `/${locale}/#contact`)).join("")}
          </div>
        </div>
      </section>

      <section class="section service-method">
        <div class="shell service-method__layout">
          <div class="service-method__intro reveal">
            <p class="eyebrow">${service.approachEyebrow}</p>
            <h2>${service.approachTitle}</h2>
          </div>
          <div class="service-method__list">
            ${page.process.items.map(renderProcessItem).join("")}
          </div>
        </div>
      </section>

      <section class="section service-faq" id="faq">
        <div class="shell">
          <div class="section-heading service-faq__heading reveal">
            <p class="eyebrow">${service.faqEyebrow}</p>
            <h2>${service.faqTitle}</h2>
            <p class="service-review">
              ${service.reviewedBy}
              <span aria-hidden="true">·</span>
              <time datetime="${service.reviewedDate}">${service.reviewedDateLabel}</time>
            </p>
          </div>
          <div class="service-faq__grid">
            ${service.faqItems.map(renderFaqItem).join("")}
          </div>
        </div>
      </section>

      <section class="service-page-cta">
        <div class="service-page-cta__grid" aria-hidden="true"></div>
        <div class="shell service-page-cta__inner reveal">
          <p class="eyebrow">${page.closing.eyebrow}</p>
          <h2>${service.ctaTitle}</h2>
          <p>${service.ctaBody}</p>
          <a class="button button--light" href="/${locale}/#contact">${service.cta}${arrowIcon(rtl)}</a>
        </div>
      </section>
    </main>

    ${renderFooter({
      footer: page.footer,
      activeLocale: locale,
      homeHref: `/${locale}/`,
      marketingPath: `/${locale}/`,
      topHref: "#top",
    })}
    <script type="module" src="/service-page.js"></script>
  </body>
</html>`;

  return {
    locale,
    route: routes[locale],
    relativePath: `${routes[locale].replace(/^\/|\/$/g, "")}/index.html`,
    html,
  };
});
