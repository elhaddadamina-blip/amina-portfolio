"use client";

import { GraduationCap, BookOpen, MapPin, CalendarDays } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedText } from "@/components/ui/AnimatedText";

const studies = [
  {
    period: "2026 – 2027",
    title: "Master 2 DOSI",
    subtitle: "Information Systems Development",
    school: "Université de Bretagne Occidentale (UBO)",
    place: "Brest, France",
    description: "Dual-degree programme with ENSA Tangier, focused on information systems development.",
    icon: GraduationCap,
    highlight: true,
  },
  {
    period: "2024 – 2027",
    title: "Computer Engineering",
    subtitle: "Data Science & Artificial Intelligence",
    school: "ENSA Tangier",
    place: "Tangier, Morocco",
    description: "Engineering cycle in Computer Science, with a Data Science and Artificial Intelligence specialisation.",
    icon: GraduationCap,
    highlight: true,
  },
  {
    period: "2022 – 2024",
    title: "Integrated Preparatory Cycle",
    subtitle: "Mathematics · Physics · Engineering Fundamentals",
    school: "ENSA Tangier",
    place: "Tangier, Morocco",
    description: "Two-year integrated preparatory cycle before entering the Computer Engineering programme.",
    icon: BookOpen,
    highlight: false,
  },
  {
    period: "2022",
    title: "Scientific Baccalaureate",
    subtitle: "Mathematical Sciences A · French Option",
    school: "Lycée Abi Bakr Errazi",
    place: "Tangier, Morocco",
    description: "Baccalaureate in Mathematical Sciences A, French-language option.",
    icon: BookOpen,
    highlight: false,
  },
];

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 bg-[#FAF8F5] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <AnimatedSection delay={0.05}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b162c]">My academic background</p>
        </AnimatedSection>
        <AnimatedText
          text="Education"
          el="h2"
          effect="wipe"
          className="mb-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl"
        />
        <AnimatedSection delay={0.12}>
          <p className="mb-12 max-w-2xl text-[15px] leading-relaxed text-neutral-600">
            From mathematical sciences to Computer Engineering in Tangier, followed by a dual-degree Master's programme in France.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {studies.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={`${item.period}-${item.title}`} delay={0.14 + index * 0.08} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#6b162c]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className={`relative flex items-start gap-4 px-7 py-7 ${item.highlight ? "bg-[#6b162c] text-white" : "bg-[#211f31] text-white"}`}>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <Icon size={23} />
                    </div>
                    <div className="min-w-0">
                      <span className="mb-2 flex items-center gap-1.5 text-xs font-medium text-white/75"><CalendarDays size={13} />{item.period}</span>
                      <h3 className="text-xl font-bold leading-snug">{item.title}</h3>
                      <p className="mt-1 text-sm text-white/85">{item.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 px-7 py-6">
                    <p className="font-semibold text-neutral-900">{item.school}</p>
                    <p className="flex items-center gap-1.5 text-xs text-neutral-500"><MapPin size={13} />{item.place}</p>
                    <p className="text-[14px] leading-relaxed text-neutral-600">{item.description}</p>
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
        <AnimatedSection delay={0.5}>
          <p className="mt-8 text-sm text-neutral-500">
            The 2024–2027 engineering programme and the 2026–2027 Master's programme overlap as part of the dual-degree pathway.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
