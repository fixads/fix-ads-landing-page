const header = document.querySelector("[data-header]");
const progress = document.querySelector(".scroll-progress span");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const updateViewportState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
  if (!progress) return;
  const available = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${available > 0 ? Math.min(1, window.scrollY / available) : 0})`;
};

if (reducedMotion || !("IntersectionObserver" in window)) {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

window.addEventListener("scroll", updateViewportState, { passive: true });
window.addEventListener("resize", updateViewportState);
updateViewportState();

requestAnimationFrame(() => {
  document.querySelector(".footer-signal")?.classList.add("is-visible");
});
