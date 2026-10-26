
"use client";

import {
  Award,
  ExternalLink,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const linkedinCertifications =
  "https://www.linkedin.com/in/amina-el-haddad-476210341/details/certifications/";

const certificates = [
  {
    title:
      "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "October 2025",
    expires: "October 2027",
    kind: "Professional certification",
    skills: ["Generative AI", "LLMs", "OCI"],
    featured: true,
    credentialUrl:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=1EFF88B4594BFDA278FBB96A32BF27E30AF6164B0CECCBC4ACCDCBBD72BF3565",
  },
  {
    title:
      "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "October 2025",
    expires: "October 2027",
    kind: "Associate certification",
    skills: ["Artificial Intelligence", "Machine Learning", "OCI"],
    featured: true,
    credentialUrl:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=BDCC4172BFD629DABA9D84F531D8425C9A72DDDADF8813523FE5B2265437BFC8",
  },
  {
    title: "Analyzing Data with Power BI",
    issuer: "Analytics Vidhya",
    date: "March 2026",
    expires: null,
    kind: "Course certificate",
    skills: ["Power BI", "Analytics", "Visualization"],
    featured: false,
    credentialUrl:
      "https://courses.analyticsvidhya.com/certificates/77vmm7drh0",
  },
  {
    title: "Preparing for Your Associate Cloud Engineer Journey",
    issuer: "Coursera · Google Cloud",
    date: "March 2026",
    expires: null,
    kind: "Course certificate — not ACE certification",
    skills: ["Google Cloud", "Cloud Fundamentals"],
    featured: false,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/MK3JELT3222L",
  },
];

export function Certifications() {
  return (
  <section
  id="certifications"
  className="scroll-mt-24 bg-[#FAF8F5] pt-20 pb-10 md:pt-28 md:pb-12"
>
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <AnimatedSection>
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6b162c]">
                <Award size={16} />
                Credentials
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-neutral-950 md:text-5xl">
                Certifications & learning
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600">
                Professional certifications and completed courses in AI,
                cloud computing and data analytics.
              </p>
            </div>

            <a
              href={linkedinCertifications}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#6b162c] hover:underline"
            >
              View on LinkedIn
              <ExternalLink size={15} />
            </a>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <AnimatedSection
              key={certificate.title}
              delay={0.08 + index * 0.06}
            >
              <article className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6b162c]/10 text-[#6b162c]">
                    {certificate.featured ? (
                      <ShieldCheck size={23} />
                    ) : (
                      <GraduationCap size={23} />
                    )}
                  </div>

                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-medium text-neutral-600">
                    {certificate.kind}
                  </span>
                </div>

                <h3 className="mb-2 text-[17px] font-bold leading-snug text-neutral-900">
                  {certificate.title}
                </h3>

                <p className="text-sm text-neutral-600">
                  {certificate.issuer} · {certificate.date}
                </p>

                {certificate.expires && (
                  <p className="mt-1 text-xs text-neutral-400">
                    Valid until {certificate.expires}
                  </p>
                )}

                <div className="mb-6 mt-5 flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs text-neutral-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View credential: ${certificate.title}`}
                  className="group mt-auto inline-flex items-center gap-2 self-start text-sm font-semibold text-[#6b162c] transition-colors duration-200 hover:text-[#4b0718]"
                >
                  View Credential
                  <ExternalLink
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
