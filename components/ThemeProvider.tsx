"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { flushSync } from "react-dom";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: (element?: HTMLElement | null) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);
  const isTransitioning = useRef(false);
  const fallbackTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) {
      setTheme(stored);
      if (stored === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);

    // Update meta theme-color for mobile browser address bar
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", theme === "dark" ? "#0A0A0A" : "#F7F7F5");
    }
  }, [theme, mounted]);

  const toggleTheme = (element?: HTMLElement | null) => {
    if (isTransitioning.current) return;
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    const doc = document as Document & {
      startViewTransition?: (callback: () => void | Promise<void>) => {
        ready: Promise<void>;
        finished: Promise<void>;
        updateCallbackDone: Promise<void>;
      };
    };

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Fallback if View Transitions API is not supported or reduced motion is requested
    if (!doc.startViewTransition || prefersReducedMotion) {
      if (prefersReducedMotion) {
        setTheme(nextTheme);
        return;
      }

      // Smooth CSS fallback transition without lag
      const root = document.documentElement;
      root.classList.add("theme-fallback-transition");
      setTheme(nextTheme);
      if (fallbackTimeoutRef.current) clearTimeout(fallbackTimeoutRef.current);
      fallbackTimeoutRef.current = setTimeout(() => {
        root.classList.remove("theme-fallback-transition");
      }, 400);
      return;
    }

    // Determine coordinate origin from the active/visible toggle button
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    let targetEl = element;
    if (!targetEl || targetEl.getBoundingClientRect().width === 0) {
      const allToggles = document.querySelectorAll("[data-theme-toggle]");
      for (const toggle of allToggles) {
        if (toggle instanceof HTMLElement && toggle.offsetParent !== null) {
          targetEl = toggle;
          break;
        }
      }
    }

    if (targetEl instanceof HTMLElement) {
      const rect = targetEl.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    }

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    isTransitioning.current = true;

    try {
      const transition = doc.startViewTransition(() => {
        flushSync(() => {
          setTheme(nextTheme);
          const root = document.documentElement;
          if (nextTheme === "dark") {
            root.classList.add("dark");
          } else {
            root.classList.remove("dark");
          }
          localStorage.setItem("theme", nextTheme);
        });
      });

      transition.ready
        .then(() => {
          // Both Dark -> Light and Light -> Dark expand the new theme outward
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 420,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              pseudoElement: "::view-transition-new(root)",
            }
          );
        })
        .catch(() => {});

      transition.finished
        .catch(() => {})
        .finally(() => {
          isTransitioning.current = false;
        });
    } catch {
      isTransitioning.current = false;
      setTheme(nextTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
