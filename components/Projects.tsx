"use client";

import { useState } from "react";
import SectionReveal from "./SectionReveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { FolderGit2, ExternalLink, LayoutGrid, ChevronDown, ChevronUp } from "lucide-react";
import { GitHubIcon } from "./TechIcons";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section id="projects" className="py-14 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* ── Continuous Ambient Moving Background (Adaptive Light & Dark Mode) ── */}
      <style>{`
        @keyframes prj-orb-1 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(60px, -40px, 0) scale(1.2); }
        }
        @keyframes prj-orb-2 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-55px, 35px, 0) scale(1.15); }
        }
        @keyframes prj-grid-shift {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        @keyframes prj-node-pulse {
          0%, 100% { opacity: 0.35; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes prj-float-y {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -20px, 0); }
        }
        @keyframes prj-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Dynamic Animated Grid Pattern (High Visibility in Light & Dark Mode) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-12 dark:opacity-12"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1.5px 1.5px, var(--color-accent) 2px, transparent 0),
            linear-gradient(to right, rgba(128, 0, 32, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128, 0, 32, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px, 32px 32px, 32px 32px",
          animation: "prj-grid-shift 24s linear infinite",
        }}
      />

      {/* Floating Ambient Glowing Light Orbs (Rich contrast in Light Mode) */}
      <div
        className="absolute top-1/4 -left-28 w-[460px] h-[460px] bg-gradient-to-tr from-accent/22 via-accent/14 to-transparent dark:from-accent/12 dark:to-transparent rounded-full blur-[90px] sm:blur-[110px] dark:blur-[140px] pointer-events-none"
        style={{ animation: "prj-orb-1 18s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-1/5 -right-28 w-[480px] h-[480px] bg-gradient-to-bl from-accent/20 via-accent/12 to-transparent dark:from-accent/10 dark:to-transparent rounded-full blur-[90px] sm:blur-[110px] dark:blur-[140px] pointer-events-none"
        style={{ animation: "prj-orb-2 22s ease-in-out infinite" }}
      />

      {/* Decorative Rotating Geometric Tech Crosses */}
      <div
        className="absolute top-[12%] right-[15%] w-8 h-8 pointer-events-none text-accent/30 dark:text-accent/20"
        style={{ animation: "prj-spin-slow 24s linear infinite, prj-float-y 10s ease-in-out infinite" }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 4v16m-8-8h16" strokeLinecap="round" />
        </svg>
      </div>
      <div
        className="absolute bottom-[20%] left-[12%] w-6 h-6 pointer-events-none text-accent/25 dark:text-accent/15"
        style={{ animation: "prj-spin-slow 30s linear infinite reverse, prj-float-y 12s ease-in-out 1.5s infinite" }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 4v16m-8-8h16" strokeLinecap="round" />
        </svg>
      </div>

      {/* Floating Micro Tech Nodes (High Visibility in Light & Dark Mode) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[18%] left-[10%] w-2.5 h-2.5 rounded-full bg-accent text-accent ring-4 ring-accent/20 dark:ring-accent/10 shadow-[0_0_12px_rgba(128,0,32,0.5)]"
          style={{ animation: "prj-node-pulse 4.5s ease-in-out infinite, prj-float-y 8s ease-in-out infinite" }}
        />
        <div
          className="absolute top-[45%] right-[8%] w-2 h-2 rounded-full bg-accent text-accent ring-4 ring-accent/20 dark:ring-accent/10 shadow-[0_0_10px_rgba(128,0,32,0.45)]"
          style={{ animation: "prj-node-pulse 6s ease-in-out 1.2s infinite, prj-float-y 9.5s ease-in-out 1s infinite" }}
        />
        <div
          className="absolute bottom-[28%] left-[6%] w-2 h-2 rounded-full bg-accent text-accent ring-4 ring-accent/15 dark:ring-accent/10 shadow-[0_0_10px_rgba(128,0,32,0.4)]"
          style={{ animation: "prj-node-pulse 6.5s ease-in-out 2.5s infinite, prj-float-y 11s ease-in-out 2s infinite" }}
        />
        <div
          className="absolute bottom-[14%] right-[20%] w-2.5 h-2.5 rounded-full bg-accent text-accent ring-4 ring-accent/20 dark:ring-accent/10 shadow-[0_0_12px_rgba(128,0,32,0.5)]"
          style={{ animation: "prj-node-pulse 5s ease-in-out 1.8s infinite, prj-float-y 8.5s ease-in-out 1.5s infinite" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-border/60">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                <FolderGit2 className="w-3.5 h-3.5" />
                Featured Engineering Portfolio
              </div>
              <h2 className="heading-lg text-text">Selected Projects</h2>
            </div>
            <p className="body-md text-text-secondary max-w-lg text-sm sm:text-base">
              Pengembangan solusi digital, implementasi teknologi, dan inovasi untuk berbagai kebutuhan.
            </p>
          </div>
        </SectionReveal>

        {/* ── Mobile View (< sm): 4 Projects Horizontal Scroll or Expanded Grid ── */}
        <div className="block sm:hidden">
          {!showAll ? (
            <div>
              {/* Horizontal Scroll Container */}
              <div className="flex overflow-x-auto gap-3.5 pb-4 pt-1 -mx-6 px-6 snap-x snap-mandatory scroll-smooth scroll-pl-6 items-stretch [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {projects.slice(0, 4).map((project, index) => (
                  <div
                    key={project.id}
                    className="w-[82vw] max-w-[290px] shrink-0 snap-start flex flex-col first:ml-1"
                  >
                    <ProjectCard project={project} index={index} />
                  </div>
                ))}
              </div>

              {/* Swipe guidance indicator (Tanpa keterangan angka) */}
              <div className="flex items-center text-[11px] font-mono text-text-muted mt-1.5 mb-4 px-1">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Geser ke kanan untuk melihat proyek
                </span>
              </div>
            </div>
          ) : (
            /* Expanded Full List on Mobile */
            <div className="grid grid-cols-1 gap-4 mb-4">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}

          {/* Icon & "Tampilkan Semua" Button underneath */}
          <div className="mt-1">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="w-full py-3 px-4 rounded-xl border border-border/80 bg-bg-alt/90 active:bg-bg-alt text-text hover:text-accent hover:border-accent/40 font-medium text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-accent" />
              <span>{showAll ? "Tampilkan Lebih Sedikit" : `Tampilkan Semua`}</span>
              {showAll ? (
                <ChevronUp className="w-3.5 h-3.5 text-text-muted" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-text-muted" />
              )}
            </button>
          </div>
        </div>

        {/* ── Tablet & Desktop View (>= sm): Responsive 4-Column Grid ── */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* ── Bottom Professional Footer CTA ── */}
        <SectionReveal delay={0.2}>
          <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-text-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Menampilkan {projects.length} proyek terpilih
            </span>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
