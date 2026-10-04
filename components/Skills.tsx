"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { specializations, type Specialization } from "@/data/skills";
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
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
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
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative p-5 rounded-2xl border border-border/80 bg-bg-alt/85 dark:bg-bg-alt/70 backdrop-blur-md transition-all duration-300 hover:shadow-xl group overflow-hidden flex flex-col justify-between"
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(circle 240px at ${hoverCoord.x}% ${hoverCoord.y}%, ${colors.glow}, transparent 70%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="relative z-10">
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
            style={{ color: colors.brand, borderColor: `${colors.brand}35`, backgroundColor: colors.bg }}
          >
            {spec.number}
          </span>
        </div>
        <p className="text-xs text-text-secondary mb-3.5 line-clamp-2 leading-relaxed">{spec.description}</p>
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
      <div
        className="absolute inset-x-0 bottom-0 h-0.5 transition-opacity duration-300 rounded-b-2xl"
        style={{ backgroundColor: colors.brand, opacity: isHovered ? 1 : 0 }}
      />
    </motion.div>
  );
}

// 8 stars â€” minimal, CSS-animated (no JS)
const STARS = [
  { top: "8%",  left: "6%",  s: 2,   d: 3.2, dl: 0   },
  { top: "14%", left: "68%", s: 2.5, d: 4.5, dl: 0.5  },
  { top: "54%", left: "4%",  s: 1.5, d: 3.5, dl: 2.4  },
  { top: "68%", left: "14%", s: 2,   d: 4.2, dl: 0.3  },
  { top: "88%", left: "78%", s: 2,   d: 3.4, dl: 1.1  },
  { top: "64%", left: "92%", s: 2.5, d: 4.8, dl: 0.4  },
  { top: "28%", left: "48%", s: 2,   d: 3.8, dl: 2.1  },
  { top: "42%", left: "22%", s: 1,   d: 3.1, dl: 2.7  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-bg-alt/30 relative overflow-hidden">
      {/* Pure CSS keyframe definitions â€” zero JS runtime cost */}
      <style>{`
        @keyframes sk-star {
          0%,100%{opacity:.15;transform:scale(.85)}
          50%{opacity:.95;transform:scale(1.4)}
        }
        @keyframes sk-ccw{to{transform:rotate(-360deg)}}
        @keyframes sk-cw {to{transform:rotate(360deg)}}
      `}</style>

      {/* â”€â”€ Cosmic Background â€” CSS-only â”€â”€ */}
      <div className="absolute inset-0 pointer-events-none select-none z-0" aria-hidden="true">

        {STARS.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/80"
            style={{
              top: s.top, left: s.left,
              width: `${s.s}px`, height: `${s.s}px`,
              boxShadow: "0 0 6px rgba(255,255,255,0.8)",
              animation: `sk-star ${s.d}s ease-in-out ${s.dl}s infinite`,
            }}
          />
        ))}


      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-border/60">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                <Terminal className="w-3.5 h-3.5" />
                Technical Arsenal &amp; Capabilities
              </div>
              <h2 className="heading-lg text-text">Skills &amp; Technology Stack</h2>
            </div>
            <p className="body-md text-text-secondary max-w-lg text-sm sm:text-base">
              Membangun solusi digital terintegrasi melalui software, IoT, AI, dan user-centered design.
            </p>
          </div>
        </SectionReveal>

        {/* â”€â”€ Grid: 70% Cards | 30% Orbit Sphere â”€â”€ */}
        <SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-5 items-stretch">

            {/* Left 70%: Core Engineering Cards */}
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

            {/* Right 30%: 3D Tech Orbit
                overflow-hidden clips rings to this column â€” they will NEVER bleed left */}
            <div className="hidden lg:flex lg:col-span-3 flex-col h-full">
              <div className="flex items-center justify-between mb-3 h-6">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-text-muted">
                  3D Tech Orbit
                </span>
                <span className="text-[11px] font-mono text-accent">Interactive 360Â°</span>
              </div>

              <div className="flex-1 w-full relative min-h-[320px] lg:min-h-0 overflow-hidden">

                {/* Orbit rings â€” CSS animated, in DOM before TechSphere3D so they paint behind it */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    /* square centred in parent so rings are always perfect circles */
                    width: "100%", aspectRatio: "1 / 1",
                    top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Outer ring â€” CCW 55 s */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      inset: "-6%",
                      border: "1px dashed rgba(34,211,238,0.50)",
                      animation: "sk-ccw 55s linear infinite",
                    }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                  </div>

                  {/* Middle ring â€” CW 38 s */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      inset: "7%",
                      border: "1px dotted rgba(128,0,32,0.60)",
                      animation: "sk-cw 38s linear infinite",
                    }}
                  >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(128,0,32,0.9)]" />
                  </div>

                  {/* Inner ring â€” CW 22 s */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      inset: "19%",
                      border: "1px solid rgba(255,255,255,0.25)",
                      animation: "sk-cw 22s linear infinite",
                    }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1)]" />
                  </div>
                </div>

                {/* TechSphere3D â€” transparent, renders after rings so it's always on top */}
                <TechSphere3D className="absolute inset-0 w-full h-full" />
              </div>
            </div>

          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
