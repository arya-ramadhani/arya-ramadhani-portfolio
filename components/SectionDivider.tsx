"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative w-full h-px overflow-hidden pointer-events-none select-none">
      {/* Subtle track base line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      {/* Animated glowing beam line identical to Experience top divider */}
      <motion.div
        className="h-full bg-gradient-to-r from-transparent via-accent to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        style={{ width: "50%" }}
      />
    </div>
  );
}
