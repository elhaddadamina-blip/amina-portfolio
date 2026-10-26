
"use client";

import { MapPin, BarChart2, Code2, Brain } from "lucide-react";
import { experience } from "@/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";

const iconMap = { BarChart2, Code2, Brain };

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#FAF8F5] pt-8 pb-14 text-neutral-900 md:pt-10 md:pb-20 scroll-mt-20"
    >
      <div className="pointer-events-none hidden md:block">
        <ParticlesBackground />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 md:px-12">

        {/* SECTION HEADER */}
        <div className="mb-8 text-center md:mb-12">
          <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6b162c]">
            Professional Journey
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-950 md:text-4xl">
            Experience
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base md:text-lg">
            Real-world experience in Data, AI & Software Development
          </p>

          <div className="mx-auto mt-5 h-[2px] w-12 rounded-full bg-[#6b162c]" />
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* Line visible only on desktop */}
          <div className="absolute bottom-8 left-[27px] top-7 hidden w-[2px] bg-gradient-to-b from-[#6b162c] via-[#6b162c]/30 to-transparent md:block" />

          <div className="flex flex-col gap-5 md:gap-10">
            {experience.map((exp, i) => {
              const Icon =
                iconMap[exp.icon as keyof typeof iconMap] ?? Code2;

              const missions = Array.isArray(exp.desc)
                ? exp.desc
                : [exp.desc];

              return (
                <AnimatedSection
                  key={`${exp.co}-${i}`}
                  delay={0.1 + i * 0.1}
                  className="relative flex w-full items-start gap-0 md:gap-6"
                >
                  {/* Desktop timeline icon */}
                  <div className="relative z-10 hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-[#FAF8F5] bg-[#6b162c] text-white shadow-md md:flex">
                    <Icon size={22} />
                  </div>

                  {/* Card */}
                  <article className="min-w-0 w-full flex-1 rounded-2xl border border-[#6b162c]/10 bg-white/95 p-4 shadow-[0_4px_24px_rgba(40,20,25,0.05)] sm:p-6 md:rounded-3xl md:p-8">

                    {/* Mobile compact icon */}
                    <div className="mb-4 flex items-center gap-2.5 md:hidden">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#6b162c] text-white">
                        <Icon size={18} />
                      </span>

                      <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6b162c]">
                        Experience {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Heading */}
                    <div className="mb-4 flex flex-col gap-3 md:mb-6 md:flex-row md:items-start md:justify-between md:gap-4">
                      <div className="min-w-0">
                        <h3 className="text-base font-bold leading-snug tracking-tight text-neutral-900 sm:text-lg md:text-xl">
                          {exp.title}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-[#6b162c] md:text-base">
                          {exp.co}
                        </p>
                      </div>

                      <div className="flex shrink-0 flex-wrap items-center gap-2 md:flex-col md:items-end">
                        <span className="rounded-full bg-[#6b162c]/10 px-3 py-1.5 text-[11px] font-semibold text-[#6b162c] sm:text-xs">
                          {exp.period}
                        </span>

                        <span className="flex items-center gap-1 text-xs text-neutral-500">
                          <MapPin size={13} />
                          {exp.loc}
                        </span>
                      </div>
                    </div>

                    {/* Missions */}
                    <ul className="mb-5 space-y-2.5 md:mb-6 md:space-y-3">
                      {missions.map((mission, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2.5 text-[13px] leading-[1.65] text-neutral-600 sm:text-sm md:text-[15px]"
                        >
                          <span
                            className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#6b162c]"
                            aria-hidden="true"
                          />
                          <span className="min-w-0">
                            {mission}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5 border-t border-neutral-100 pt-4 md:gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-neutral-200/70 bg-neutral-50 px-2.5 py-1 text-[11px] font-medium text-neutral-600 md:text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
