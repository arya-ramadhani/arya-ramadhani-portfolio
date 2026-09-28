"use client";

export default function SectionDivider() {
  return (
    <div className="relative w-full h-px overflow-hidden pointer-events-none select-none">
      {/* Subtle track base */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      {/* Animated glowing beam — pure CSS, zero JS cost */}
      <div className="section-divider-beam" />
    </div>
  );
}
