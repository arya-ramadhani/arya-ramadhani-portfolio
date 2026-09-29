"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, MessageSquare, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const isScrollLocked = useRef(false);
  const scrollLockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [pillStyle, setPillStyle] = useState({ left: 0, top: 0, width: 0, height: 0 });

  // Ukur posisi item aktif setiap kali activeSection berubah
  useEffect(() => {
    const idx = navLinks.findIndex((l) => l.href.replace("#", "") === activeSection);
    const item = itemRefs.current[idx];
    const container = navContainerRef.current;
    if (item && container) {
      const iRect = item.getBoundingClientRect();
      const cRect = container.getBoundingClientRect();
      setPillStyle({
        left: iRect.left - cRect.left,
        top: iRect.top - cRect.top,
        width: iRect.width,
        height: iRect.height,
      });
    }
  }, [activeSection]);

  // Scroll indicator: deteksi judul section masuk viewport atas
  useEffect(() => {
    const handleScrolled = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScrolled, { passive: true });

    // IntersectionObserver: aktif ketika top section masuk zona 64–35% dari atas
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollLocked.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-64px 0px -60% 0px",
        threshold: 0,
      }
    );

    const sections = navLinks.map((l) => l.href.replace("#", ""));
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScrolled);
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (href: string) => {
    const section = href.replace("#", "");
    setActiveSection(section); // langsung aktif saat diklik
    setIsOpen(false);

    // Kunci observer selama scroll smooth selesai (~1.2 detik)
    isScrollLocked.current = true;
    if (scrollLockTimer.current) clearTimeout(scrollLockTimer.current);
    scrollLockTimer.current = setTimeout(() => {
      isScrollLocked.current = false;
    }, 1200);

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/95 md:bg-bg/80 backdrop-blur-xl border-b border-border/80 shadow-lg shadow-black/5"
          : "bg-transparent border-b border-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Sleek Developer Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#home");
          }}
          className="group flex items-center gap-2 font-mono text-base font-bold text-text tracking-tight"
        >
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
            <Terminal className="w-4 h-4" />
          </div>
          <span>
            ARYA<span className="text-accent font-extrabold"> RAMADHANI</span>
          </span>
        </a>

        {/* Desktop Nav — Single sliding pill via measured position */}
        <div
          ref={navContainerRef}
          className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-bg-alt/60 backdrop-blur-md border border-border/60 relative"
        >
          {/* Pill tunggal yang bergerak ke posisi item aktif */}
          {pillStyle.width > 0 && (
            <motion.div
              className="absolute bg-accent rounded-full shadow-sm shadow-accent/40 pointer-events-none"
              animate={{ left: pillStyle.left, width: pillStyle.width, top: pillStyle.top, height: pillStyle.height }}
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
              style={{ position: "absolute" }}
            />
          )}

          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                ref={(el) => { itemRefs.current[idx] = el; }}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative z-10 px-3.5 py-1.5 text-xs font-mono font-medium rounded-full transition-colors duration-200 ${
                  isActive ? "text-white" : "text-text-secondary hover:text-text"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#contact");
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-accent hover:bg-accent-dark rounded-xl shadow-md shadow-accent/20 hover:shadow-accent/40 transition-all duration-200 active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl border border-border bg-bg-alt hover:border-accent transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-5 h-5 text-text" />
            ) : (
              <Menu className="w-5 h-5 text-text" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown with Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-16 bg-black/50 z-30 lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="relative z-40 lg:hidden border-t border-border/80 bg-bg/98 backdrop-blur-2xl overflow-hidden shadow-2xl"
            >
              <div className="px-6 py-5 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className={`px-4 py-3 text-sm font-mono rounded-xl transition-all duration-200 flex items-center justify-between active:scale-[0.98] ${
                        isActive
                          ? "text-white bg-accent font-semibold shadow-md shadow-accent/20"
                          : "text-text-secondary hover:text-text hover:bg-surface-hover"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="text-xs">●</span>}
                    </a>
                  );
                })}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#contact");
                  }}
                  className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-xl transition-colors shadow-lg shadow-accent/25 active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4" />
                  Let&apos;s Talk
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
