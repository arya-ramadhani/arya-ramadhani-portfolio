"use client";

import { useEffect, useState, useRef } from "react";
import {
  GitCommit,
  Terminal,
  ExternalLink,
  Flame,
  ChevronLeft,
  ChevronRight,
  Calendar,
} from "lucide-react";
import SectionReveal from "./SectionReveal";
import InteractiveTerminal from "./InteractiveTerminal";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

const levelColors = [
  "bg-border/40",
  "bg-emerald-500/35",
  "bg-emerald-500/60",
  "bg-emerald-500/85",
  "bg-emerald-400",
];

const availableYears = ["2026", "2025"];

export default function DevActivity() {
  const [selectedYear, setSelectedYear] = useState<string>("2026");
  const [yearContributions, setYearContributions] = useState<number>(15);
  const [totalLifetimeContributions, setTotalLifetimeContributions] = useState<number>(237);
  const [weeksData, setWeeksData] = useState<ContributionDay[][]>([]);
  const [repoCount, setRepoCount] = useState<number>(5);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Fetch GitHub User & Lifetime Contributions
  useEffect(() => {
    async function fetchUserAndTotals() {
      try {
        const res = await fetch("https://api.github.com/users/arya-ramadhani");
        if (res.ok) {
          const data = await res.json();
          if (data?.public_repos) {
            setRepoCount(data.public_repos);
          }
        }

        const totalsRes = await fetch(
          "https://github-contributions-api.jogruber.de/v4/arya-ramadhani"
        );
        if (totalsRes.ok) {
          const totalsData = await totalsRes.json();
          if (totalsData?.total) {
            const sum = Object.values(totalsData.total as Record<string, number>).reduce(
              (a, b) => a + b,
              0
            );
            if (sum > 0) setTotalLifetimeContributions(sum);
          }
        }
      } catch (e) {
        console.warn("Could not fetch user info", e);
      }
    }
    fetchUserAndTotals();
  }, []);

  useEffect(() => {
    async function fetchYearContributions(year: string) {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/arya-ramadhani?y=${year}`
        );
        if (res.ok) {
          const data = await res.json();
          if (data?.total?.[year] !== undefined) {
            setYearContributions(data.total[year]);
          }

          if (Array.isArray(data?.contributions)) {
            let rawDays: ContributionDay[] = data.contributions;

            // Jika tahun 2025, mulai dari commit/submit pertama (4 Sep 2025)
            // agar tidak menampilkan ratusan kotak kosong sebelumnya
            if (year === "2025") {
              const firstCommitIndex = rawDays.findIndex((c) => c.count > 0);
              if (firstCommitIndex !== -1) {
                rawDays = rawDays.slice(firstCommitIndex);
              }
            }

            const weeks: ContributionDay[][] = [];
            for (let i = 0; i < rawDays.length; i += 7) {
              weeks.push(rawDays.slice(i, i + 7));
            }
            setWeeksData(weeks);
          }
        }
      } catch (err) {
        console.warn(`Error loading contributions for ${year}:`, err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchYearContributions(selectedYear);
  }, [selectedYear]);

  // Click & Drag to Scroll Handler
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // multiplier kecepatan drag
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const scrollByAmount = (amount: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section id="dev-activity" className="py-14 sm:py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-10">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-mono font-semibold uppercase tracking-wider">
                <GitHubIcon className="w-3.5 h-3.5" />
                Live GitHub Sync
              </div>
              <h2 className="heading-lg text-text">Code Activity &amp; Live Terminal</h2>
              <p className="body-lg text-text-secondary max-w-xl text-sm sm:text-base">
                Aktivitas commit nyata langsung dari akun GitHub{" "}
                <a
                  href="https://github.com/arya-ramadhani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-4 hover:text-accent-light font-semibold"
                >
                  @arya-ramadhani
                </a>
                . Geser grafik untuk menelusuri timeline kontribusi.
              </p>
            </div>
          </div>

          {/* Sub-header: sejajar di atas kedua kolom */}
          <div className="grid lg:grid-cols-12 gap-4 lg:gap-12 mb-2">
            <div className="lg:col-span-6">
              <div className="flex items-center justify-between text-xs font-mono text-text-muted px-1">
                <span className="flex items-center gap-1.5 text-accent">
                  <Terminal className="w-3.5 h-3.5" />
                  Terminal CLI Simulator
                </span>
                <span>Interactive CLI</span>
              </div>
            </div>
            <div className="lg:col-span-6">
              <a
                href="https://github.com/arya-ramadhani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-border/80 bg-bg-alt/80 hover:border-accent/40 text-xs font-mono text-text hover:text-accent transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>github.com/arya-ramadhani</span>
                <ExternalLink className="w-3.5 h-3.5 text-text-muted" />
              </a>
            </div>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-stretch">
          {/* Left Column: Interactive Terminal (6 cols) */}
          <SectionReveal delay={0.1} className="lg:col-span-6 w-full">
            <div className="h-full">
              <InteractiveTerminal />
            </div>
          </SectionReveal>

          {/* Right Column: GitHub Real Contribution Graph & Year Selector (6 cols) */}
          <SectionReveal delay={0.2} className="lg:col-span-6 w-full">
            <div className="p-4 sm:p-6 rounded-2xl border border-border/80 bg-bg-alt/90 backdrop-blur-md shadow-xl shadow-black/5 space-y-5 sm:space-y-6">
              {/* Header: Title + Year Navigator (< YEAR >) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-text flex items-center gap-2">
                    <GitCommit className="w-4 h-4 text-accent" />
                    Activity &amp; Commit History
                  </h3>
                  <p className="text-xs text-text-muted font-mono mt-0.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {yearContributions} kontribusi di tahun {selectedYear}
                  </p>
                </div>

                {/* Year Selection with < YEAR > arrows */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-bg border border-border/80 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-text-muted ml-1.5 mr-0.5" />
                  
                  {/* Prev Year Button (<) */}
                  <button
                    type="button"
                    onClick={() => {
                      const curr = parseInt(selectedYear, 10);
                      if (curr > 2025) setSelectedYear(String(curr - 1));
                    }}
                    disabled={selectedYear === "2025"}
                    className={`p-1 rounded-md transition-colors ${
                      selectedYear === "2025"
                        ? "text-text-muted/30 cursor-not-allowed"
                        : "text-text hover:text-accent hover:bg-bg-alt cursor-pointer"
                    }`}
                    title="Tahun sebelumnya"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Current Selected Year */}
                  <span className="px-2 py-0.5 font-mono text-xs font-bold text-accent">
                    {selectedYear}
                  </span>

                  {/* Next Year Button (>) - Dimmed/Disabled if 2026 */}
                  <button
                    type="button"
                    onClick={() => {
                      const curr = parseInt(selectedYear, 10);
                      if (curr < 2026) setSelectedYear(String(curr + 1));
                    }}
                    disabled={selectedYear === "2026"}
                    className={`p-1 rounded-md transition-colors ${
                      selectedYear === "2026"
                        ? "text-text-muted/30 cursor-not-allowed opacity-40"
                        : "text-text hover:text-accent hover:bg-bg-alt cursor-pointer"
                    }`}
                    title="Tahun berikutnya"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Legend & Mobile Swipe Hint */}
              <div className="flex items-center justify-between text-[11px] font-mono text-text-muted pt-1">
                <span className="text-[10px] text-accent/80 sm:hidden">← geser grafik →</span>
                <div className="flex items-center gap-1 ml-auto">
                  <span>Sedikit</span>
                  {levelColors.map((col, idx) => (
                    <span key={idx} className={`w-2.5 h-2.5 rounded-sm ${col}`} />
                  ))}
                  <span>Banyak</span>
                </div>
              </div>

              {/* Draggable & Scrollable Contribution Graph */}
              <div
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className={`overflow-x-auto pb-3 select-none cursor-grab active:cursor-grabbing scrollbar-thin transition-opacity duration-300 ${
                  isLoading ? "opacity-40" : "opacity-100"
                }`}
              >
                {(() => {
                  const weeks =
                    weeksData.length > 0
                      ? weeksData
                      : Array.from({ length: 52 }, () =>
                          Array.from({ length: 7 }, () => ({ date: "", count: 0, level: 0 }))
                        );

                  const MONTH_NAMES = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];

                  // Tampilkan semua minggu dari commit pertama s/d commit terakhir (seperti GitHub)
                  const hasAnyCommit = weeks.some((w) => w.some((d) => d.count > 0));
                  let firstWeek = 0;
                  let lastWeek = weeks.length - 1;
                  if (hasAnyCommit) {
                    for (let i = 0; i < weeks.length; i++) {
                      if (weeks[i].some((d) => d.count > 0)) { firstWeek = i; break; }
                    }
                    for (let i = weeks.length - 1; i >= 0; i--) {
                      if (weeks[i].some((d) => d.count > 0)) { lastWeek = i; break; }
                    }
                  }

                  const displayWeeks = weeks.slice(firstWeek, lastWeek + 1);

                  // Buat label bulan sesuai kolom displayWeeks
                  const monthLabels: { label: string; displayCol: number }[] = [];
                  let lastMonth = -1;
                  displayWeeks.forEach((week, dIdx) => {
                    const firstDay = week.find((d) => d.date);
                    if (firstDay) {
                      const month = new Date(firstDay.date).getMonth();
                      if (month !== lastMonth) {
                        monthLabels.push({ label: MONTH_NAMES[month], displayCol: dIdx });
                        lastMonth = month;
                      }
                    }
                  });

                  const CELL = 12;
                  const GAP = 4;
                  const colWidth = CELL + GAP;

                  return (
                    <div className="min-w-max">
                      {/* Label Bulan */}
                      <div className="relative h-5 mb-1" style={{ width: displayWeeks.length * colWidth }}>
                        {monthLabels.map(({ label, displayCol }) => (
                          <span
                            key={`${label}-${displayCol}`}
                            className="absolute text-[10px] font-mono text-text-muted"
                            style={{ left: displayCol * colWidth }}
                          >
                            {label}
                          </span>
                        ))}
                      </div>

                      {/* Grid semua minggu */}
                      <div className="flex gap-1">
                        {displayWeeks.map((week, wIdx) => (
                          <div key={wIdx} className="flex flex-col gap-1">
                            {week.map((day, dIdx) => (
                              <div
                                key={dIdx}
                                title={
                                  day.date
                                    ? `${day.count} kontribusi pada ${day.date}`
                                    : "Tidak ada kontribusi"
                                }
                                className={`w-3 h-3 rounded-xs ${
                                  levelColors[day.level] || levelColors[0]
                                } transition-transform hover:scale-150`}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Developer Metrics */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 border-t border-border/60">
                <a
                  href="https://github.com/arya-ramadhani?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-xl bg-bg border border-border/70 text-center hover:border-accent/40 transition-colors group"
                >
                  <div className="text-base sm:text-lg font-bold font-mono text-text group-hover:text-accent">
                    {repoCount}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-text-muted">Repo Publik</div>
                </a>
                <div className="p-2.5 sm:p-3 rounded-xl bg-bg border border-border/70 text-center">
                  <div className="text-base sm:text-lg font-bold font-mono text-emerald-400">
                    {totalLifetimeContributions}+
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-text-muted">Total Commits</div>
                </div>
                <a
                  href="https://github.com/arya-ramadhani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-xl bg-bg border border-border/70 text-center hover:border-accent/40 transition-colors group"
                >
                  <div className="text-base sm:text-lg font-bold font-mono text-accent flex items-center justify-center gap-1">
                    <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                    Aktif
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-text-muted">@arya-ramadhani</div>
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
