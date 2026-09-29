"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { experiences } from "@/data/experience";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Building2,
  Users,
} from "lucide-react";
import { TechIcon } from "./TechIcons";

export default function Experience() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    // Capture scroll position before layout shifts
    const scrollY = window.scrollY;
    // Pause Lenis during accordion expand/collapse
    window.dispatchEvent(new Event("lenis-freeze"));
    setOpenId((prev) => (prev === id ? null : id));
    // Restore scroll after paint so browser/Lenis don't jump
    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollY, behavior: "instant" });
    });
  };

  return (
    <section id="experience" className="py-14 sm:py-20 lg:py-28 bg-bg-alt/30 relative overflow-hidden">
      {/* Background ambient */}
      <div className="absolute top-1/4 -right-36 w-80 h-80 bg-accent/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-36 w-80 h-80 bg-accent/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <SectionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 sm:mb-12 pb-4 border-b border-border/60">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                <Briefcase className="w-3.5 h-3.5" />
                Track Record &amp; Milestones
              </div>
              <h2 className="heading-lg text-text">Experience Timeline</h2>
            </div>
            <p className="text-sm sm:body-md text-text-secondary max-w-lg">
              Rekam jejak profesional dalam pengembangan software, instalasi teknis hardware, serta kepemimpinan organisasi tingkat regional dan universitas.
            </p>
          </div>
        </SectionReveal>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-[1.125rem] sm:left-6 top-3 bottom-3 w-0.5 bg-gradient-to-b from-accent via-accent/40 to-transparent pointer-events-none z-0" />

          {/* Accordion list */}
          <div className="space-y-4 relative z-10" style={{ overflowAnchor: "none" }}>
            {experiences.map((exp, index) => {
              const isOpen = openId === exp.id;
              return (
                <SectionReveal key={exp.id} delay={index * 0.07}>
                  <div className="relative pl-10 sm:pl-14">

                    {/* Node marker */}
                    <div className="absolute left-0 sm:left-1 top-4 -translate-x-1/2 z-20 flex items-center justify-center">
                      {isOpen && (
                        <span className="absolute w-6 h-6 rounded-full bg-accent/25 animate-ping opacity-75 pointer-events-none" />
                      )}
                      <div
                        className={`w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                          isOpen
                            ? "border-accent bg-accent shadow-md shadow-accent/60 scale-110"
                            : "border-accent/60 bg-bg hover:border-accent hover:scale-105"
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${
                            isOpen ? "bg-white" : "bg-accent/80"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Header button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggle(exp.id);
                      }}
                      className={`w-full text-left px-5 py-4 rounded-xl border transition-colors duration-200 flex items-center justify-between gap-3 cursor-pointer ${
                        isOpen
                          ? "border-accent/50 bg-accent/5 shadow-lg shadow-accent/5 rounded-b-none"
                          : "border-border/70 bg-bg-alt/80 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5"
                      } backdrop-blur-sm`}
                    >
                      {/* Left: icon + title + org */}
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                            isOpen
                              ? "bg-accent/20 text-accent"
                              : "bg-bg border border-border/80 text-text-secondary"
                          }`}
                        >
                          {exp.type === "Work Experience" ? (
                            <Building2 className="w-4 h-4" />
                          ) : (
                            <Users className="w-4 h-4" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <h3
                            className={`text-sm font-bold leading-snug transition-colors ${
                              isOpen ? "text-accent" : "text-text"
                            }`}
                          >
                            {exp.position}
                          </h3>
                          <p className="text-xs text-text-muted font-mono truncate">
                            {exp.organization}
                          </p>
                        </div>
                      </div>

                      {/* Right: badge + year + chevron */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="hidden sm:inline-flex text-[10px] font-mono font-semibold text-accent/80 px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 whitespace-nowrap">
                          {exp.badge}
                        </span>
                        <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-mono text-text-muted whitespace-nowrap px-2 py-0.5 rounded-full border border-border/60 bg-bg">
                          <Calendar className="w-3 h-3" />
                          {exp.year}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-text-muted flex-shrink-0"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.span>
                      </div>
                    </button>

                    {/* Expandable detail panel */}
                    <div
                      style={{ overflowAnchor: "none" }}
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 py-4 border border-t-0 border-accent/30 rounded-b-xl bg-bg-alt/60 backdrop-blur-sm space-y-4">
                          {/* Period */}
                          <p className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </p>

                          {/* Description */}
                          <p className="text-sm text-text-secondary leading-relaxed">
                            {exp.description}
                          </p>

                          {/* Responsibilities */}
                          {exp.responsibilities?.length > 0 && (
                            <div className="space-y-2 pt-3 border-t border-border/40">
                              {exp.responsibilities.map((resp, ri) => (
                                <div
                                  key={ri}
                                  className="flex items-start gap-2.5 text-xs text-text-secondary leading-relaxed"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                                  <span>{resp}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Tech pills */}
                          {exp.technologies?.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-mono rounded-md bg-bg border border-border/80 text-text-muted"
                                >
                                  <TechIcon name={tech} size={11} className="w-3 h-3 flex-shrink-0" />
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
