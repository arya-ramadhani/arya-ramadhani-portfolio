"use client";

import SectionReveal from "./SectionReveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { FolderGit2, ExternalLink } from "lucide-react";
import { GitHubIcon } from "./TechIcons";

export default function Projects() {
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

        {/* ── Responsive 4-Column Grid (4 ke kanan, 2 ke bawah) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5">
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
            <a
              href="https://github.com/arya-ramadhani?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-bg-alt border border-border/80 text-text hover:text-accent hover:border-accent/40 transition-colors"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              <span>Semua Repositori di GitHub</span>
              <ExternalLink className="w-3 h-3 text-text-muted" />
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
