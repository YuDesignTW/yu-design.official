"use client";
import { useEffect, useRef, type ReactNode, type PointerEvent } from "react";

export function MagneticLink({
  href,
  children,
  className = "",
  label,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  function move(event: PointerEvent<HTMLAnchorElement>) {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left - bounds.width / 2) * 0.18;
    const y = (event.clientY - bounds.top - bounds.height / 2) * 0.18;
    if (ref.current)
      ref.current.style.transform = `translate3d(${x}px,${y}px,0)`;
  }
  return (
    <a
      ref={ref}
      href={href}
      className={`yg-magnetic ${className}`}
      aria-label={label}
      onPointerMove={move}
      onPointerLeave={() => {
        if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
      }}
    >
      <span>{children}</span>
    </a>
  );
}

export function usePortfolioMotion() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const page = root.current;
    if (!page) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reveals = page.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    reveals.forEach((el) => observer.observe(el));
    const name = page.querySelector<HTMLElement>(".yg-name-offset");
    const strips = page.querySelectorAll<HTMLElement>(".yg-film-track");
    let frame = 0;
    function render() {
      frame = 0;
      if (reduced.matches) return;
      const y = window.scrollY;
      if (name && y < window.innerHeight * 1.5)
        name.style.transform = `translate3d(${-y * 0.16}px,0,0)`;
      strips.forEach((strip, i) => {
        const rect = strip.parentElement!.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight)
          strip.style.transform = `translate3d(${(rect.top - window.innerHeight / 2) * (i ? -0.08 : 0.08)}px,0,0)`;
      });
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    const onPreference = () => {
      [name, ...Array.from(strips)].forEach((el) => {
        if (el) el.style.transform = "";
      });
      onScroll();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    reduced.addEventListener("change", onPreference);
    onScroll();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      reduced.removeEventListener("change", onPreference);
    };
  }, []);
  return root;
}
