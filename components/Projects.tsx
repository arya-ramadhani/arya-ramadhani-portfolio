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
      <div className="absolute top-1/3 -left-36 w-80 h-80 bg-accent/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-36 w-80 h-80 bg-accent/6 rounded-full blur-[140px] pointer-events-none" />

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
              <div className="flex overflow-x-auto gap-3.5 pb-4 pt-1 -mx-6 px-6 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {projects.slice(0, 4).map((project, index) => (
                  <div
                    key={project.id}
                    className="w-[82vw] max-w-[300px] shrink-0 snap-start flex flex-col"
                  >
                    <ProjectCard project={project} index={index} />
                  </div>
                ))}
              </div>

              {/* Swipe guidance indicator */}
              <div className="flex items-center justify-between text-[11px] font-mono text-text-muted mt-1.5 mb-4 px-1">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Geser ke kanan untuk melihat
                </span>
                <span className="text-accent font-semibold">1 - 4 dari {projects.length}</span>
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
              <span>{showAll ? "Tampilkan Lebih Sedikit" : `Tampilkan Semua (${projects.length} Proyek)`}</span>
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
