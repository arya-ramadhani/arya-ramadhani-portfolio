"use client";

import { useState, type FormEvent } from "react";
import { Mail, Send, ArrowUpRight, CheckCircle2 } from "lucide-react";
import SectionReveal from "./SectionReveal";
import MagneticButton from "./MagneticButton";
import { motion } from "framer-motion";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socials = [
  {
    icon: Mail,
    customIcon: null as null | typeof GitHubIcon,
    label: "Direct Email",
    value: "okearya.tube@gmail.com",
    href: "mailto:okearya.tube@gmail.com",
    subtext: "Respon tercepat dalam 24 jam",
  },
  {
    icon: null,
    customIcon: LinkedInIcon,
    label: "LinkedIn Professional",
    value: "linkedin.com/in/arya-ramadhani-id",
    href: "https://linkedin.com/in/arya-ramadhani-id",
    subtext: "Karier, jejaring & rekomendasi",
  },
  {
    icon: null,
    customIcon: GitHubIcon,
    label: "GitHub Profile",
    value: "github.com/arya-ramadhani",
    href: "https://github.com/arya-ramadhani",
    subtext: "Repositori kode & kontribusi",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const formData = new FormData();
      formData.append("access_key", "4c87639d-e5e7-4e4c-a9c6-cd6550fd8744");
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("message", formState.message);
      formData.append("from_name", `Portfolio Inquiry from ${formState.name}`);
      formData.append("subject", `New message from ${formState.name} on Portfolio`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setErrorMessage(data.message || "Gagal mengirim pesan. Silakan coba lagi.");
      }
    } catch {
      setErrorMessage("Terjadi kesalahan koneksi. Silakan periksa jaringan Anda.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Animated floating ring decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Rings top-right corner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-accent/20"
          style={{ borderStyle: "dashed" }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 -right-10 w-52 h-52 rounded-full border border-accent/15"
        />

        {/* Ring bottom-left */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-accent/15"
          style={{ borderStyle: "dashed" }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full border border-accent/10"
        />

        {/* Floating dots */}
        {[
          { top: "10%", left: "8%", dur: 5, delay: 0 },
          { top: "30%", right: "6%", dur: 7, delay: 1.5 },
          { top: "55%", left: "5%", dur: 5.5, delay: 2.8 },
          { top: "75%", right: "12%", dur: 6, delay: 0.6 },
          { top: "18%", left: "38%", dur: 4.5, delay: 3.5 },
          { top: "65%", left: "55%", dur: 6.5, delay: 1.2 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -20, 0], opacity: [0.15, 0.65, 0.15] }}
            transition={{ duration: dot.dur, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
            className="absolute w-1.5 h-1.5 rounded-full bg-accent/60"
            style={{ top: dot.top, left: (dot as any).left, right: (dot as any).right }}
          />
        ))}

        {/* Larger glowing dot accent */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-2.5 h-2.5 rounded-full bg-accent/60"
          style={{ top: "45%", right: "22%" }}
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          className="absolute w-2 h-2 rounded-full bg-accent/50"
          style={{ top: "25%", left: "28%" }}
        />

        {/* Ambient radial glows with higher opacity */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(128,0,32,0.35) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.22, 0.1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(128,0,32,0.3) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="space-y-3 mb-10 lg:mb-16">
            <span className="label text-accent">Get in Touch</span>
            <h2 className="heading-lg text-text">
              Let&apos;s build something meaningful.
            </h2>
            <p className="body-lg text-text-secondary max-w-xl text-sm sm:text-base">
              Saya terbuka untuk peluang rekayasa perangkat lunak (software engineering), kolaborasi enterprise, prototipe IoT, dan proyek teknologi menantang lainnya.
            </p>
            <div className="accent-line" />
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Form (7 cols) */}
          <SectionReveal delay={0.1} className="lg:col-span-7">
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-border/80 bg-bg-alt/90 backdrop-blur-xl shadow-xl shadow-black/5">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-medium text-text-secondary uppercase tracking-wider mb-1.5 sm:mb-2"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, name: e.target.value }))
                      }
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm bg-bg border border-border/90 rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="cth. Ada Lovelace"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-medium text-text-secondary uppercase tracking-wider mb-1.5 sm:mb-2"
                    >
                      Alamat Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, email: e.target.value }))
                      }
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm bg-bg border border-border/90 rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="adalovelace@domain.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-medium text-text-secondary uppercase tracking-wider mb-1.5 sm:mb-2"
                  >
                    Detail Proyek atau Peluang
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, message: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm bg-bg border border-border/90 rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Ceritakan tentang kebutuhan tech stack, ruang lingkup proyek, timeline, atau posisi pekerjaan..."
                  />
                </div>

                {errorMessage && (
                  <div className="p-3 text-xs rounded-xl border border-red-500/30 bg-red-500/10 text-red-400">
                    {errorMessage}
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <MagneticButton strength={0.2}>
                    <button
                      type="submit"
                      disabled={isSubmitting || submitted}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-xl shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-200 disabled:opacity-60 cursor-pointer active:scale-95"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Mengirim Pesan...
                        </>
                      ) : submitted ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                          Pesan Terkirim ke Email!
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Kirim Pesan
                        </>
                      )}
                    </button>
                  </MagneticButton>

                  <span className="text-[11px] font-mono text-text-muted text-center sm:text-right">
                    🔒 Aman &amp; Langsung
                  </span>
                </div>
              </form>
            </div>
          </SectionReveal>

          {/* Right Column: Animated Social Cards (5 cols) */}
          <SectionReveal delay={0.2} className="lg:col-span-5">
            <div className="space-y-3.5 sm:space-y-4">
              <div className="text-xs font-mono text-text-muted uppercase tracking-wider">
                Saluran Komunikasi Langsung
              </div>

              {socials.map((social) => {
                const IconComponent = social.icon;
                const CustomIcon = social.customIcon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 6, transition: { duration: 0.15 } }}
                    className="flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl border border-border/80 bg-bg-alt/90 backdrop-blur-md hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-accent/20 bg-accent/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 text-accent flex-shrink-0">
                      {IconComponent ? (
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : CustomIcon ? (
                        <CustomIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : null}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] sm:text-xs font-mono text-text-muted">{social.label}</p>
                      <p className="text-xs sm:text-sm font-semibold text-text truncate group-hover:text-accent transition-colors">
                        {social.value}
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-text-secondary mt-0.5 truncate">
                        {social.subtext}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                  </motion.a>
                );
              })}
              
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
