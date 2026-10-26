
"use client";

import {
  ArrowRight,
  Download,
  GraduationCap,
  MapPin,
} from "lucide-react";

import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const CV_URL = "/cv.pdf";
const DOWNLOAD_NAME = "CV AMINA EL HADDAD.pdf";

const academicJourney = [
  {
    period: "2026 – 2027",
    title: "Master 2 DOSI – Information Systems Development",
    institution: "Université de Bretagne Occidentale (UBO)",
    location: "Brest, France",
    description:
      "Dual-degree Master's programme with ENSA Tangier.",
  },
  {
    period: "2024 – 2027",
    title: "Computer Engineering – Data Science & Artificial Intelligence",
    institution: "ENSA Tangier",
    location: "Tangier, Morocco",
    description:
      "Engineering cycle specialising in Data Science and Artificial Intelligence.",
  },
  {
    period: "2022 – 2024",
    title: "Integrated Preparatory Cycle",
    institution: "ENSA Tangier",
    location: "Tangier, Morocco",
    description:
      "Two-year foundation in mathematics, physics, computer science and engineering.",
  },
  {
    period: "2022",
    title: "Baccalaureate – Mathematical Sciences A",
    institution: "Lycée Abi Bakr Errazi",
    location: "Tangier, Morocco",
    description: "French-language option.",
  },
];

const expertiseTags = [
  "Data Engineering & ETL",
  "Python & SQL",
  "AI Agents & LLMs",
  "Power BI & DAX",
  "Java & Spring Boot",
];

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="h-px bg-neutral-100" />

        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT: ABOUT ME */}
          <div className="border-b border-neutral-100 py-20 lg:border-b-0 lg:border-r lg:py-24 lg:pr-16">

            <AnimatedSection delay={0.05}>
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.15em] text-[#6b162c]">
                About Me / My Journey
              </p>
            </AnimatedSection>

{/* Titre toujours visible sur mobile */}
<h2 className="mb-7 max-w-[470px] text-[clamp(1.8rem,7vw,2.4rem)] font-bold leading-[1.18] tracking-tight text-neutral-950 lg:hidden">
  Building data-driven and intelligent systems
  that solve real problems.
</h2>

{/* Animation conservée sur ordinateur */}
<div className="hidden lg:block">
  <AnimatedText
    text="Building data-driven and intelligent systems that solve real problems."
    el="h2"
    effect="wipe"
    delay={0.12}
    className="mb-9 max-w-[470px] text-[2.4rem] font-bold leading-[1.18] tracking-tight text-neutral-950"
  />
</div>


            {/* BIOGRAPHY */}
            <div className="mb-8 max-w-[470px] space-y-4">

              <AnimatedSection delay={0.22}>
                <p className="text-[15px] leading-[1.75] text-neutral-600">
                  Computer Engineering student specialising in
                  Data Science &amp; AI at ENSA Tangier,
                  currently pursuing a dual-degree Master 2
                  DOSI at UBO Brest, France.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.30}>
                <p className="text-[15px] leading-[1.75] text-neutral-600">
                  At Tanger Med Zones, I built Power BI
                  dashboards and DataCleaner, a data cleaning
                  tool with a LangGraph AI agent and Pandas.
                  At OPmobility, I developed backend features
                  with Spring Boot.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.38}>
                <p className="text-[15px] leading-[1.75] text-neutral-600">
                  Seeking a six-month internship from April
                  2027, primarily in Data Engineering,
                  followed by AI and Software Engineering.
                </p>
              </AnimatedSection>

            </div>

            {/* EXPERTISE TAGS */}
            <AnimatedSection delay={0.45}>
              <div className="mb-10 flex flex-wrap gap-2">
                {expertiseTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-[#6b162c]/15 bg-[#FAF8F5] px-3 py-1.5 text-xs font-medium text-[#6b162c]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* ACTION BUTTONS */}
            <AnimatedSection
              delay={0.5}
              className="flex flex-wrap gap-3"
            >
             <a
  href="/CV%20AMINA%20EL%20HADDAD.pdf"
  download="CV AMINA EL HADDAD.pdf"
  className="inline-flex items-center gap-2 rounded-lg bg-[#6b162c] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#521122]"
>
  <Download size={14} />
  Download CV
</a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-5 py-2.5 text-[13px] font-semibold text-neutral-700 transition-colors hover:border-[#6b162c]/30 hover:text-[#6b162c]"
              >
                Get in touch
                <ArrowRight size={14} />
              </a>
            </AnimatedSection>
          </div>

          {/* RIGHT: ACADEMIC JOURNEY */}
<div className="py-12 sm:py-16 lg:py-24 lg:pl-16">
            <AnimatedSection delay={0.1}>
              <div className="mb-9 flex items-center justify-between gap-3 border-b-2 border-neutral-900 pb-3">
                <h2 className="flex items-center gap-2 text-sm font-semibold text-neutral-950">
                  <GraduationCap
                    size={19}
                    className="text-[#6b162c]"
                  />
                  Academic Journey
                </h2>

                <span className="text-xs text-neutral-400">
                  Morocco → France
                </span>
              </div>
            </AnimatedSection>

            {/* TIMELINE */}
            <div className="relative ml-1 border-l border-[#6b162c]/20 pl-7">
              {academicJourney.map((item, index) => (
                <AnimatedSection
                  key={`${item.period}-${index}`}
                  delay={0.16 + index * 0.08}
                >
                  <div className="group relative pb-8 last:pb-0">

                    {/* TIMELINE DOT */}
                    <div className="absolute -left-[35px] top-1.5 h-3 w-3 rounded-full border-[3px] border-white bg-[#6b162c] shadow-sm transition-transform duration-300 group-hover:scale-125" />

                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#6b162c]">
                      {item.period}
                    </p>

                    <h3 className="text-[16px] font-bold leading-snug text-neutral-900 transition-colors group-hover:text-[#6b162c]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-neutral-600">
                      {item.institution}
                    </p>

                    <p className="mt-1 flex items-center gap-1.5 text-xs text-neutral-400">
                      <MapPin size={12} />
                      {item.location}
                    </p>

                    <p className="mt-2 max-w-[420px] text-[13px] leading-relaxed text-neutral-500">
                      {item.description}
                    </p>

                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </div>

        <div className="h-px bg-neutral-100" />
      </div>
    </section>
  );
}
