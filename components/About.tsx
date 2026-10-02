"use client";

import { Download, GraduationCap, Code2, Target, Sparkles, FolderGit2, Cpu, Layers, Award } from "lucide-react";
import SectionReveal from "./SectionReveal";
import MagneticButton from "./MagneticButton";
import { motion } from "framer-motion";

const stats = [
  {
    icon: FolderGit2,
    value: "4+",
    label: "Proyek Selesai",
    detail: "Web, IoT & Sistem AI",
    floatDuration: 4.6,
  },
  {
    icon: Cpu,
    value: "20+",
    label: "Technologies",
    detail: "Bahasa & Framework",
    floatDuration: 5.2,
  },
  {
    icon: Layers,
    value: "4",
    label: "Spesialisasi Utama",
    detail: "Full-Stack • IoT • AI • UI/UX",
    floatDuration: 4.2,
  },
  {
    icon: Award,
    value: "3+",
    label: "Keterlibatan Nyata",
    detail: "Proyek Akademik & Industri",
    floatDuration: 5.0,
  },
];

const keyInfo = [
  {
    icon: GraduationCap,
    label: "Gelar",
    value: "Sarjana Terapan Komputer (S.Tr.Kom)",
    tag: "Degree",
    floatDuration: 4.8,
  },
  {
    icon: Code2,
    label: "Bidang Studi",
    value: "Rekayasa Perangkat Lunak",
    tag: "Major",
    floatDuration: 5.4,
  },
  {
    icon: Target,
    label: "Fokus Utama",
    value: "Software Engineering",
    tag: "Focus",
    floatDuration: 4.4,
  },
  {
    icon: Sparkles,
    label: "Spesialisasi",
    value: "Web • Mobile • IoT • AI • UI/UX",
    tag: "Domain",
    floatDuration: 5.1,
  },
];

// Programmer ambient code snippets that continuously float in the background
const floatingCodeSnippets = [
  { code: "const engineer = new SoftwareEngineer();", top: "8%", left: "4%", delay: 0, duration: 6.5 },
  { code: "interface Architecture { clean: true; scalable: true; }", top: "18%", right: "6%", delay: 1.2, duration: 7.2 },
  { code: "ESP32.listen(PORT_1883, MQTT_BROKER);", top: "52%", right: "3%", delay: 0.5, duration: 8.0 },
  { code: "cv::Mat frame = camera.capture();", top: "68%", left: "3%", delay: 2.1, duration: 6.8 },
  { code: "01000001 01010010 01011001 01000001", top: "90%", left: "28%", delay: 1.5, duration: 7.5 },
  { code: "async function deploy(): Promise<Success>", top: "38%", left: "48%", delay: 2.8, duration: 6.2 },
];

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-32 relative overflow-hidden">
      {/* ── 1. Continuous Ambient Floating Developer Code Streams ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {floatingCodeSnippets.map((item, idx) => (
          <motion.div
            key={idx}
            animate={{
              y: [0, -14, 0],
              opacity: [0.18, 0.42, 0.18],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
            }}
            className="absolute font-mono text-[10px] sm:text-xs text-accent/35 dark:text-accent/40 tracking-wider whitespace-nowrap bg-bg-alt/30 dark:bg-black/20 px-2.5 py-1 rounded-md border border-accent/15 backdrop-blur-[1px] hidden sm:block"
          >
            <span className="text-accent/60 mr-1.5 font-bold">&gt;</span>
            {item.code}
          </motion.div>
        ))}

        {/* Continuous Drifting Ambient Energy Orbs */}
        <motion.div
          animate={{
            x: [-40, 50, -40],
            y: [-30, 30, -30],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-24 w-96 h-96 bg-accent/8 rounded-full blur-[140px] pointer-events-none"
        />
        <motion.div
          animate={{
            x: [30, -40, 30],
            y: [20, -30, 20],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 -left-24 w-80 h-80 bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="space-y-3 mb-10 lg:mb-16">
            <span className="label text-accent">About</span>
            <h2 className="heading-lg text-text">Engineering Reliable Digital Solutions</h2>
            <div className="accent-line" />
          </div>
        </SectionReveal>

        {/* ── 2. Top Highlight Statistics Row With Micro-Floating Motion ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-10 lg:mb-16">
          {stats.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.08}>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: stat.floatDuration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.35,
                }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="p-4 sm:p-6 rounded-2xl border border-border/80 bg-bg-alt/85 dark:bg-bg-alt/70 backdrop-blur-md hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Continuous Shimmer Light Ray running across top border */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.6,
                  }}
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent pointer-events-none"
                />

                {/* Animated Pulsing Icon */}
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-3 sm:mb-4 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-xs"
                >
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>

                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text tracking-tight font-mono mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-text mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[10px] sm:text-xs text-text-muted leading-tight">
                  {stat.detail}
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left — Narrative & Positioning (7 cols) */}
          <SectionReveal delay={0.2} className="lg:col-span-7">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg text-text-secondary leading-relaxed">
                Saya adalah seorang Software Engineer dengan latar belakang akademis di bidang Teknik Informatika dengan Prodi{" "}
                <span className="text-text font-medium">Rekayasa Perangkat Lunak (Software Engineering)</span>.
                Saya berfokus pada membangun solusi digital yang andal, efisien, dan mudah dikembangkan, dengan pendekatan yang berorientasi pada kebutuhan pengguna dan permasalahan nyata.
              </p>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Saya mengembangkan berbagai solusi melalui integrasi <span className="text-text font-medium">web, mobile, IoT, dan AI</span>,
                mulai dari membangun aplikasi dan sistem berbasis web hingga menghubungkan perangkat dan sensor dengan sistem digital.
                Saya juga menerapkan <span className="text-text font-medium">computer vision</span> dan <span className="text-text font-medium">image processing</span> untuk mendukung proses yang lebih otomatis dan efektif.
              </p>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Dalam setiap proyek, saya mengutamakan <span className="text-text font-medium">clean architecture</span>, maintainability, scalability, dan user experience.
                Bagi saya, software bukan hanya tentang bagaimana sistem dapat berjalan, tetapi bagaimana sebuah solusi dapat tetap reliable, adaptable, dan memberikan nilai nyata dalam jangka panjang.
              </p>

              <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4">
                <MagneticButton strength={0.25}>
                  <a
                    href="/resume/cv.pdf"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-xl shadow-md shadow-accent/20 hover:shadow-accent/40 transition-all duration-200 active:scale-95"
                  >
                    <Download className="w-4 h-4" />
                    Download Full CV
                  </a>
                </MagneticButton>
                <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Diperbarui untuk Peluang 2026</span>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* ── 3. Right — Academic & Engineering Cards With Living Motion (5 cols) ── */}
          <SectionReveal delay={0.3} className="lg:col-span-5 w-full">
            <div className="space-y-3.5">
              {keyInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  animate={{ y: [0, -3.5, 0] }}
                  transition={{
                    duration: item.floatDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.45,
                  }}
                  whileHover={{ x: 6, transition: { duration: 0.15 } }}
                  className="p-4 sm:p-5 rounded-2xl border border-border/80 bg-bg-alt/90 dark:bg-bg-alt/75 backdrop-blur-md hover:border-accent/40 hover:bg-bg-elevated transition-all duration-200 group flex items-start gap-4 relative overflow-hidden shadow-xs"
                >
                  {/* Subtle continuous corner glow on cards */}
                  <motion.div
                    animate={{ opacity: [0.15, 0.4, 0.15] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                    className="absolute -top-6 -right-6 w-16 h-16 bg-accent/15 rounded-full blur-xl pointer-events-none"
                  />

                  {/* Icon with continuous breathing motion */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                    className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex-shrink-0 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-xs"
                  >
                    <item.icon className="w-5 h-5" />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                        {item.label}
                      </p>
                      <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-bg border border-border/70 text-accent">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-text truncate">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
