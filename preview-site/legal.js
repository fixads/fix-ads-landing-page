import { sharedFooter } from "./content.js";
import { renderFooter } from "./footer.js";

const footerMount = document.querySelector("#legal-footer");
if (footerMount) {
  footerMount.outerHTML = renderFooter({
    footer: { ...sharedFooter, current: "International — English" },
    activeLocale: "en",
    homeHref: "/en/",
    marketingPath: "/en/",
    topHref: "#top",
  });
}

requestAnimationFrame(() => {
  document.querySelector(".footer-signal")?.classList.add("is-visible");
});
