"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    (window as any).__lenis = lenis;

    // Support external code pausing/resuming lenis (e.g. modals)
    const handleStop = () => lenis.stop();
    const handleStart = () => lenis.start();
    window.addEventListener("lenis-stop", handleStop);
    window.addEventListener("lenis-start", handleStart);

    // Allow external code to freeze lenis momentarily (e.g. during accordion expand)
    const handleFreeze = () => {
      lenis.stop();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => lenis.start());
      });
    };
    window.addEventListener("lenis-freeze", handleFreeze);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href) {
          const el = document.querySelector(href);
          if (el) {
            e.preventDefault();
            lenis.scrollTo(el as HTMLElement, { offset: -80 });
          }
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("lenis-stop", handleStop);
      window.removeEventListener("lenis-start", handleStart);
      window.removeEventListener("lenis-freeze", handleFreeze);
      document.removeEventListener("click", handleClick);
      delete (window as any).__lenis;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
