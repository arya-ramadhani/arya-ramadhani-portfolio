"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, Code2, Sparkles, Eye, Layers } from "lucide-react";
import type { Project } from "@/data/projects";
import { TechIcon } from "./TechIcons";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <>
      <motion.article
        layout
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{
          duration: 0.4,
          delay: index * 0.06,
          ease: [0.22, 1, 0.36, 1],
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative rounded-2xl border border-border/80 bg-bg-alt/90 dark:bg-bg-alt/75 backdrop-blur-md overflow-hidden hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 flex flex-col justify-between"
      >
        {/* Animated Top Border Accent Line */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

        {/* ── Visual Media Container ── */}
        <div className="relative aspect-[16/10] overflow-hidden bg-bg-elevated border-b border-border/60">
          {/* Real Photo Preview with Fallback */}
          {!imgError ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            /* High-tech animated visual fallback */
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-bg-alt to-bg flex items-center justify-center p-6 overflow-hidden">
              {/* Subtle animated background grid */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(128,0,32,0.12)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 group-hover:opacity-70 transition-opacity" />
              <div className="relative z-10 text-center space-y-2.5">
                <div className="w-12 h-12 mx-auto rounded-2xl border border-border/80 bg-bg-alt shadow-sm flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                    {project.category}
                  </p>
                  <p className="text-[11px] font-mono text-text-muted mt-0.5">{project.role}</p>
                </div>
              </div>
            </div>
          )}

          {/* Category Chip */}
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold text-accent bg-bg/95 border border-accent/25 backdrop-blur-md shadow-sm">
              {project.category}
            </span>
          </div>

          {/* Metric / Featured Pill */}
          {project.metrics && (
            <div className="absolute top-3 right-3 z-10">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium text-text bg-bg/95 border border-border backdrop-blur-md shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {project.metrics}
              </span>
            </div>
          )}

          {/* Smooth Quick-Action Overlay */}
          <div
            className={`absolute inset-0 bg-bg/80 backdrop-blur-xs flex items-center justify-center gap-3 transition-opacity duration-200 z-10 ${
              isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              onClick={() => setShowDetailModal(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-accent hover:bg-accent-dark rounded-xl shadow-lg transition-transform duration-200 transform scale-95 group-hover:scale-100"
            >
              <Eye className="w-3.5 h-3.5" />
              Detail Informasi
            </button>
          </div>
        </div>

        {/* ── Content Card Details ── */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3.5 sm:space-y-4">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base sm:text-xl font-bold text-text group-hover:text-accent transition-colors duration-200">
                {project.title}
              </h3>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-0.5" />
            </div>

            <p className="text-[11px] sm:text-xs font-mono text-accent/80 font-medium">
              Role: {project.role}
            </p>

            <p className="text-xs sm:text-sm text-text-secondary line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* ── Technology Badges With Official Icons ── */}
          <div className="space-y-2.5 sm:space-y-3 pt-2 border-t border-border/50">
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-mono rounded-md bg-bg border border-border/80 text-text-secondary group-hover:border-accent/30 group-hover:text-text transition-colors shadow-xs"
                >
                  <TechIcon name={tech} size={12} className="w-3 h-3 flex-shrink-0" />
                  <span>{tech}</span>
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="px-1.5 py-0.5 text-[10px] font-mono text-text-muted bg-bg border border-border/60 rounded-md">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>

            {/* Bottom Inspect Button */}
            <div className="flex items-center justify-between pt-1 text-[11px] sm:text-xs font-mono text-text-muted">
              <span className="truncate max-w-[180px] sm:max-w-none">{project.categories.join(" • ")}</span>
              <button
                onClick={() => setShowDetailModal(true)}
                className="text-accent font-semibold hover:underline flex items-center gap-1 flex-shrink-0"
              >
                <span>Lihat Detail</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </motion.article>

      {/* ── Detail Modal ── */}
      <AnimatePresence>
        {showDetailModal && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg max-h-[88vh] overflow-y-auto rounded-2xl bg-bg-elevated border border-border p-5 sm:p-7 shadow-2xl space-y-4 sm:space-y-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-accent font-semibold uppercase tracking-wider">
                    {project.category} • {project.role}
                  </span>
                  <h3 className="text-xl font-bold text-text mt-1">{project.title}</h3>
                </div>
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="p-1.5 rounded-lg border border-border text-text-secondary hover:text-text hover:bg-bg-alt transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 rounded-xl bg-bg-alt border border-border/80 text-sm text-text-secondary leading-relaxed">
                {project.longDescription || project.description}
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-text-muted mb-2 tracking-wider">
                  Teknologi &amp; Alat yang Digunakan
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-lg bg-bg border border-border text-text"
                    >
                      <TechIcon name={t} size={14} className="w-3.5 h-3.5" />
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-border">
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-accent rounded-xl hover:bg-accent-dark transition-colors"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
