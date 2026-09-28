"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, FileText, FlaskConical, Quote } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { publications } from "@/data/education";

export default function Publications() {
  if (publications.length === 0) return null;

  return (
    <section id="publications" className="py-20 lg:py-28 bg-bg-alt/30 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/3 -right-36 w-80 h-80 bg-accent/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-36 w-80 h-80 bg-accent/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-4 border-b border-border/60">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                <FlaskConical className="w-3.5 h-3.5" />
                Academic Research
              </div>
              <h2 className="heading-lg text-text">Publications &amp; Research</h2>
            </div>
            <p className="body-md text-text-secondary max-w-md">
              Kontribusi riset dan publikasi ilmiah dalam bidang teknologi pendidikan, interaktif media, dan rekayasa perangkat lunak.
            </p>
          </div>
        </SectionReveal>

        <div className="space-y-5">
          {publications.map((pub, index) => (
            <SectionReveal key={pub.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-2xl border border-border/70 bg-bg-alt/80 backdrop-blur-sm hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 overflow-hidden"
              >
                {/* Decorative quote mark */}
                <Quote className="absolute top-4 right-5 w-10 h-10 text-accent/8 rotate-180" />

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <BookOpen className="w-5 h-5 text-accent" />
                  </div>

                  <div className="flex-1 space-y-2.5 min-w-0">
                    {/* Type & Year badges */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-accent uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20">
                        <FileText className="w-3 h-3" />
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
                    <h3 className="text-base font-semibold text-text leading-snug group-hover:text-accent transition-colors duration-200 pr-6">
                      {pub.title}
                    </h3>

                    {/* Description if exists */}
                    {pub.description && (
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {pub.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

