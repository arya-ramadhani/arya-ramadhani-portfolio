"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TerminalLine {
  type: "command" | "output" | "blank";
  text: string;
  delay?: number;
}

const terminalSequence: TerminalLine[] = [
  { type: "command", text: "whoami" },
  { type: "output", text: "Arya Ramadhani" },
  { type: "blank", text: "" },
  { type: "command", text: "gh repo list arya-ramadhani" },
  { type: "output", text: "✔ Connected: github.com/arya-ramadhani" },
  { type: "output", text: "📦 5 public repositories | 130+ contributions" },
  { type: "blank", text: "" },
  { type: "command", text: "echo $ROLE" },
  { type: "output", text: "Full Stack Developer & IoT Engineer" },
  { type: "blank", text: "" },
  { type: "command", text: "cat skills.txt" },
  { type: "output", text: "Web & Mobile (Next.js, Laravel, Flutter)" },
  { type: "output", text: "Internet of Things" },
  { type: "output", text: "AI & Computer Vision" },
  { type: "blank", text: "" },
  { type: "command", text: "echo $STATUS" },
  { type: "output", text: "Available for opportunities ✓" },
];

export default function InteractiveTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isInView) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timeout: ReturnType<typeof setTimeout>;
    if (prefersReduced) {
      timeout = setTimeout(() => {
        setVisibleLines(terminalSequence.length);
      }, 0);
      return () => clearTimeout(timeout);
    }

    let lineIndex = 0;
    let charIndex = 0;

    const processLine = () => {
      if (lineIndex >= terminalSequence.length) return;
      const line = terminalSequence[lineIndex];

      if (line.type === "command") {
        setIsTyping(true);
        const typeChar = () => {
          if (charIndex <= line.text.length) {
            setTypingText(line.text.slice(0, charIndex));
            charIndex++;
            timeout = setTimeout(typeChar, 50 + Math.random() * 30);
          } else {
            setIsTyping(false);
            setTypingText("");
            setVisibleLines(lineIndex + 1);
            lineIndex++;
            charIndex = 0;
            timeout = setTimeout(processLine, 200);
          }
        };
        timeout = setTimeout(typeChar, 400);
      } else {
        setVisibleLines(lineIndex + 1);
        lineIndex++;
        timeout = setTimeout(processLine, 100);
      }
    };

    timeout = setTimeout(processLine, 800);
    return () => clearTimeout(timeout);
  }, [isInView]);

  const isComplete = !isTyping && visibleLines >= terminalSequence.length;

  return (
    <div
      ref={ref}
      className={`terminal-window shadow-2xl shadow-black/20 w-full rounded-2xl overflow-hidden transition-all duration-300 ${
        isComplete ? "h-full flex flex-col justify-start" : "h-auto"
      }`}
    >
      <div className="terminal-titlebar shrink-0">
        <div className="terminal-dot bg-[#FF5F57]" />
        <div className="terminal-dot bg-[#FEBC2E]" />
        <div className="terminal-dot bg-[#28C840]" />
        <span className="ml-3 text-xs text-zinc-500 font-mono">arya@portfolio ~ </span>
      </div>
      <div ref={containerRef} className="p-4 sm:p-5 text-xs sm:text-[13px] leading-relaxed flex-1 flex flex-col justify-start overflow-hidden">
        {terminalSequence.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
          >
            {line.type === "command" ? (
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">❯</span>
                <span className="text-zinc-200">{line.text}</span>
              </div>
            ) : line.type === "output" ? (
              <div className="text-zinc-400 pl-4">{line.text}</div>
            ) : (
              <div className="h-2" />
            )}
          </motion.div>
        ))}
        {isTyping && (
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">❯</span>
            <span className="text-zinc-200">{typingText}</span>
            <span className="animate-blink text-emerald-400">▊</span>
          </div>
        )}
        {!isTyping && visibleLines >= terminalSequence.length && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-emerald-400">❯</span>
            <span className="animate-blink text-emerald-400">▊</span>
          </div>
        )}
      </div>
    </div>
  );
}
