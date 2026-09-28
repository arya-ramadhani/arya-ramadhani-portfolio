"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SectionReveal from "./SectionReveal";
import {
  specializations,
  type Specialization,
} from "@/data/skills";
import { TechIcon } from "./TechIcons";
import TechSphere3D from "./TechSphere3D";
import { Terminal, Sparkles } from "lucide-react";

// Specialization brand colors & accents
const specColors: Record<string, { brand: string; glow: string; bg: string }> = {
  "01": { brand: "#3178C6", glow: "rgba(49, 120, 198, 0.2)", bg: "rgba(49, 120, 198, 0.08)" },
  "02": { brand: "#00979C", glow: "rgba(0, 151, 156, 0.2)", bg: "rgba(0, 151, 156, 0.08)" },
  "03": { brand: "#EA4335", glow: "rgba(234, 67, 53, 0.2)", bg: "rgba(234, 67, 53, 0.08)" },
  "04": { brand: "#A855F7", glow: "rgba(168, 85, 247, 0.2)", bg: "rgba(168, 85, 247, 0.08)" },
};

// Compact, modern 3D tilt card for specializations (no "domain" text, all have official icons)
function SpecializationCard({ spec, index }: { spec: Specialization; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hoverCoord, setHoverCoord] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 22, stiffness: 240 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), springConfig);

  const colors = specColors[spec.number] || {
    brand: "#800020",
    glow: "rgba(128, 0, 32, 0.2)",
    bg: "rgba(128, 0, 32, 0.08)",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
    setHoverCoord({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative p-5 rounded-2xl border border-border/80 bg-bg-alt/85 dark:bg-bg-alt/70 backdrop-blur-md transition-all duration-300 hover:shadow-xl group overflow-hidden flex flex-col justify-between"
    >
      {/* Dynamic Cursor Light Reflection */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(circle 240px at ${hoverCoord.x}% ${hoverCoord.y}%, ${colors.glow}, transparent 70%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      <div className="relative z-10">
        {/* Header: Number & Title with Icon */}
        <div className="flex items-center justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 shadow-xs flex-shrink-0"
              style={{
                backgroundColor: isHovered ? colors.brand : colors.bg,
                color: isHovered ? "#FFFFFF" : colors.brand,
                border: `1px solid ${colors.brand}40`,
              }}
            >
              <spec.icon className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-text group-hover:text-text transition-colors duration-200">
              {spec.title}
            </h3>
          </div>

          <span
            className="font-mono text-[11px] font-bold px-2 py-0.5 rounded border transition-colors duration-200"
            style={{
              color: colors.brand,
              borderColor: `${colors.brand}35`,
              backgroundColor: colors.bg,
            }}
          >
            {spec.number}
          </span>
        </div>

        {/* Concise Description */}
        <p className="text-xs text-text-secondary mb-3.5 line-clamp-2 leading-relaxed">
          {spec.description}
        </p>

        {/* Official Technology Badges: EVERY single tech has its authentic SVG icon */}
        <div className="pt-3 border-t border-border/50">
          <div className="flex flex-wrap gap-1.5">
            {spec.technologies.map((techName) => (
              <span
                key={techName}
                className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-mono font-medium rounded-md bg-bg/90 border border-border/80 text-text-secondary group-hover:border-border/90 group-hover:text-text transition-all duration-200 hover:scale-105 hover:border-accent/40 shadow-xs"
              >
                <TechIcon name={techName} size={13} className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{techName}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom glowing accent edge */}
      <div
        className="absolute inset-x-0 bottom-0 h-0.5 transition-opacity duration-300 rounded-b-2xl"
        style={{
          backgroundColor: colors.brand,
          opacity: isHovered ? 1 : 0,
        }}
      />
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-20 bg-bg-alt/30 relative overflow-hidden">
      {/* Background ambient mesh glows */}
      <div className="absolute top-1/4 -left-36 w-80 h-80 bg-accent/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-36 w-80 h-80 bg-accent/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ── Compact Header (Fits on one page) ── */}
        <SectionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 pb-4 border-b border-border/60">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                <Terminal className="w-3.5 h-3.5" />
                Technical Arsenal &amp; Capabilities
              </div>
              <h2 className="heading-md lg:heading-lg text-text">Skills &amp; Technology Stack</h2>
            </div>
            <p className="text-xs font-mono text-text-muted max-w-md">
              Full-stack web architectures, IoT microcontrollers, and computer vision systems.
            </p>
          </div>
        </SectionReveal>

        {/* ── 70% Left: Core Engineering (Cards) & 30% Right: 3D Floating Logos Cosmos ── */}
        <SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-5 items-stretch">
            {/* 70% Left: Core Engineering (2x2 Compact Cards) */}
            <div className="lg:col-span-7 flex flex-col h-full">
              <div className="flex items-center justify-between mb-3 h-6">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  Core Engineering &amp; Architecture
                </span>
                <span className="text-[11px] font-mono text-text-muted">04 Specializations</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                {specializations.map((spec, index) => (
                  <SpecializationCard key={spec.number} spec={spec} index={index} />
                ))}
              </div>
            </div>

            {/* 30% Right: Pure 3D Floating Technology Logos Animation */}
            <div className="lg:col-span-3 flex flex-col h-full">
              <div className="flex items-center justify-between mb-3 h-6">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-text-muted">
                  3D Tech Orbit
                </span>
                <span className="text-[11px] font-mono text-accent">Interactive 360°</span>
              </div>
              <div className="flex-1 w-full relative min-h-[320px] lg:min-h-0">
                <TechSphere3D className="w-full h-full" />
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
