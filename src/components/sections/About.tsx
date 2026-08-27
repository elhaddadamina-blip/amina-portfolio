"use client";

import { Brain, Code2, BarChart2, BookOpen } from "lucide-react";
import { siteConfig, traits } from "@/data";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const iconMap = { Brain, Code2, BarChart2, BookOpen };

export function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT: Text */}
          <div>
            <AnimatedText
              text="About Me"
              effect="fade"
              className="text-sm font-semibold tracking-widest uppercase text-[#6b162c] mb-4 block"
            />
            <AnimatedText
              text="Turning data into intelligent solutions"
              el="h2"
              effect="wipe"
              delay={0.2}
              className="text-4xl md:text-5xl font-serif italic font-normal text-neutral-950 tracking-tight leading-tight mb-8"
            />
            <div className="space-y-4">
              {siteConfig.bio.map((paragraph, i) => (
                <AnimatedSection delay={0.4 + i * 0.1} key={i}>
                  <p className="text-neutral-500 leading-relaxed text-base">
                    {paragraph.includes("ENSA Tangier") ? (
                      <>
                        {paragraph.split("ENSA Tangier")[0]}
                        <strong className="text-neutral-900 font-semibold">ENSA Tangier</strong>
                        {paragraph.split("ENSA Tangier")[1]}
                      </>
                    ) : paragraph.includes("Master's DOSI") ? (
                      <>
                        {paragraph.split("Master's DOSI programme in France")[0]}
                        <strong className="text-neutral-900 font-semibold">Master&apos;s DOSI programme in France</strong>
                        {paragraph.split("Master's DOSI programme in France")[1]}
                      </>
                    ) : paragraph}
                  </p>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={0.6} className="flex flex-wrap gap-2 mt-8">
              {siteConfig.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 bg-[#FAF8F5] rounded-full px-4 py-2 text-sm font-medium text-neutral-700 border border-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </AnimatedSection>
          </div>

          {/* RIGHT: Trait Cards */}
          <div className="grid grid-cols-2 gap-4">
            {traits.map((t, i) => {
              const Icon = iconMap[t.icon as keyof typeof iconMap];
              return (
                <AnimatedSection
                  key={t.label}
                  delay={0.2 + i * 0.15}
                  className="group bg-[#FAF8F5] rounded-2xl p-6 border border-neutral-200/60 hover:shadow-lg hover:border-[#6b162c]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 bg-[#6b162c]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#6b162c]/20 transition-colors duration-300">
                    <Icon size={20} className="text-[#6b162c]" />
                  </div>
                  <p className="text-sm font-bold text-neutral-900 mb-1">{t.label}</p>
                  <p className="text-xs text-neutral-500 leading-relaxed">{t.desc}</p>
                </AnimatedSection>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
