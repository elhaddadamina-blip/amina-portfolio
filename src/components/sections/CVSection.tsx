
"use client";

import {
  Award,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  Terminal,
  type LucideIcon,
} from "lucide-react";

import { palette as P } from "@/lib/palette";
import { cvHighlights } from "@/data";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

// PDF configuration
const CV_URL = "/CV%20AMINA%20EL%20HADDAD.pdf";
const DOWNLOAD_NAME = "CV AMINA EL HADDAD.pdf";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Code2,
  Terminal,
  Award,
};

export function CVSection() {
  return (
    <section
      id="cv"
      className="relative isolate scroll-mt-24 overflow-hidden py-20 md:py-28"
      style={{ background: P.burgundy }}
    >
      {/* BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-28 top-1/2
          h-[420px] w-[420px]
          -translate-y-1/2
          rounded-full
          border-[60px] border-white/[0.035]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT: INTRODUCTION */}
          <div>
            <AnimatedSection delay={0.05}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
                Curriculum Vitae
              </p>
            </AnimatedSection>

            <AnimatedText
              text="A closer look at my journey."
              el="h2"
              effect="wipe"
              delay={0.12}
              className="
                max-w-xl text-3xl font-bold
                leading-tight tracking-tight
                text-white md:text-5xl
              "
            />

            <AnimatedSection delay={0.22}>
              <p className="mt-5 max-w-lg text-[15px] leading-[1.8] text-white/75">
                Explore my education, technical skills,
                professional experience and selected projects.
                View my Data Engineering résumé online or
                download the PDF for later.
              </p>

              {/* CV BUTTONS */}
              <div className="mt-8 flex flex-wrap gap-3">

                {/* VIEW CV */}
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View CV in a new tab"
                  className="
                    inline-flex items-center gap-2
                    rounded-lg bg-[#FAF8F5]
                    px-5 py-3
                    text-sm font-semibold text-[#6b162c]
                    shadow-sm transition-all duration-200
                    hover:-translate-y-0.5
                    hover:bg-white hover:shadow-lg
                  "
                >
                  <ExternalLink size={16} />
                  View CV
                </a>

                {/* DOWNLOAD CV */}
                <a
                  href={CV_URL}
                  download={DOWNLOAD_NAME}
                  aria-label="Download CV as PDF"
                  className="
                    inline-flex items-center gap-2
                    rounded-lg border border-white/40
                    px-5 py-3
                    text-sm font-semibold text-white
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:border-white hover:bg-white/10
                  "
                >
                  <Download size={16} />
                  Download PDF
                </a>

              </div>

              {/* CONTACT LINK */}
              <a
                href="#contact"
                className="
                  mt-6 inline-flex items-center gap-2
                  text-sm font-medium text-white/75
                  transition-colors
                  hover:text-white hover:underline
                "
              >
                <Mail size={15} />
                Prefer to get in touch?
              </a>
            </AnimatedSection>
          </div>

          {/* RIGHT: CV HIGHLIGHTS */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cvHighlights.map((item, index) => {
              const Icon = iconMap[item.icon] ?? Code2;

              return (
                <AnimatedSection
                  key={`${item.label}-${index}`}
                  delay={0.18 + index * 0.08}
                  className="h-full"
                >
                  <div
                    className="
                      flex h-full flex-col
                      rounded-2xl
                      border border-white/15
                      bg-white/[0.07]
                      p-6
                      transition-colors duration-200
                      hover:bg-white/[0.12]
                    "
                  >
                    {/* ICON */}
                    <Icon
                      size={22}
                      className="mb-5 text-white/80"
                    />

                    {/* LABEL */}
                    <p
                      className="
                        text-[11px] font-semibold
                        uppercase tracking-[0.13em]
                        text-white/60
                      "
                    >
                      {item.label}
                    </p>

                    {/* VALUE */}
                    <p
                      className="
                        mt-2 text-[15px] font-bold
                        leading-snug text-white
                      "
                    >
                      {item.val}
                    </p>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-2 text-xs
                        leading-relaxed text-white/65
                      "
                    >
                      {item.sub}
                    </p>
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
