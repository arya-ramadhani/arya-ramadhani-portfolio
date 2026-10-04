"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code2, Eye } from "lucide-react";
import type { Project } from "@/data/projects";
import { TechIcon } from "./TechIcons";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <>
      <motion.article
        layout
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{
          duration: 0.35,
          delay: index * 0.04,
          ease: [0.22, 1, 0.36, 1],
        }}
        onClick={() => setShowDetailModal(true)}
        className="group relative rounded-xl border border-border/70 bg-bg-alt/85 dark:bg-bg-alt/75 backdrop-blur-md overflow-hidden hover:border-accent/40 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
      >
        {/* Animated Top Border Accent Line */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

        {/* ── Visual Media Container ── */}
        <div className="relative aspect-[16/10] overflow-hidden bg-bg-elevated border-b border-border/50">
          {!imgError ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-bg-alt to-bg flex items-center justify-center p-3 overflow-hidden">
              <div className="text-center space-y-1">
                <div className="w-8 h-8 mx-auto rounded-lg border border-border/70 bg-bg flex items-center justify-center text-accent">
                  <Code2 className="w-4 h-4" />
                </div>
                <p className="font-mono text-[9px] font-semibold text-accent uppercase tracking-wider">
                  {project.category}
                </p>
              </div>
            </div>
          )}

          {/* Category Chip */}
          <div className="absolute top-2 left-2 z-10">
            <span className="px-1.5 py-0.5 rounded-md text-[9px] font-mono font-medium text-accent bg-bg/95 border border-accent/20 backdrop-blur-md shadow-xs">
              {project.category}
            </span>
          </div>

          {/* Metric / Featured Pill */}
          {project.metrics && (
            <div className="absolute top-2 right-2 z-10">
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[9px] font-mono font-medium text-text bg-bg/95 border border-border/70 backdrop-blur-md shadow-xs">
                <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                {project.metrics}
              </span>
            </div>
          )}

          {/* Quick-Action Overlay */}
          <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-10">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono font-medium text-white bg-accent/90 rounded-md shadow-md">
              <Eye className="w-3 h-3" />
              Detail
            </span>
          </div>
        </div>

        {/* ── Content Card Details ── */}
        <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-1.5">
              <h3 className="text-xs sm:text-[13px] font-bold text-text group-hover:text-accent transition-colors line-clamp-1">
                {project.title}
              </h3>
              <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-0.5" />
            </div>

            <p className="text-[10px] font-mono text-accent/80 font-medium truncate mt-0.5">
              {project.role}
            </p>

            <p className="text-[11px] text-text-secondary line-clamp-2 leading-relaxed mt-1">
              {project.description}
            </p>
          </div>

          {/* ── Technology Badges ── */}
          <div className="pt-2 mt-2 border-t border-border/40">
            <div className="flex flex-wrap gap-1 items-center">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[9px] font-mono rounded bg-bg border border-border/60 text-text-secondary"
                >
                  <TechIcon name={tech} size={10} className="w-2.5 h-2.5 flex-shrink-0" />
                  <span>{tech}</span>
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-1 py-0.5 text-[9px] font-mono text-text-muted bg-bg border border-border/50 rounded">
                  +{project.technologies.length - 3}
                </span>
              )}
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
