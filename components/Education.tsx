"use client";

import { GraduationCap, Users, Calendar } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-14 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Background ambient mesh */}
      <div className="absolute top-1/4 -right-36 w-80 h-80 bg-accent/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-36 w-80 h-80 bg-accent/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-border/60">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                <GraduationCap className="w-3.5 h-3.5" />
                Academic Background
              </div>
              <h2 className="heading-lg text-text">Formal Education &amp; Leadership</h2>
            </div>
            <p className="body-md text-text-secondary max-w-lg text-sm sm:text-base">
              Pondasi keilmuan vokasi rekayasa perangkat lunak serta rekam jejak kepemimpinan dalam organisasi mahasiswa dan teknologi.
            </p>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Degree (Left Column - 5 cols) */}
          <SectionReveal delay={0.1} className="lg:col-span-5 h-full">
            <div className="h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-border/80 bg-bg-alt/90 backdrop-blur-sm hover:border-accent/40 transition-colors duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold">
                    Higher Education
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="heading-md text-text leading-snug">{education.institution}</h3>
                  <p className="text-base font-semibold text-text">
                    {education.degree}
                  </p>
                  <p className="text-sm text-accent font-medium">{education.field}</p>
                </div>
              </div>

              {/* Bottom detail: Academic Status */}
              <div className="pt-6 mt-6 border-t border-border/60">
                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-bg/60 border border-border/60">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-xs font-mono font-medium text-text-secondary">Periode Studi</span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-text px-2.5 py-1 rounded-md bg-bg border border-border/80 shadow-xs">
                    {education.period}
                  </span>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Organizations (Right Column - 7 cols) */}
          <SectionReveal delay={0.2} className="lg:col-span-7 h-full">
            <div className="h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-xs font-mono font-semibold text-text uppercase tracking-wider">
                  Organizational Roles
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-between gap-3 sm:gap-3.5">
                {education.organizations.map((org) => (
                  <div
                    key={`${org.role}-${org.name}`}
                    className="flex-1 p-4 sm:p-5 rounded-2xl border border-border/80 bg-bg-alt/90 backdrop-blur-sm hover:border-accent/40 transition-all duration-300 flex flex-col justify-center"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <span className="text-xs text-accent font-mono font-bold uppercase tracking-wider">
                        {org.role}
                      </span>
                      {org.period && (
                        <span className="text-[11px] font-mono text-text-muted px-2 py-0.5 rounded-full bg-bg border border-border/70 self-start sm:self-auto">
                          {org.period}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-text font-medium leading-snug">{org.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
