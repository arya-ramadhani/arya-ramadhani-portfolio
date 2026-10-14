"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, FileText, FlaskConical } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { publications } from "@/data/education";

/** Scientific Waveform & Atomic Orbit background — research signal spectrum & discovery orbit */
function ResearchSpectrumBg() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      style={{ zIndex: 0 }}
    >
      <style>{`
        @keyframes researchOrbitSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes researchWaveDrift1 {
          0%, 100% { transform: translateX(0) translateY(0); }
          50%      { transform: translateX(-2.5%) translateY(5px); }
        }
        @keyframes researchWaveDrift2 {
          0%, 100% { transform: translateX(0) translateY(0); }
          50%      { transform: translateX(2.5%) translateY(-5px); }
        }
        @keyframes pulseNode {
          0%, 100% { transform: scale(0.9); opacity: 0.25; }
          50%      { transform: scale(1.5); opacity: 0.75; }
        }
      `}</style>

      {/* SVG Container: Dual flowing harmonic data waves across the section */}
      <svg
        className="absolute inset-0 w-full h-full opacity-65 dark:opacity-45"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1200 600"
      >
        <defs>
          <linearGradient id="researchWaveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="25%" stopColor="var(--accent)" stopOpacity="0.25" />
            <stop offset="65%" stopColor="var(--accent)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="researchWaveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="35%" stopColor="var(--accent)" stopOpacity="0.18" />
            <stop offset="70%" stopColor="var(--accent)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Wave 1: Flowing Data Harmonic */}
        <path
          d="M -100 320 C 180 230, 360 410, 600 300 C 840 190, 1020 380, 1300 290"
          fill="none"
          stroke="url(#researchWaveGrad1)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          style={{
            animation: "researchWaveDrift1 24s ease-in-out infinite",
          }}
        />

        {/* Wave 2: Secondary Harmonic */}
        <path
          d="M -100 390 C 220 470, 440 310, 700 420 C 960 520, 1120 330, 1300 410"
          fill="none"
          stroke="url(#researchWaveGrad2)"
          strokeWidth="1.2"
          style={{
            animation: "researchWaveDrift2 30s ease-in-out infinite",
          }}
        />
      </svg>

      {/* Atomic / Scientific Gyroscope Orbit (Scientific Inquiry & Research Model) */}
      <div
        className="absolute -top-10 -right-10 sm:top-2 sm:right-6 w-60 h-60 sm:w-72 sm:h-72 pointer-events-none opacity-50 dark:opacity-40"
        style={{
          animation: "researchOrbitSpin 48s linear infinite",
          transformOrigin: "center center",
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Ring 1 */}
          <ellipse
            cx="100"
            cy="100"
            rx="82"
            ry="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 4"
            className="text-accent/35"
            transform="rotate(-28 100 100)"
          />
          {/* Ring 2 */}
          <ellipse
            cx="100"
            cy="100"
            rx="82"
            ry="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 4"
            className="text-accent/35"
            transform="rotate(42 100 100)"
          />
          {/* Orbiting Beacon Node */}
          <circle
            cx="182"
            cy="100"
            r="3"
            className="fill-accent opacity-85"
            transform="rotate(-28 100 100)"
          />
          <circle
            cx="100"
            cy="100"
            r="3.5"
            className="fill-accent/40"
          />
        </svg>
      </div>

      {/* Subtle Citation / Data Pulse Nodes */}
      <div className="absolute top-[40%] left-[24%] -translate-x-1/2 -translate-y-1/2">
        <span
          className="block w-2 h-2 rounded-full bg-accent"
          style={{
            animation: "pulseNode 7s ease-in-out infinite",
            transformOrigin: "center",
          }}
        />
      </div>
      <div className="absolute top-[52%] left-[62%] -translate-x-1/2 -translate-y-1/2">
        <span
          className="block w-2 h-2 rounded-full bg-accent"
          style={{
            animation: "pulseNode 9s 2.5s ease-in-out infinite",
            transformOrigin: "center",
          }}
        />
      </div>
      <div className="absolute top-[35%] left-[84%] -translate-x-1/2 -translate-y-1/2">
        <span
          className="block w-1.5 h-1.5 rounded-full bg-accent"
          style={{
            animation: "pulseNode 8s 4.5s ease-in-out infinite",
            transformOrigin: "center",
          }}
        />
      </div>
    </div>
  );
}

export default function Publications() {
  if (publications.length === 0) return null;

  return (
    <section id="publications" className="py-14 sm:py-20 lg:py-28 relative overflow-hidden">
      <ResearchSpectrumBg />
      {/* Ambient lighting */}
      <div className="absolute top-1/3 -right-36 w-80 h-80 bg-accent/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-36 w-80 h-80 bg-accent/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-border/60">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                <FlaskConical className="w-3.5 h-3.5" />
                Academic Research &amp; Writings
              </div>
              <h2 className="heading-lg text-text">Publications &amp; Research</h2>
            </div>
            <p className="body-md text-text-secondary max-w-lg text-sm sm:text-base">
              Kontribusi riset dan publikasi ilmiah dalam bidang teknologi pendidikan, interaktif media, dan rekayasa perangkat lunak.
            </p>
          </div>
        </SectionReveal>

        <div className="space-y-4 sm:space-y-5">
          {publications.map((pub, index) => (
            <SectionReveal key={pub.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="group relative p-5 sm:p-6 rounded-2xl border border-border/80 bg-bg-alt/90 backdrop-blur-sm hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                  {/* Left: Icon & Details centered vertically with each other */}
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    {/* Icon Container centered */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      {pub.type === "Book" ? (
                        <BookOpen className="w-5 h-5 text-accent stroke-[1.8]" />
                      ) : (
                        <FileText className="w-5 h-5 text-accent stroke-[1.8]" />
                      )}
                    </div>

                    <div className="space-y-2 min-w-0 flex-1">
                      {/* Badges */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-accent uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20">
                          {pub.type === "Book" ? (
                            <BookOpen className="w-3 h-3" />
                          ) : (
                            <FileText className="w-3 h-3" />
                          )}
                          {pub.type}
                        </span>
                        <span className="text-[10px] font-mono text-text-muted px-2 py-0.5 rounded-full bg-bg border border-border/80">
                          {pub.year}
                        </span>
                        {pub.metadata && (
                          <span className="text-[10px] font-mono text-text-muted px-2 py-0.5 rounded-full bg-bg border border-border/80">
                            {pub.metadata}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-semibold text-text leading-snug group-hover:text-accent transition-colors duration-200">
                        {pub.url ? (
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline underline-offset-2"
                          >
                            {pub.title}
                          </a>
                        ) : (
                          pub.title
                        )}
                      </h3>

                      {/* Description if any */}
                      {pub.description && (
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {pub.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right: Button action aligned on the right */}
                  {pub.url && (
                    <div className="flex-shrink-0 sm:self-center pt-2 sm:pt-0 sm:pl-4">
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono font-medium text-accent hover:text-accent-light bg-accent/10 hover:bg-accent/20 border border-accent/25 hover:border-accent/45 px-3.5 py-2 rounded-xl transition-all duration-200 group/btn whitespace-nowrap shadow-xs"
                        aria-label={`Buka tautan ${pub.title}`}
                      >
                        <span>Buka Link Publikasi</span>
                        <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
