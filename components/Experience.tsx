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
      {/* === EXPERIENCE: Network Constellation Background === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Network nodes — pulsing dots at fixed positions */}
        {[
          { x: "8%",  y: "15%",  dur: 2.5, delay: 0 },
          { x: "22%", y: "40%",  dur: 3.0, delay: 0.8 },
          { x: "7%",  y: "68%",  dur: 2.8, delay: 1.5 },
          { x: "18%", y: "85%",  dur: 3.2, delay: 0.3 },
          { x: "85%", y: "12%",  dur: 2.6, delay: 1.1 },
          { x: "92%", y: "38%",  dur: 3.5, delay: 0.6 },
          { x: "80%", y: "60%",  dur: 2.9, delay: 1.9 },
          { x: "88%", y: "80%",  dur: 3.1, delay: 0.4 },
          { x: "48%", y: "8%",   dur: 2.7, delay: 2.1 },
          { x: "52%", y: "92%",  dur: 3.3, delay: 1.3 },
        ].map((node, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.35, 0.85, 0.35],
            }}
            transition={{ duration: node.dur, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
            className="absolute"
            style={{ left: node.x, top: node.y }}
          >
            {/* Outer ring */}
            <motion.div
              animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: node.dur, repeat: Infinity, ease: "easeOut", delay: node.delay }}
              className="absolute -inset-2 rounded-full border border-accent/40"
            />
            {/* Core dot */}
            <div className="w-2 h-2 rounded-full bg-accent/70" />
          </motion.div>
        ))}

        {/* SVG connecting lines between nodes */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(128,0,32,0)" />
              <stop offset="50%" stopColor="rgba(128,0,32,0.35)" />
              <stop offset="100%" stopColor="rgba(128,0,32,0)" />
            </linearGradient>
          </defs>
          <motion.line x1="8%" y1="15%" x2="22%" y2="40%"
            stroke="url(#lineGrad)" strokeWidth="0.8"
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line x1="22%" y1="40%" x2="7%" y2="68%"
            stroke="url(#lineGrad)" strokeWidth="0.8"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.line x1="7%" y1="68%" x2="18%" y2="85%"
            stroke="url(#lineGrad)" strokeWidth="0.8"
            animate={{ opacity: [0.2, 0.65, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.line x1="85%" y1="12%" x2="92%" y2="38%"
            stroke="url(#lineGrad)" strokeWidth="0.8"
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
          <motion.line x1="92%" y1="38%" x2="80%" y2="60%"
            stroke="url(#lineGrad)" strokeWidth="0.8"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
          <motion.line x1="80%" y1="60%" x2="88%" y2="80%"
            stroke="url(#lineGrad)" strokeWidth="0.8"
            animate={{ opacity: [0.15, 0.6, 0.15] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          <motion.line x1="48%" y1="8%" x2="85%" y2="12%"
            stroke="url(#lineGrad)" strokeWidth="0.5"
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.line x1="22%" y1="40%" x2="52%" y2="92%"
            stroke="url(#lineGrad)" strokeWidth="0.5"
            animate={{ opacity: [0.1, 0.35, 0.1] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          />
        </svg>

        {/* Corner diagonal accent bars */}
        <motion.div
          animate={{ opacity: [0.08, 0.2, 0.08], x: [0, 6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-40 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(128,0,32,0.6))" }}
        />
        <motion.div
          animate={{ opacity: [0.08, 0.18, 0.08], x: [0, -6, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-40 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, rgba(128,0,32,0.6), transparent)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-border/60">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                <Briefcase className="w-3.5 h-3.5" />
                Track Record &amp; Milestones
              </div>
              <h2 className="heading-lg text-text">Experience Timeline</h2>
            </div>
            <p className="body-md text-text-secondary max-w-lg text-sm sm:text-base">
              Rekam jejak dalam pengembangan dan penerapan solusi teknologi untuk mendukung berbagai kebutuhan dan tantangan.
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
