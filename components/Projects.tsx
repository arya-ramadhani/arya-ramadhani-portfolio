"use client";

import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { FolderGit2 } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Animated border lines */}
      <div className="absolute inset-x-0 top-0 h-px overflow-hidden pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-accent to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{ width: "50%" }}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px overflow-hidden pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-accent to-transparent"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{ width: "50%" }}
        />
      </div>

      {/* Ambient lighting */}
      <div className="absolute top-1/3 -left-36 w-80 h-80 bg-accent/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-36 w-80 h-80 bg-accent/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-border/60">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                <FolderGit2 className="w-3.5 h-3.5" />
                Featured Engineering Portfolio
              </div>
              <h2 className="heading-lg text-text">Selected Projects</h2>
            </div>
            <p className="body-md text-text-secondary max-w-lg">
              Sistem produksi enterprise, implementasi hardware IoT &amp; IFP, pipeline computer vision, dan riset interaktif yang telah diimplementasikan.
            </p>
          </div>
        </SectionReveal>

        {/* Responsive Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

