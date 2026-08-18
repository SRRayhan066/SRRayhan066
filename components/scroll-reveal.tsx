"use client";

import { useEffect } from "react";

const STAGGER_MS = 80;

export function ScrollReveal() {
  useEffect(() => {
    const targets =
      document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!targets.length) return;

    const revealAll = () =>
      targets.forEach((el) => el.classList.add("is-revealed"));

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, i) => {
            const el = entry.target as HTMLElement;
            el.style.setProperty("--reveal-delay", `${i * STAGGER_MS}ms`);
            el.classList.add("is-revealed");
            observer.unobserve(el);
          });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
