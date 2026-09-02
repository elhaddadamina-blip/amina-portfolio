"use client";

import { Brain, Code2, BarChart2, BookOpen, ArrowRight, Download } from "lucide-react";
import { siteConfig, traits, stats } from "@/data";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const iconMap = { Brain, Code2, BarChart2, BookOpen };

export function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Top border ─────────────────────────────────────────────── */}
        <div className="h-px bg-neutral-100" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

          {/* ══ LEFT ══════════════════════════════════════════════════ */}
          <div className="py-20 lg:py-28 lg:pr-20 border-b lg:border-b-0 lg:border-r border-neutral-100">

            {/* Overline — understated, not all-caps tracked */}
            <AnimatedSection delay={0.05}>
              <p className="text-[13px] text-neutral-400 mb-10 font-medium">
                Amina EL HADDAD — Engineering student
              </p>
            </AnimatedSection>

            {/* Headline — declaration, not tagline */}
            <AnimatedText
              text="I turn complex systems into things people actually use."
              el="h2"
              effect="wipe"
              delay={0.12}
              className="text-[2rem] md:text-[2.4rem] font-bold text-neutral-950 leading-[1.18] tracking-tight mb-10 max-w-[440px]"
            />

            {/* Bio */}
            <div className="space-y-5 mb-12 max-w-[420px]">
              {siteConfig.bio.map((paragraph, i) => (
                <AnimatedSection delay={0.28 + i * 0.08} key={i}>
                  <p className="text-[15px] text-neutral-500 leading-[1.85]">
                    {paragraph}
                  </p>
                </AnimatedSection>
              ))}
            </div>

            {/* ── Stats — editorial, baseline-aligned ── */}
            <AnimatedSection delay={0.5}>
              <div className="flex items-end gap-10 mb-12 pb-12 border-b border-neutral-100">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-[2.2rem] font-bold text-neutral-950 leading-none tracking-tight tabular-nums">
                      {s.val}
                    </div>
                    <div className="text-[12px] text-neutral-400 mt-1.5 leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* CTAs */}
            <AnimatedSection delay={0.6} className="flex flex-wrap gap-3">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 bg-[#6b162c] text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#521122] transition-colors duration-200"
              >
                <Download size={14} />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-neutral-600 px-5 py-2.5 rounded-lg border border-neutral-200 hover:border-neutral-400 hover:text-neutral-900 transition-colors duration-200"
              >
                Get in touch
                <ArrowRight size={14} />
              </a>
            </AnimatedSection>
          </div>

          {/* ══ RIGHT ═════════════════════════════════════════════════ */}
          <div className="py-20 lg:py-28 lg:pl-20">

            {/* Index header */}
            <AnimatedSection delay={0.1}>
              <div className="flex items-center justify-between mb-2 pb-3 border-b-2 border-neutral-950">
                <span className="text-[11px] font-semibold text-neutral-950 tracking-wide">
                  Discipline
                </span>
                <span className="text-[11px] font-semibold text-neutral-950 tracking-wide">
                  Stack
                </span>
              </div>
            </AnimatedSection>

            {/* Discipline rows — editorial index style */}
            {traits.map((t, i) => {
              const Icon = iconMap[t.icon as keyof typeof iconMap];
              return (
                <AnimatedSection key={t.label} delay={0.18 + i * 0.1}>
                  <div className="group flex items-start gap-5 py-6 border-b border-neutral-100 hover:border-neutral-300 transition-colors duration-200 cursor-default">

                    {/* Icon */}
                    <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#6b162c]/8 transition-colors duration-200">
                      <Icon size={16} className="text-[#6b162c]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-4 mb-1.5">
                        <p className="text-[15px] font-semibold text-neutral-900 leading-none">
                          {t.label}
                        </p>
                        {/* Row number */}
                        <span className="text-[11px] text-neutral-300 tabular-nums shrink-0">
                          0{i + 1}
                        </span>
                      </div>
                      <p className="text-[13px] text-neutral-500 leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}

            {/* Tags — bottom of right col */}
            <AnimatedSection delay={0.65} className="flex flex-wrap gap-2 pt-8">
              {siteConfig.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] text-neutral-500 font-medium bg-neutral-50 border border-neutral-200 px-3 py-1.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </AnimatedSection>

          </div>
        </div>

        {/* ── Bottom border ───────────────────────────────────────────── */}
        <div className="h-px bg-neutral-100" />

      </div>
    </section>
  );
}
