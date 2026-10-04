"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  Code2,
  ImageOff,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { TechIcon, GitHubIcon } from "./TechIcons";

/** Dot-grid SVG pattern URI for fallback backgrounds */
const DOT_GRID =
  `url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23888' fill-opacity='0.25'/%3E%3C/svg%3E")`;

interface ProjectCardProps {
  project: Project;
  index: number;
}

const slidePerspectives = [
  { label: "Tampilan Utama", desc: "Overview antarmuka & tata letak visual sistem" },
  { label: "Arsitektur & Alur", desc: "Alur pemrosesan data & integrasi teknologi" },
  { label: "Fitur & Validasi", desc: "Fungsionalitas teruji & modul operasional" },
];

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [cardImgError, setCardImgError] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImgErrors, setModalImgErrors] = useState<{ [key: number]: boolean }>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const galleryImages =
    project.images && project.images.length > 0 ? project.images : [project.image];

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Lock background scroll (including Lenis) when modal is open and handle keyboard navigation
  useEffect(() => {
    if (showDetailModal) {
      // Pause smooth scrolling (Lenis)
      window.dispatchEvent(new CustomEvent("lenis-stop"));
      (window as any).__lenis?.stop();

      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setShowDetailModal(false);
        } else if (e.key === "ArrowRight") {
          setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
        } else if (e.key === "ArrowLeft") {
          setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        // Resume smooth scrolling (Lenis)
        window.dispatchEvent(new CustomEvent("lenis-start"));
        (window as any).__lenis?.start();

        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.overflow = originalBodyOverflow;
        document.body.style.paddingRight = originalPaddingRight;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [showDetailModal, galleryImages.length]);

  const currentPerspective =
    slidePerspectives[currentImageIndex % slidePerspectives.length] || slidePerspectives[0];


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
        onClick={() => {
          setCurrentImageIndex(0);
          setShowDetailModal(true);
        }}
        className="group relative rounded-xl border border-border/70 bg-bg-alt/85 dark:bg-bg-alt/75 backdrop-blur-md overflow-hidden hover:border-accent/40 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer"
      >
        {/* Animated Top Border Accent Line */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

        {/* ── Visual Media Container ── */}
        <div className="relative aspect-[16/10] overflow-hidden bg-bg-elevated border-b border-border/50">

          {/* ── Fallback: always rendered as base layer ── */}
          <div
            className="absolute inset-0 flex items-center justify-center overflow-hidden select-none"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--bg-elevated)) 0%, hsl(var(--bg-alt)) 60%, hsl(var(--bg-elevated)) 100%)",
            }}
          >
            {/* Dot grid pattern */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: DOT_GRID }}
            />
            {/* Diagonal stripe depth */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.05]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
                backgroundSize: "12px 12px",
              }}
            />
            {/* Corner accents */}
            <span className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-accent/40 rounded-tl" />
            <span className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-accent/40 rounded-tr" />
            <span className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-accent/40 rounded-bl" />
            <span className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-accent/40 rounded-br" />

            {/* Single consistent icon — no text */}
            <div className="relative z-10">
              <div className="absolute -inset-3 rounded-3xl bg-accent/10 blur-lg" />
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 border-accent/30 bg-bg/80 dark:bg-bg/60 flex items-center justify-center text-text-muted shadow-xl group-hover:border-accent/50 group-hover:text-accent transition-all duration-300">
                <ImageOff className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
            </div>
          </div>

          {/* ── Image: absolute on top, removed from DOM when error ── */}
          {!cardImgError && (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setCardImgError(true)}
              className="absolute inset-0 w-full h-full object-cover object-center z-[5] transition-transform duration-500 ease-out group-hover:scale-105"
            />
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

        {/* ── Content Card Details (Uniform Dimensions) ── */}
        <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between">
          <div className="space-y-1">
            <div className="flex items-start justify-between gap-1.5 min-h-[2.5rem]">
              <h3 className="text-xs sm:text-[13px] font-bold text-text group-hover:text-accent transition-colors line-clamp-2 leading-tight">
                {project.title}
              </h3>
              <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-0.5" />
            </div>

            <p className="text-[10px] font-mono text-accent/80 font-medium truncate">
              {project.role}
            </p>

            <p className="text-[11px] text-text-secondary line-clamp-2 leading-relaxed min-h-[2rem]">
              {project.description}
            </p>
          </div>

          {/* ── Technology Badges ── */}
          <div className="pt-2 mt-auto border-t border-border/40">
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

      {/* ── Detail Modal (Mounted via React Portal to Body for True Viewport Center) ── */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {showDetailModal && (
              <div
                data-lenis-prevent="true"
                className="fixed inset-0 z-[99990] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/80 backdrop-blur-md overflow-hidden select-none"
                onClick={() => setShowDetailModal(false)}
                onTouchMove={(e) => {
                  if (e.target === e.currentTarget) e.preventDefault();
                }}
                onWheel={(e) => {
                  if (e.target === e.currentTarget) e.preventDefault();
                }}
              >
                <motion.div
                  data-lenis-prevent="true"
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 12 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-5xl max-h-[86vh] sm:max-h-[85vh] bg-bg-elevated/95 dark:bg-bg-elevated/95 border border-border/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col backdrop-blur-xl overscroll-contain my-auto select-auto"
                >
                  {/* Header Bar */}
                  <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-border/70 bg-bg-alt/60">
                    <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 pr-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-semibold text-accent bg-accent/10 border border-accent/25 uppercase tracking-wider shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        {project.category}
                      </span>
                      <span className="text-text-muted font-mono text-xs hidden sm:inline">•</span>
                      <span className="text-xs font-mono text-text-secondary truncate hidden sm:inline">
                        {project.role}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowDetailModal(false)}
                      aria-label="Tutup Jendela Detail"
                      className="p-1.5 sm:p-2 rounded-xl border border-border/70 bg-bg/60 text-text-secondary hover:text-text hover:bg-bg-alt hover:border-accent/40 transition-colors shrink-0"
                    >
                      <X className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </button>
                  </div>

                  {/* Modal Body: 30:70 Ratio (Left 30% info, Right 70% gallery) */}
                  <div
                    data-lenis-prevent="true"
                    className="overflow-y-auto flex-1 p-4 sm:p-5 md:p-6 overscroll-contain"
                  >
                    <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-stretch">
                      {/* Kolom Kiri: 30% (Informasi, Deskripsi, Tech Stack, & Links) */}
                      <div className="w-full lg:w-[30%] shrink-0 flex flex-col justify-between space-y-3.5 pr-0 lg:pr-4 border-b lg:border-b-0 lg:border-r border-border/60 pb-4 lg:pb-0">
                        <div className="space-y-3">
                          <div>
                            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-text leading-snug">
                              {project.title}
                            </h3>
                            <p className="text-xs font-mono text-accent font-medium mt-1">
                              {project.role}
                            </p>
                          </div>

                          {project.metrics && (
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-bg-alt border border-border/80 text-[11px] font-mono text-text w-full">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                              <span className="font-semibold text-text">Metrik:</span>
                              <span className="text-accent truncate">{project.metrics}</span>
                            </div>
                          )}

                          <div className="space-y-1.5">
                            <h4 className="text-[11px] font-mono uppercase tracking-wider text-text-muted font-semibold">
                              Ringkasan Proyek
                            </h4>
                            <div className="p-3 rounded-xl bg-bg-alt/70 border border-border/70 text-xs text-text-secondary leading-relaxed max-h-40 overflow-y-auto">
                              <p>{project.longDescription || project.description}</p>
                            </div>
                          </div>

                          {/* Technologies & Tools */}
                          <div>
                            <h4 className="text-[11px] font-mono uppercase tracking-wider text-text-muted mb-2 font-semibold flex items-center gap-1.5">
                              <Layers className="w-3 h-3 text-accent" />
                              <span>Teknologi Digunakan</span>
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {project.technologies.map((t) => (
                                <span
                                  key={t}
                                  className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono rounded-md bg-bg border border-border text-text shadow-2xs hover:border-accent/30 transition-colors"
                                >
                                  <TechIcon name={t} size={12} className="w-3 h-3 shrink-0" />
                                  <span>{t}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Action Links */}
                        <div className="flex flex-col gap-2 pt-3 border-t border-border/60">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-bg-alt border border-border hover:border-accent/40 text-text hover:text-accent text-xs font-mono transition-colors"
                            >
                              <GitHubIcon className="w-3.5 h-3.5" />
                              <span>Repositori Kode</span>
                              <ExternalLink className="w-3 h-3 text-text-muted" />
                            </a>
                          )}
                          {project.liveDemo && (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-accent text-white hover:bg-accent-dark text-xs font-mono font-medium shadow-sm transition-colors"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              <span>Lihat Demo Langsung</span>
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Kolom Kanan: 70% (Galeri Proyek) */}
                      <div className="w-full lg:w-[70%] flex flex-col justify-between space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted font-semibold flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-accent" />
                            <span>Galeri Proyek</span>
                          </h4>
                        </div>

                        {/* Showcase Container: Compact Cinema Proportions */}
                        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full min-h-[220px] sm:min-h-[290px] lg:min-h-[330px] rounded-xl overflow-hidden border border-border/80 bg-bg-alt shadow-xl select-none group/img">
                          {/* Active Image or Schematic Blueprint Fallback */}
                          {!modalImgErrors[currentImageIndex] ? (
                            <img
                              src={galleryImages[currentImageIndex]}
                              alt={`${project.title} - Slide ${currentImageIndex + 1}`}
                              onError={() =>
                                setModalImgErrors((prev) => ({ ...prev, [currentImageIndex]: true }))
                              }
                              className="w-full h-full object-cover object-center transition-all duration-300"
                            />
                          ) : (
                            /* Professional Tech Blueprint Mockup Fallback */
                            <div className="absolute inset-0 bg-gradient-to-br from-bg-alt via-bg-elevated to-bg p-4 sm:p-6 flex flex-col justify-between overflow-hidden border border-border/40">
                              {/* Top Mockup Header */}
                              <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
                                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
                                  <span className="ml-2 text-xs font-mono text-text-muted">
                                    {project.id}_view_{currentImageIndex + 1}.preview
                                  </span>
                                </div>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent font-semibold">
                                  {project.category}
                                </span>
                              </div>

                              {/* Center Illustration Graphic */}
                              <div className="my-auto py-3 text-center space-y-2">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl border border-accent/30 bg-accent/10 flex items-center justify-center text-accent shadow-md">
                                  {currentImageIndex === 0 && <Eye className="w-7 h-7 sm:w-8 sm:h-8" />}
                                  {currentImageIndex === 1 && <Layers className="w-7 h-7 sm:w-8 sm:h-8" />}
                                  {currentImageIndex === 2 && <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />}
                                  {currentImageIndex > 2 && <Code2 className="w-7 h-7 sm:w-8 sm:h-8" />}
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-text font-mono">
                                    {currentPerspective.label}
                                  </p>
                                  <p className="text-xs text-text-muted max-w-sm mx-auto leading-relaxed mt-0.5">
                                    {currentPerspective.desc}
                                  </p>
                                </div>
                              </div>

                            </div>
                          )}

                          {/* Tombol Back / Prev */}
                          <button
                            type="button"
                            onClick={handlePrevImage}
                            aria-label="Foto Sebelumnya"
                            className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/65 hover:bg-black/90 active:scale-95 text-white flex items-center justify-center backdrop-blur-md border border-white/25 shadow-xl transition-all"
                          >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </button>

                          {/* Tombol Next */}
                          <button
                            type="button"
                            onClick={handleNextImage}
                            aria-label="Foto Selanjutnya"
                            className="absolute right-2.5 sm:right-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/65 hover:bg-black/90 active:scale-95 text-white flex items-center justify-center backdrop-blur-md border border-white/25 shadow-xl transition-all"
                          >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </button>

                          {/* Bottom Overlay Label */}
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 pt-7 text-white text-xs font-mono flex items-center pointer-events-none">
                            <span className="truncate font-medium">{currentPerspective.label}</span>
                          </div>
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex items-center justify-center gap-2 pt-1">
                          {galleryImages.map((_, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setCurrentImageIndex(i)}
                              aria-label={`Lihat gambar ke-${i + 1}`}
                              className={`h-2 rounded-full transition-all duration-300 ${
                                currentImageIndex === i
                                  ? "w-8 bg-accent shadow-xs"
                                  : "w-2 bg-border/80 hover:bg-text-muted/60"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Modal Footer */}
                  <div className="px-4 sm:px-6 py-2.5 border-t border-border/70 bg-bg-alt/40 flex items-center justify-end">
                    <button
                      type="button"
                      onClick={() => setShowDetailModal(false)}
                      className="w-full sm:w-auto px-5 py-2 text-xs font-mono font-semibold text-white bg-accent rounded-xl hover:bg-accent-dark transition-colors shadow-xs ml-auto"
                    >
                      Tutup
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
