"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hoverType, setHoverType] = useState<"default" | "pointer" | "button" | "view" | "orbit">("default");
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReduced) return;

    // Instant 1:1 cursor movement without ANY trailing follower/delay
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const orbitTarget = target.closest("[data-cursor='orbit']");
      if (orbitTarget) {
        setHoverType("orbit");
        return;
      }

      const viewTarget = target.closest("article, [data-cursor='view']");
      if (viewTarget) {
        setHoverType("view");
        return;
      }

      const button = target.closest("button, [role='button'], [data-cursor='button']");
      if (button) {
        setHoverType("button");
        return;
      }

      const link = target.closest("a, input, textarea, select");
      if (link) {
        setHoverType("pointer");
        return;
      }

      setHoverType("default");
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  // Don't render on SSR / touch
  if (typeof window !== "undefined" && window.matchMedia?.("(pointer: coarse)").matches) {
    return null;
  }

  const isInteractive = hoverType !== "default";

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[99999] will-change-transform hidden md:block"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.15s ease-out",
        viewTransitionName: "custom-cursor",
      }}
    >
      {/* ── 1. Default State: Sleek Futuristic Cyber Pointer ── */}
      {!isInteractive && (
        <div
          className={`-translate-x-1 -translate-y-1 transition-transform duration-75 ${
            isMouseDown ? "scale-90" : "scale-100"
          }`}
          style={{
            filter: "drop-shadow(0 2px 8px rgba(128, 0, 32, 0.45)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))",
          }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
          >
            {/* Outer Cyber Blade Body */}
            <path
              d="M3 2L23 11L14 14L11 23L3 2Z"
              fill="var(--color-accent)"
              stroke="var(--color-bg)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Inner Futuristic Edge Highlight */}
            <path
              d="M5.5 4.5L18 11.5L12.5 13.5L10.5 19L5.5 4.5Z"
              fill="var(--color-accent-light)"
              opacity="0.8"
            />
            {/* Core Laser Targeting Pip */}
            <circle cx="8" cy="8" r="1.5" fill="#FFFFFF" />
            {/* Corner Tech Notch Indicator */}
            <path
              d="M17 17L22 22"
              stroke="var(--color-accent)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {/* ── 2. Interactive State: Futuristic HUD Targeting Reticle ── */}
      {isInteractive && (
        <div
          className={`-translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ${
            isMouseDown ? "scale-90" : "scale-105"
          }`}
          style={{
            filter: "drop-shadow(0 0 10px rgba(128, 0, 32, 0.5))",
          }}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
          >
            {/* Top-Left Bracket */}
            <path
              d="M5 12V5H12"
              stroke="var(--color-accent)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Top-Right Bracket */}
            <path
              d="M24 5H31V12"
              stroke="var(--color-accent)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Bottom-Left Bracket */}
            <path
              d="M5 24V31H12"
              stroke="var(--color-accent)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Bottom-Right Bracket */}
            <path
              d="M31 24V31H24"
              stroke="var(--color-accent)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Center Precision Crosshair Lines */}
            <line x1="18" y1="9" x2="18" y2="13" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="18" y1="23" x2="18" y2="27" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="9" y1="18" x2="13" y2="18" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="23" y1="18" x2="27" y2="18" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />

            {/* Center Glowing Dot */}
            <circle cx="18" cy="18" r="2.5" fill="var(--color-accent)" />
            <circle cx="18" cy="18" r="1" fill="#FFFFFF" />

            {/* Rotating micro-hud tick ring */}
            <circle
              cx="18"
              cy="18"
              r="10"
              stroke="var(--color-accent)"
              strokeWidth="0.8"
              strokeDasharray="3 4"
              opacity="0.6"
              className="animate-[spin_8s_linear_infinite]"
            />
          </svg>

          {/* Optional hover badge for view/orbit */}
          {hoverType === "view" && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded bg-accent text-[9px] font-mono font-bold text-white tracking-wider uppercase shadow-md whitespace-nowrap">
              VIEW
            </div>
          )}
          {hoverType === "orbit" && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2 py-0.5 rounded-full bg-accent/90 border border-accent text-[9px] font-mono font-bold text-white tracking-wider uppercase shadow-md whitespace-nowrap">
              DRAG 3D
            </div>
          )}
        </div>
      )}
    </div>
  );
}
