"use client";

import { MapPin, BarChart2, Code2, Brain } from "lucide-react";
import { experience } from "@/data";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const iconMap = { BarChart2, Code2, Brain };

export function Experience() {
  return (
    <section id="experience" className="relative py-12 md:py-16 bg-[#FAF8F5] text-neutral-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-20">
          <AnimatedText
            text="Experience"
            effect="fade"
            className="text-sm font-semibold tracking-widest uppercase text-[#6b162c] mb-4"
          />
          <AnimatedText
            text="Real-world impact in three internships"
            el="h2"
            effect="wipe"
            delay={0.2}
            className="text-4xl md:text-5xl font-serif italic text-neutral-950 font-normal tracking-tight"
          />
        </div>

        {/* TIMELINE */}
        <div className="relative">
          <div className="absolute left-[29px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-[#6b162c] via-[#6b162c]/20 to-transparent" />

          <div className="flex flex-col gap-10 md:gap-14">
            {experience.map((exp, i) => {
              const Icon = iconMap[exp.icon as keyof typeof iconMap];
              const isFirst = i === 0;

              return (
                <AnimatedSection
                  key={exp.title}
                  delay={0.2 + i * 0.15}
                  className="relative flex gap-6 md:gap-10 items-start group"
                >
                  {/* Icon Node */}
                  <div
                    className={`relative z-10 flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border-4 border-[#FAF8F5] transition-transform duration-500 group-hover:scale-110 ${
                      isFirst
                        ? "bg-[#6b162c] shadow-[0_0_20px_rgba(107,22,44,0.4)]"
                        : "bg-white shadow-sm border-neutral-200"
                    }`}
                  >
                    <Icon size={24} className={isFirst ? "text-white" : "text-[#6b162c]"} />
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-black/[0.04] shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-neutral-900 tracking-tight">
                          {exp.title}
                        </h3>
                        <div className="text-[#6b162c] font-medium mt-1">{exp.co}</div>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#6b162c]/10 text-[#6b162c] text-xs font-semibold tracking-wide">
                          {exp.period}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                          <MapPin size={14} />
                          {exp.loc}
                        </div>
                      </div>
                    </div>

                    <p className="text-neutral-600 leading-relaxed text-sm md:text-base mb-6">
                      {exp.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-100 rounded-lg border border-neutral-200/60 hover:border-[#6b162c]/30 hover:bg-[#6b162c]/5 transition-colors"
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