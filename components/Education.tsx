"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Users,
  Calendar,
  MapPin,
  ExternalLink,
  X,
  ArrowUpRight,
  Building2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Layers,
  CheckCircle2,
} from "lucide-react";
import SectionReveal from "./SectionReveal";
import { education } from "@/data/education";
import type { Organization } from "@/data/education";

/** Dot-grid SVG pattern for modal blueprint and fallback */
const DOT_GRID = `url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23888' fill-opacity='0.22'/%3E%3C/svg%3E")`;

const orgSlidePerspectives = [
  {
    label: "Tampilan Utama",
    desc: "Overview dokumentasi kegiatan & program kerja organisasi",
  },
  {
    label: "Koordinasi & Rapat Kerja",
    desc: "Alur konsolidasi internal, koordinasi divisi, & administrasi",
  },
  {
    label: "Pelaksanaan & Luaran",
    desc: "Realisasi agenda kerja, keterlibatan tim, & evaluasi berkala",
  },
];

function OrgDetailModal({
  org,
  onClose,
}: {
  org: Organization;
  onClose: () => void;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImgErrors, setModalImgErrors] = useState<{ [key: number]: boolean }>({});
  const [modalImgLoaded, setModalImgLoaded] = useState<{ [key: number]: boolean }>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const galleryImages =
    org.images && org.images.length > 0
      ? org.images
      : org.image
      ? [org.image, "", ""]
      : ["", "", ""];

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Lock scroll on open & listen to keyboard navigation
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("lenis-stop"));
    (window as any).__lenis?.stop();
    const prevOverflow = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (scrollbarW > 0) {
      document.body.style.paddingRight = `${scrollbarW}px`;
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.dispatchEvent(new CustomEvent("lenis-start"));
      (window as any).__lenis?.start();
      document.documentElement.style.overflow = prevHtml;
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [galleryImages.length, onClose]);

  if (!mounted) return null;

  const currentPerspective =
    orgSlidePerspectives[currentImageIndex % orgSlidePerspectives.length];

  const orgSlug =
    org.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
      .slice(0, 20) || "organization";

  return createPortal(
    <AnimatePresence>
      <div
        data-lenis-prevent="true"
        className="fixed inset-0 z-[99990] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/80 backdrop-blur-md overflow-hidden select-none"
        onClick={onClose}
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
          className="relative w-full max-w-4xl max-h-[88vh] sm:max-h-[85vh] bg-bg-elevated/95 dark:bg-bg-elevated/95 border border-border/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col backdrop-blur-xl overscroll-contain my-auto select-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-border/70 bg-bg-alt/60">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 pr-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-semibold text-accent bg-accent/10 border border-accent/25 uppercase tracking-wider shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Organizational Role
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup Jendela Detail"
              className="p-1.5 sm:p-2 rounded-xl border border-border/70 bg-bg/60 text-text-secondary hover:text-text hover:bg-bg-alt hover:border-accent/40 transition-colors shrink-0"
            >
              <X className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </button>
          </div>

          {/* Modal Body: Split ratio (Left 5 cols info, Right 7 cols showcase) */}
          <div
            data-lenis-prevent="true"
            className="overflow-y-auto flex-1 p-4 sm:p-5 md:p-6 overscroll-contain"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch min-h-full">
              {/* Kolom Kiri: 5 cols (Informasi, Role, Deskripsi Tanggung Jawab) */}
              <div className="lg:col-span-5 min-w-0 flex flex-col justify-between space-y-3.5 pr-0 lg:pr-5 border-b lg:border-b-0 lg:border-r border-border/60 pb-5 lg:pb-0">
                <div className="space-y-3">
                  <div>
                    <span className="inline-block text-xs font-mono font-bold text-accent uppercase tracking-wider">
                      {org.role}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-text leading-snug mt-1">
                      {org.name}
                    </h3>
                    {org.period && (
                      <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-md bg-bg border border-border/80 text-xs font-mono text-text-muted">
                        <Calendar className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{org.period}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-text-muted font-semibold">
                      Uraian Tanggung Jawab &amp; Kontribusi
                    </h4>
                    <div className="p-3.5 rounded-xl bg-bg-alt/70 border border-border/70 text-xs sm:text-sm text-text-secondary leading-relaxed max-h-56 overflow-y-auto">
                      <p>{org.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kolom Kanan: 7 cols (Galeri Showcase Dokumentasi Organisasi) */}
              <div className="lg:col-span-7 min-w-0 flex flex-col justify-center my-auto py-1">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-accent" />
                    <span>Dokumentasi Organisasi</span>
                  </h4>
                </div>

                {/* Showcase Container: Cinema Proportions with Slide Navigation */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full min-h-0 rounded-2xl overflow-hidden border border-border/80 bg-bg-alt shadow-xl select-none group/img">
                  {/* Active Image or Schematic Blueprint Fallback */}
                  {galleryImages[currentImageIndex] && !modalImgErrors[currentImageIndex] ? (
                    <img
                      src={galleryImages[currentImageIndex]}
                      alt={`${org.name} - Dokumentasi ${currentImageIndex + 1}`}
                      onLoad={() =>
                        setModalImgLoaded((prev) => ({ ...prev, [currentImageIndex]: true }))
                      }
                      onError={() =>
                        setModalImgErrors((prev) => ({ ...prev, [currentImageIndex]: true }))
                      }
                      className="w-full h-full object-cover object-center transition-all duration-300"
                      style={{ opacity: modalImgLoaded[currentImageIndex] ? 1 : 0 }}
                    />
                  ) : (
                    /* Fallback Blueprint Mockup */
                    <div className="absolute inset-0 bg-gradient-to-br from-bg-alt via-bg-elevated to-bg flex flex-col justify-between overflow-hidden border border-border/40">
                      {/* Dot Grid */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ backgroundImage: DOT_GRID }}
                      />

                      {/* Corner Accents */}
                      <span className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-accent/40 rounded-tl" />
                      <span className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-accent/40 rounded-tr" />
                      <span className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-accent/40 rounded-bl" />
                      <span className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-accent/40 rounded-br" />

                      {/* Top Mockup Header Bar */}
                      <div className="relative z-10 flex items-center justify-between border-b border-border/60 px-4 py-2.5 bg-bg/50 backdrop-blur-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
                          <span className="ml-2 text-xs font-mono text-text-muted truncate max-w-[170px] sm:max-w-none">
                            {`${orgSlug}_view_${currentImageIndex + 1}.preview`}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent font-semibold truncate max-w-[140px]">
                          {org.role}
                        </span>
                      </div>

                      {/* Center Illustration Graphic */}
                      <div className="relative z-10 my-auto py-3 text-center space-y-2">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl border border-accent/30 bg-accent/10 flex items-center justify-center text-accent shadow-md">
                          {currentImageIndex === 0 && <Building2 className="w-7 h-7 sm:w-8 sm:h-8" />}
                          {currentImageIndex === 1 && <Layers className="w-7 h-7 sm:w-8 sm:h-8" />}
                          {currentImageIndex >= 2 && <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />}
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
                    aria-label="Dokumentasi Sebelumnya"
                    className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/65 hover:bg-black/90 active:scale-95 text-white flex items-center justify-center backdrop-blur-md border border-white/25 shadow-xl transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>

                  {/* Tombol Next */}
                  <button
                    type="button"
                    onClick={handleNextImage}
                    aria-label="Dokumentasi Selanjutnya"
                    className="absolute right-2.5 sm:right-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/65 hover:bg-black/90 active:scale-95 text-white flex items-center justify-center backdrop-blur-md border border-white/25 shadow-xl transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>

                  {/* Bottom Overlay Label */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 pt-7 text-white text-xs font-mono flex items-center pointer-events-none z-10">
                    <span className="truncate font-medium">{currentPerspective.label}</span>
                  </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex items-center justify-center gap-2 pt-2">
                  {galleryImages.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentImageIndex(i)}
                      aria-label={`Lihat dokumentasi ke-${i + 1}`}
                      className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentImageIndex === i
                          ? "w-7 sm:w-8 bg-accent shadow-xs"
                          : "w-1.5 sm:w-2 bg-border/80 hover:bg-text-muted/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer: Tutup Detail placed on the far bottom-right */}
          <div className="px-4 sm:px-6 py-3 border-t border-border/70 bg-bg-alt/70 flex items-center justify-between">
            <span className="text-xs font-mono text-text-muted hidden sm:inline">
              Rekam Jejak Kepemimpinan &amp; Organisasi
            </span>
            <button
              type="button"
              onClick={onClose}
              className="ml-auto px-5 py-2 text-xs font-mono font-semibold text-white bg-accent rounded-xl hover:bg-accent-dark transition-colors shadow-sm"
            >
              Tutup
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}

export default function Education() {
  const [activeOrg, setActiveOrg] = useState<Organization | null>(null);

  return (
    <section id="education" className="py-14 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Background ambient mesh */}
      <div className="absolute top-1/4 -right-36 w-80 h-80 bg-accent/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-36 w-80 h-80 bg-accent/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-border/60">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                <GraduationCap className="w-3.5 h-3.5" />
                Academic Background
              </div>
              <h2 className="heading-lg text-text">Formal Education &amp; Leadership</h2>
            </div>
            <p className="body-md text-text-secondary max-w-lg text-sm sm:text-base">
              Pondasi keilmuan vokasi rekayasa perangkat lunak serta rekam jejak kepemimpinan dalam organisasi mahasiswa dan teknologi.
            </p>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Degree (Left Column - 5 cols) */}
          <SectionReveal delay={0.1} className="lg:col-span-5 h-full">
            <div className="h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-border/80 bg-bg-alt/90 backdrop-blur-sm hover:border-accent/40 transition-colors duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold">
                    Higher Education
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="heading-md text-text leading-snug">{education.institution}</h3>
                  <p className="text-base font-semibold text-text">{education.degree}</p>
                  <p className="text-sm text-accent font-medium">{education.field}</p>
                </div>
              </div>

              {/* Bottom detail: Period + Clickable Location */}
              <div className="pt-6 mt-6 border-t border-border/60 space-y-2.5">
                {/* Periode Studi */}
                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-bg/60 border border-border/60">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-xs font-mono font-medium text-text-secondary">Periode Studi</span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-text px-2.5 py-1 rounded-md bg-bg border border-border/80 shadow-xs">
                    {education.period}
                  </span>
                </div>

                {/* Lokasi — Clickable Google Maps link */}
                {education.locationUrl && (
                  <a
                    href={education.locationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/loc flex items-center justify-between gap-3 p-3 rounded-xl bg-bg/60 border border-border/60 hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
                    title="Buka lokasi kampus di Google Maps"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <MapPin className="w-4 h-4 text-accent shrink-0 group-hover/loc:scale-110 transition-transform" />
                      <span className="text-xs font-mono font-medium text-text-secondary group-hover/loc:text-text transition-colors truncate">
                        {education.location || "Sungailiat, Bangka Belitung"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0 text-text-muted group-hover/loc:text-accent transition-colors">
                      <span className="text-[10px] font-mono uppercase tracking-wider hidden sm:inline">Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>
                )}
              </div>
            </div>
          </SectionReveal>

          {/* Organizations (Right Column - 7 cols) */}
          <SectionReveal delay={0.2} className="lg:col-span-7 h-full">
            <div className="h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-xs font-mono font-semibold text-text uppercase tracking-wider">
                  Organizational Roles
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-between gap-3 sm:gap-3.5">
                {education.organizations.map((org) => (
                  <div
                    key={`${org.role}-${org.name}`}
                    onClick={() => setActiveOrg(org)}
                    className="group/org flex-1 relative p-4 sm:p-5 rounded-2xl border border-border/80 bg-bg-alt/90 backdrop-blur-sm hover:border-accent/40 hover:bg-bg-alt transition-all duration-300 flex flex-col justify-center cursor-pointer select-none"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <span className="text-xs text-accent font-mono font-bold uppercase tracking-wider">
                        {org.role}
                      </span>
                      {org.period && (
                        <span className="text-[11px] font-mono text-text-muted px-2 py-0.5 rounded-full bg-bg border border-border/70 self-start sm:self-auto">
                          {org.period}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-text font-medium leading-snug pr-9">
                      {org.name}
                    </p>

                    {/* Detail Icon Button — bottom-right with ArrowUpRight */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveOrg(org);
                      }}
                      aria-label={`Detail ${org.name}`}
                      title="Lihat detail organisasi"
                      className="absolute bottom-3 right-3 p-1.5 rounded-lg border border-border/70 bg-bg/80 text-text-secondary hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-200 shadow-2xs group-hover/org:text-accent group-hover/org:border-accent/40"
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/org:translate-x-0.5 group-hover/org:-translate-y-0.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* Org Detail Modal */}
      {activeOrg && (
        <OrgDetailModal org={activeOrg} onClose={() => setActiveOrg(null)} />
      )}
    </section>
  );
}
