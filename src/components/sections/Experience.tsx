
"use client";

import { MapPin, BarChart2, Code2, Brain } from "lucide-react";
import { experience } from "@/data";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";

const iconMap = { BarChart2, Code2, Brain };

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-12 md:py-16 bg-[#FAF8F5] text-neutral-900 overflow-hidden"
    >
      {/* Background particles */}
      <ParticlesBackground />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <AnimatedText
            text="Experience"
            el="h2"
            effect="fade"
            className="
              text-3xl
              md:text-4xl
              lg:text-[42px]
              font-semibold
              tracking-tight
              text-neutral-950
              mb-4
            "
          />

          <AnimatedText
            text="Real-world experience in Data, AI & Software Development"
            el="p"
            effect="wipe"
            delay={0.2}
            className="
              text-base
              md:text-lg
              lg:text-xl
              text-neutral-500
              font-normal
              leading-relaxed
              max-w-2xl
            "
          />

          <div className="mt-5 h-[2px] w-12 bg-[#6b162c] rounded-full" />
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-[29px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-[#6b162c] via-[#6b162c]/20 to-transparent" />

          <div className="flex flex-col gap-10 md:gap-14">
            {experience.map((exp, i) => {
              const Icon =
                iconMap[exp.icon as keyof typeof iconMap] ?? Code2;

              const isFirst = i === 0;

              const missions = Array.isArray(exp.desc)
                ? exp.desc
                : [exp.desc];

              return (
                <AnimatedSection
                  key={`${exp.co}-${i}`}
                  delay={0.2 + i * 0.15}
                  className="relative flex gap-4 md:gap-10 items-start group"
                >
                  {/* TIMELINE ICON */}
                  <div
                    className={`
                      relative z-10
                      flex h-[60px] w-[60px]
                      shrink-0 items-center justify-center
                      rounded-full border-4
                      transition-transform duration-500
                      group-hover:scale-110
                      ${
                        isFirst
                          ? "border-[#FAF8F5] bg-[#6b162c] shadow-[0_0_20px_rgba(107,22,44,0.4)]"
                          : "border-neutral-200 bg-white shadow-sm"
                      }
                    `}
                  >
                    <Icon
                      size={24}
                      className={
                        isFirst ? "text-white" : "text-[#6b162c]"
                      }
                    />
                  </div>

                  {/* EXPERIENCE CARD */}
                  <div
                    className="
                      flex-1 min-w-0
                      bg-white/70 backdrop-blur-md
                      rounded-3xl p-5 md:p-8
                      border border-black/[0.04]
                      shadow-sm
                      hover:shadow-xl hover:bg-white
                      transition-all duration-300
                      group-hover:-translate-y-1
                    "
                  >
                    {/* Title, company and date */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">

                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-neutral-900 tracking-tight leading-snug">
                          {exp.title}
                        </h3>

                        <div className="text-[#6b162c] font-medium mt-1">
                          {exp.co}
                        </div>
                      </div>

                      <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#6b162c]/10 text-[#6b162c] text-xs font-semibold tracking-wide whitespace-nowrap">
                          {exp.period}
                        </span>

                        <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                          <MapPin size={14} />
                          <span>{exp.loc}</span>
                        </div>
                      </div>
                    </div>

                    {/* MISSIONS */}
                    <ul className="space-y-3 mb-6">
                      {missions.map((mission, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-sm md:text-base text-neutral-600 leading-relaxed"
                        >
                          <span
                            className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#6b162c]"
                            aria-hidden="true"
                          />

                          <span>{mission}</span>
                        </li>
                      ))}
                    </ul>

                    {/* TECHNOLOGY TAGS */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            px-3 py-1
                            text-xs font-medium
                            text-neutral-700
                            bg-neutral-100 rounded-lg
                            border border-neutral-200/60
                            hover:border-[#6b162c]/30
                            hover:bg-[#6b162c]/5
                            transition-colors
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
