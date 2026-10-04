"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, FileText, FlaskConical } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { publications } from "@/data/education";

export default function Publications() {
  if (publications.length === 0) return null;

  return (
    <section id="publications" className="py-14 sm:py-20 lg:py-28 relative overflow-hidden">
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
