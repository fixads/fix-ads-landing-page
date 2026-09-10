import { content } from "./content.js";

async function initializeHomepage() {

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

const app = document.querySelector("#app");
if (app.dataset.renderedLocale !== page.locale) {
  const { renderHomePage } = await import("./render-home.js");
  app.innerHTML = renderHomePage(page);
  app.dataset.renderedLocale = page.locale;
}

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

document.querySelectorAll(".client-rail, .ticker").forEach((rail) => {
  let resumeTimer = 0;
  rail.addEventListener(
    "pointerdown",
    (event) => {
      if (event.pointerType !== "touch") return;
      const track = rail.querySelector(".client-track, .ticker-track");
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
if (contactForm) contactForm.noValidate = true;

document.querySelectorAll("[data-goal]").forEach((choice) => {
  choice.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelectorAll("[data-goal]").forEach((item) => {
      if (item === choice) item.setAttribute("aria-current", "true");
      else item.removeAttribute("aria-current");
    });
    document.querySelectorAll("[data-goal-panel]").forEach((panel) => {
      panel.hidden = panel.dataset.goalPanel !== choice.dataset.goal;
    });
  });
});

document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    const select = contactForm?.querySelector('[name="service"]');
    if (select) select.selectedIndex = Number(link.dataset.service);
  });
});

contactForm?.querySelector('[name="website"]')?.addEventListener("blur", (event) => {
  const value = event.target.value.trim();
  if (value && !/^[a-z][a-z\d+.-]*:/i.test(value)) event.target.value = `https://${value}`;
});

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    const firstInvalid = contactForm.querySelector(":invalid");
    const details = firstInvalid?.closest("details");
    if (details) details.open = true;
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
    formStatus.focus({ preventScroll: true });
  } catch (error) {
    console.error(error);
    formStatus.textContent = page.form.error;
    formStatus.classList.add("is-error");
  } finally {
    submit.disabled = false;
    label.textContent = page.form.submit;
  }
});
}

initializeHomepage();
