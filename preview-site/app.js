import { clients, content } from "./content.js";
import { renderFooter } from "./footer.js";

const localeMatch = window.location.pathname.match(/^\/(en|de|he)(?:\/|$)/);
const locale = localeMatch?.[1] || document.documentElement.dataset.locale || "en";
const page = content[locale] || content.en;

document.documentElement.lang = page.locale;
document.documentElement.dir = page.dir;
document.title = page.title;

const updateMetaContent = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("content", value);
};

const canonical = document.querySelector('link[rel="canonical"]');
if (canonical) canonical.setAttribute("href", page.seo.canonical);
document.title = page.seo.title;
updateMetaContent('meta[name="description"]', page.seo.description);
updateMetaContent('meta[property="og:url"]', page.seo.canonical);
updateMetaContent('meta[property="og:title"]', page.seo.title);
updateMetaContent('meta[property="og:description"]', page.seo.description);
updateMetaContent('meta[property="og:locale"]', page.seo.ogLocale);
updateMetaContent('meta[name="twitter:title"]', page.seo.title);
updateMetaContent('meta[name="twitter:description"]', page.seo.description);

const skipLink = document.querySelector(".skip-link");
if (skipLink) skipLink.textContent = page.skip;

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
  },
  "Google Ads": {
    src: "/assets/platforms/google-ads.svg",
    className: "ticker-logo--google",
    width: 251,
    height: 230,
  },
  "Yelp Ads": {
    src: "/assets/platforms/yelp.svg",
    className: "ticker-logo--yelp",
    width: 40,
    height: 53,
  },
  "Amazon Ads": {
    src: "/assets/platforms/amazon-ads.png",
    className: "ticker-logo--amazon",
    width: 4496,
    height: 1134,
    lockup: true,
  },
};

const tickerItem = (item, hidden = false) => {
  const mark = platformMarks[item];
  const content = mark
    ? `<span class="ticker-brand${mark.lockup ? " ticker-brand--lockup" : ""}">
        <img class="ticker-logo ${mark.className}" src="${mark.src}" alt="" aria-hidden="true" width="${mark.width}" height="${mark.height}" decoding="async" />
        ${mark.lockup ? `<span class="ticker-label--sr">${item}</span>` : `<span class="ticker-label">${item}</span>`}
      </span>`
    : `<span class="ticker-label">${item}</span>`;

  return `<span class="ticker-item${mark ? " ticker-item--platform" : ""}"${hidden ? ' aria-hidden="true"' : ""}>${content}<i aria-hidden="true"></i></span>`;
};

const tickerRail = [
  ...page.ticker.map((item) => tickerItem(item)),
  ...page.ticker.map((item) => tickerItem(item, true)),
].join("");

const serviceCards = page.services
  .map(
    (service, index) => `
      <article class="service-card reveal reveal-soft" data-accent="${service.accent}">
        <div class="service-card__top">
          <span class="service-number">${service.visual}</span>
          <span class="service-line" aria-hidden="true"></span>
        </div>
        ${
          service.image
            ? `<figure class="service-image-wrap">
                <img class="service-image" src="${service.image}" alt="${service.imageAlt}" loading="lazy" width="1400" height="1050" />
                <span class="image-index" aria-hidden="true">0${index + 1}</span>
              </figure>`
            : `<div class="service-visual" aria-hidden="true">
                <span></span><span></span><span></span><span></span>
              </div>`
        }
        <h3>${service.title}</h3>
        <div class="service-copy">${service.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>
        <ul class="tag-list" aria-label="Capabilities">
          ${service.tags.map((tag) => `<li>${tag}</li>`).join("")}
        </ul>
      </article>`,
  )
  .join("");

const processItems = page.process.items
  .map(
    (item) => `
      <article class="process-item reveal reveal-soft">
        <span class="process-number">${item.number}</span>
        <div>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </div>
      </article>`,
  )
  .join("");

const clientSet = (hidden = false) => `
  <div class="client-set" role="list"${hidden ? ' aria-hidden="true"' : ""}>
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
            role="listitem"
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

const app = document.querySelector("#app");

app.innerHTML = `
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

  <main id="main-content">
    <section class="hero" id="home">
      <div class="hero-image" aria-hidden="true">
        <img src="/assets/hero-team.jpg" alt="" width="1920" height="1080" fetchpriority="high" />
        <div class="hero-image__veil"></div>
      </div>
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="shell hero-inner">
        <div class="hero-copy">
          <p class="eyebrow hero-eyebrow reveal">${page.hero.eyebrow}</p>
          <h1 class="hero-title" data-split>${page.hero.title}</h1>
          <p class="hero-body reveal">${page.hero.body}</p>
          <p class="hero-care reveal">${page.hero.care}</p>
          <div class="hero-actions reveal">
            <a class="button button--primary" href="#contact">${page.hero.cta}${arrowIcon()}</a>
            <a class="button button--ghost" href="${page.servicePage.path}">${page.hero.secondary}</a>
          </div>
        </div>
        <aside class="signal-card reveal" aria-label="${page.hero.signal}">
          <div class="signal-card__header">
            <span class="status-dot"></span>
            <span>${page.hero.signal}</span>
            <strong>LIVE</strong>
          </div>
          <div class="signal-map" aria-hidden="true">
            <span class="signal-node node-a"></span>
            <span class="signal-node node-b"></span>
            <span class="signal-node node-c"></span>
            <span class="signal-node node-d"></span>
            <span class="signal-path path-a"></span>
            <span class="signal-path path-b"></span>
            <span class="signal-path path-c"></span>
          </div>
          <ol class="signal-list">
            ${page.hero.metrics.map((metric, index) => `<li><span>0${index + 1}</span>${metric}<i aria-hidden="true"></i></li>`).join("")}
          </ol>
        </aside>
      </div>
      <div class="hero-caption shell">
        <span>FixAds / 2026</span>
        <span>${page.hero.photoAlt}</span>
      </div>
    </section>

    <section class="ticker" aria-label="Platforms and capabilities">
      <div class="ticker-track">
        ${tickerRail}
      </div>
    </section>

    <section class="section services" id="services">
      <div class="shell">
        <div class="section-heading reveal">
          <p class="eyebrow">${page.servicesHeading.eyebrow}</p>
          <h2>${page.servicesHeading.title}</h2>
          <p>${page.servicesHeading.body}</p>
        </div>
        <div class="service-grid">${serviceCards}</div>
        <div class="services-more reveal">
          <a class="button button--primary" href="${page.servicePage.path}">${page.servicePage.explore}${arrowIcon()}</a>
        </div>
      </div>
    </section>

    <section class="section process" id="process">
      <div class="shell process-layout">
        <div class="process-intro reveal">
          <p class="eyebrow">${page.process.eyebrow}</p>
          <h2>${page.process.title}</h2>
          <div class="orbit-mark" aria-hidden="true">
            <span></span><span></span><span></span><i></i>
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

    <section class="section clients" id="clients">
      <div class="shell section-heading section-heading--center reveal">
        <p class="eyebrow">${page.clients.eyebrow}</p>
        <h2>${page.clients.title}</h2>
        <p>${page.clients.body}</p>
      </div>
      <div class="client-rail" aria-label="${page.clients.eyebrow}"><div class="client-track">${clientRail}</div></div>
      <p class="shell client-note">${page.clients.note}</p>
    </section>

    <section class="section about" id="about">
      <div class="shell about-layout">
        <div class="about-title reveal">
          <p class="eyebrow">${page.about.eyebrow}</p>
          <h2>${page.about.title}</h2>
        </div>
        <div class="about-copy reveal">
          ${page.about.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>
      </div>
      <div class="shell system-diagram reveal" aria-label="Connected digital system">
        <div class="system-core"><img src="/assets/fixads-logo.png" alt="" width="72" height="72" /><strong>FixAds</strong></div>
        ${page.hero.metrics.map((metric, index) => `<div class="system-node system-node--${index + 1}"><span>0${index + 1}</span>${metric}</div>`).join("")}
        <svg viewBox="0 0 1000 330" preserveAspectRatio="none" aria-hidden="true">
          <path d="M500 165 C365 165 360 55 185 55"/><path d="M500 165 C635 165 640 55 815 55"/>
          <path d="M500 165 C365 165 360 275 185 275"/><path d="M500 165 C635 165 640 275 815 275"/>
        </svg>
      </div>
    </section>

    <section class="closing-cta">
      <div class="closing-orb" aria-hidden="true"></div>
      <div class="shell closing-inner reveal">
        <p class="eyebrow">${page.closing.eyebrow}</p>
        <h2>${page.closing.title}</h2>
        <p>${page.closing.body}</p>
        <a class="button button--light" href="#contact">${page.closing.cta}${arrowIcon()}</a>
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
        <form class="contact-form reveal" id="contact-form" name="fixads-contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" novalidate>
          <input type="hidden" name="form-name" value="fixads-contact" />
          <input type="hidden" name="locale" value="${page.locale}" />
          <p class="honeypot" aria-hidden="true"><label>Do not fill this out: <input name="bot-field" tabindex="-1" autocomplete="off" /></label></p>
          <div class="field-row">
            <label class="field"><span>${page.form.fields.name} <i>${page.form.required}</i></span><input name="full-name" autocomplete="name" dir="auto" enterkeyhint="next" required /></label>
            <label class="field"><span>${page.form.fields.company}</span><input name="company" autocomplete="organization" dir="auto" enterkeyhint="next" /></label>
          </div>
          <div class="field-row">
            <label class="field"><span>${page.form.fields.phone}</span><input name="phone" type="tel" autocomplete="tel" inputmode="tel" dir="ltr" enterkeyhint="next" /></label>
            <label class="field"><span>${page.form.fields.email} <i>${page.form.required}</i></span><input name="email" type="email" autocomplete="email" dir="ltr" enterkeyhint="next" required /></label>
          </div>
          <div class="field-row">
            <label class="field"><span>${page.form.fields.website}</span><input name="website" type="url" autocomplete="url" dir="ltr" enterkeyhint="next" placeholder="https://" /></label>
            <label class="field"><span>${page.form.fields.service} <i>${page.form.required}</i></span><select name="service" required>${formOptions}</select></label>
          </div>
          <label class="field"><span>${page.form.fields.message} <i>${page.form.required}</i></span><textarea name="message" rows="5" dir="auto" enterkeyhint="enter" required></textarea></label>
          <label class="consent"><input name="consent" type="checkbox" value="yes" required /><span>${page.form.fields.consent}</span></label>
          <div class="form-footer">
            <button class="button button--primary" type="submit"><span>${page.form.submit}</span>${arrowIcon()}</button>
            <p id="form-status" class="form-status" role="status" aria-live="polite"></p>
          </div>
        </form>
      </div>
    </section>
  </main>

  <a class="mobile-contact-dock button button--primary" href="#contact" aria-hidden="true" tabindex="-1">
    ${page.headerCta}${arrowIcon()}
  </a>

  ${renderFooter({ footer: page.footer, activeLocale: page.locale })}
`;

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const pageMain = document.querySelector("main");
const siteFooter = document.querySelector(".site-footer");
const mobileContactDock = document.querySelector(".mobile-contact-dock");
let menuReturnFocus = null;
let renderMobileDock = () => {};
let lockedScrollY = 0;

const setBackgroundInert = (inert) => {
  [pageMain, siteFooter, mobileContactDock].forEach((element) => {
    if (element) element.inert = inert;
  });
};

const lockPageScroll = () => {
  lockedScrollY = window.scrollY;
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
};

const unlockPageScroll = () => {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
  window.scrollTo(0, lockedScrollY);
};

const closeMenu = (restoreFocus = true) => {
  const wasOpen = document.body.classList.contains("menu-open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", page.menu);
  mobileMenu?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("menu-open");
  if (wasOpen) unlockPageScroll();
  setBackgroundInert(false);
  renderMobileDock();
  if (restoreFocus && menuReturnFocus instanceof HTMLElement) menuReturnFocus.focus();
};

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  if (!open) {
    closeMenu();
    return;
  }

  menuReturnFocus = document.activeElement;
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", page.close);
  mobileMenu.setAttribute("aria-hidden", "false");
  lockPageScroll();
  document.body.classList.add("menu-open");
  setBackgroundInert(true);
  renderMobileDock();
  window.setTimeout(() => mobileMenu.querySelector("a")?.focus({ preventScroll: true }), 120);
});

mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("resize", () => {
  if (window.innerWidth > 1180 && menuButton?.getAttribute("aria-expanded") === "true") {
    closeMenu(false);
  }
});
window.addEventListener("keydown", (event) => {
  const menuIsOpen = menuButton?.getAttribute("aria-expanded") === "true";
  if (event.key === "Escape" && menuIsOpen) {
    closeMenu();
    return;
  }

  if (event.key !== "Tab" || !menuIsOpen) return;
  const focusable = [menuButton, ...mobileMenu.querySelectorAll("a")].filter(Boolean);
  const first = focusable[0];
  const last = focusable.at(-1);
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

if (mobileContactDock) {
  const heroActions = document.querySelector(".hero-actions");
  const dockBlockers = new Set();
  let hasPassedHeroActions = false;
  let dockRenderFrame = 0;

  renderMobileDock = () => {
    const canShow =
      window.matchMedia("(max-width: 620px)").matches &&
      hasPassedHeroActions &&
      dockBlockers.size === 0 &&
      !document.body.classList.contains("menu-open");
    mobileContactDock.classList.toggle("is-visible", canShow);
    mobileContactDock.setAttribute("aria-hidden", String(!canShow));
    mobileContactDock.tabIndex = canShow ? 0 : -1;
  };

  const updateHeroPosition = () => {
    if (!heroActions) return;
    hasPassedHeroActions = heroActions.getBoundingClientRect().bottom < 0;
    renderMobileDock();
  };

  const scheduleMobileDockRender = () => {
    if (dockRenderFrame) return;
    dockRenderFrame = window.requestAnimationFrame(() => {
      dockRenderFrame = 0;
      updateHeroPosition();
    });
  };

  if ("IntersectionObserver" in window && heroActions) {
    const heroActionObserver = new IntersectionObserver(
      ([entry]) => {
        hasPassedHeroActions = !entry.isIntersecting && entry.boundingClientRect.bottom < 0;
        renderMobileDock();
      },
      { threshold: 0 },
    );
    heroActionObserver.observe(heroActions);

    const dockBlockerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) dockBlockers.add(entry.target);
          else dockBlockers.delete(entry.target);
        });
        renderMobileDock();
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    [document.querySelector("#contact"), siteFooter]
      .filter(Boolean)
      .forEach((element) => dockBlockerObserver.observe(element));
  } else {
    window.addEventListener("scroll", scheduleMobileDockRender, { passive: true });
  }

  window.addEventListener("scroll", scheduleMobileDockRender, { passive: true });
  window.addEventListener("resize", scheduleMobileDockRender);
  updateHeroPosition();
}

const splitTitle = document.querySelector("[data-split]");
if (splitTitle) {
  const words = splitTitle.textContent.trim().split(/\s+/);
  splitTitle.innerHTML = words
    .map(
      (word, index) =>
        `<span class="${index === words.length - 1 ? "hero-title__key" : ""}" style="--word-index:${index}"><i>${word}</i></span>`,
    )
    .join(" ");
  const startHeroTitle = () => requestAnimationFrame(() => splitTitle.classList.add("is-ready"));
  if (
    document.documentElement.classList.contains("loader-wanted") &&
    !document.documentElement.classList.contains("loader-done")
  ) {
    window.addEventListener("fixads:ready", startHeroTitle, { once: true });
  } else {
    startHeroTitle();
  }
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
const revealItems = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8%" },
  );
  revealItems.forEach((item) => observer.observe(item));
}

const marqueeTracks = document.querySelectorAll(".ticker-track, .client-track");
const updateMarquee = (track) => {
  const shouldPause =
    reducedMotion || document.hidden || track.dataset.inViewport !== "true";
  track.classList.toggle("is-paused", shouldPause);
};

if ("IntersectionObserver" in window && !reducedMotion) {
  const marqueeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.dataset.inViewport = String(entry.isIntersecting);
        updateMarquee(entry.target);
      });
    },
    { rootMargin: "80px 0px", threshold: 0 },
  );
  marqueeTracks.forEach((track) => marqueeObserver.observe(track));
} else {
  marqueeTracks.forEach((track) => {
    track.dataset.inViewport = "true";
    updateMarquee(track);
  });
}

document.addEventListener("visibilitychange", () => {
  marqueeTracks.forEach(updateMarquee);
});

document.querySelectorAll(".client-rail").forEach((rail) => {
  let resumeTimer = 0;
  rail.addEventListener(
    "pointerdown",
    (event) => {
      if (event.pointerType !== "touch") return;
      const track = rail.querySelector(".client-track");
      if (!track) return;
      window.clearTimeout(resumeTimer);
      track.classList.add("is-touch-paused");
      resumeTimer = window.setTimeout(() => track.classList.remove("is-touch-paused"), 2400);
    },
    { passive: true },
  );
});

const header = document.querySelector("[data-header]");
const progressBar = document.querySelector(".scroll-progress span");
const heroImage = document.querySelector(".hero-image img");
let ticking = false;

const updateScroll = () => {
  const scrollY = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  header?.classList.toggle("is-scrolled", scrollY > 24);
  if (progressBar) progressBar.style.transform = `scaleX(${scrollable > 0 ? scrollY / scrollable : 0})`;
  if (heroImage && !reducedMotion && !coarsePointer) {
    heroImage.style.transform = `translate3d(0, ${Math.min(scrollY * 0.1, 70)}px, 0) scale(1.04)`;
  }
  ticking = false;
};

window.addEventListener(
  "scroll",
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateScroll);
  },
  { passive: true },
);
updateScroll();

const glow = document.querySelector(".cursor-glow");
if (glow && !reducedMotion && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener(
    "pointermove",
    (event) => {
      glow.style.setProperty("--x", `${event.clientX}px`);
      glow.style.setProperty("--y", `${event.clientY}px`);
      glow.classList.add("is-active");
    },
    { passive: true },
  );
}

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const submit = contactForm.querySelector("button[type='submit']");
  const label = submit.querySelector("span");
  submit.disabled = true;
  label.textContent = page.form.sending;
  formStatus.textContent = "";
  formStatus.className = "form-status";

  try {
    const data = new FormData(contactForm);
    const response = await fetch(`/${page.locale}/`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    });

    if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);
    contactForm.reset();
    formStatus.textContent = page.form.success;
    formStatus.classList.add("is-success");
  } catch (error) {
    console.error(error);
    formStatus.textContent = page.form.error;
    formStatus.classList.add("is-error");
  } finally {
    submit.disabled = false;
    label.textContent = page.form.submit;
  }
});
