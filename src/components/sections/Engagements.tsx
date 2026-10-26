"use client";

import {
  ArrowUpRight,
  Award,
  BookOpen,
  CalendarDays,
  ExternalLink,
  GraduationCap,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

/**
 * Put the certificate images in /public/engagements/.
 * See the accompanying package for all four original certificate images.
 */
const CERTIFICATES = {
  tutor: "/engagements/project-integration-tutor-2026.png",
  backend: "/engagements/backend-workshop-2026.png",
  northsec: "/engagements/northsec-2026.png",
  itdayz: "/engagements/it-dayz-chatbot-2025.png",
} as const;

type Evidence = {
  label: string;
  url: string;
  type: "certificate" | "article";
};

type Activity = {
  title: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  icon: LucideIcon;
  evidence?: Evidence[];
};

const featured: Activity[] = [
  {
    title: "Project Integration Programme",
    role: "Development Tutor & Backend Workshop Facilitator",
    organization: "ENSA Tangier",
    period: "2026",
    location: "Tangier, Morocco",
    description:
      "Mentored first-year Computer Engineering students (GINF1) throughout their team project. Co-facilitated an Express.js workshop covering API routing, middleware and backend architecture.",
    skills: ["Mentorship", "Express.js", "Technical Training", "Teamwork"],
    icon: GraduationCap,
    evidence: [
      { label: "Tutoring certificate", url: CERTIFICATES.tutor, type: "certificate" },
      { label: "Workshop certificate", url: CERTIFICATES.backend, type: "certificate" },
      {
        label: "LinkedIn post",
        url: "https://fr.linkedin.com/posts/amina-el-haddad-476210341_ensatanger-g%C3%A9nieinformatique-mentorat-activity-7510247202225537024-dTHf",
        type: "article",
      },
    ],
  },
  {
    title: "NorthSec 2026 · Andalusian Cipher CTF",
    role: "Organizing Committee Member",
    organization: "CyberForce × EnSeCrowd · ENSA Tangier",
    period: "May 2026",
    location: "Tangier, Morocco",
    description:
      "Contributed to the organization of a cybersecurity event bringing students, industry professionals and CTF enthusiasts together for technical challenges and knowledge sharing.",
    skills: ["Event Organization", "Cybersecurity", "Collaboration"],
    icon: ShieldCheck,
    evidence: [
      { label: "Participation certificate", url: CERTIFICATES.northsec, type: "certificate" },
      { label: "Event website", url: "https://northsec.ma/", type: "article" },
    ],
  },
];

const community: Activity[] = [
  {
    title: "Ethical Hacking Days",
    role: "Organizing Team Member",
    organization: "ENSA Tangier",
    period: "Dec 2024",
    location: "Tangier, Morocco",
    description:
      "Supported the organization of a three-day cybersecurity event featuring expert talks, a Capture The Flag competition and a roundtable discussion.",
    skills: ["Event Coordination", "Cybersecurity", "Teamwork"],
    icon: ShieldCheck,
    evidence: [
      {
        label: "Event recap",
        url: "https://www.linkedin.com/posts/hind-soulaimani_ethicalhackingdays-cybersecurity-ethicalhacking-activity-7274046003102507008-HRIa",
        type: "article",
      },
    ],
  },
  {
    title: "Computer Science Club",
    role: "Activities Team Member",
    organization: "ENSA Tangier",
    period: "2025",
    location: "Tangier, Morocco",
    description:
      "Participated in the club's activities team, supporting student initiatives and engagement around computer science and technology.",
    skills: ["Student Engagement", "Teamwork", "Communication"],
    icon: Users,
  },
  {
    title: "Community Volunteering · Sidi Yakhlef",
    role: "Volunteer & Social Media Coordinator",
    organization: "Local community association",
    period: "2021 – 2024",
    location: "Tangier, Morocco",
    description:
      "Facilitated activities for children and managed social media communications to support community initiatives and local outreach.",
    skills: ["Volunteering", "Children's Activities", "Social Media"],
    icon: HeartHandshake,
  },
];

function DateLabel({ period }: { period: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#FAF8F5] px-3 py-1.5 text-[11px] font-semibold text-[#6b162c]">
      <CalendarDays size={12} />
      {period}
    </span>
  );
}

function SkillTags({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[11px] font-medium text-neutral-600"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

function EvidenceLinks({ evidence }: { evidence?: Evidence[] }) {
  if (!evidence?.length) return null;
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-neutral-100 pt-5">
      {evidence.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#6b162c] transition-colors hover:text-[#4b0718] hover:underline"
        >
          {link.type === "certificate" ? <Award size={14} /> : <ExternalLink size={13} />}
          {link.label}
          <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      ))}
    </div>
  );
}

function ActivityCard({ activity, prominent = false }: { activity: Activity; prominent?: boolean }) {
  const Icon = activity.icon;
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6b162c]/20 hover:shadow-lg md:p-7">
      <div className="mb-5 flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6b162c]/10 text-[#6b162c]">
          <Icon size={21} strokeWidth={1.9} />
        </span>
        <DateLabel period={activity.period} />
      </div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6b162c]">
        {activity.role}
      </p>
      <h3 className={`${prominent ? "text-xl" : "text-lg"} font-bold leading-snug tracking-tight text-neutral-900`}>
        {activity.title}
      </h3>
      <p className="mt-2 text-[13px] font-medium text-neutral-600">
        {activity.organization}
      </p>
      <p className="mt-1 flex items-center gap-1.5 text-xs text-neutral-400">
        <MapPin size={12} /> {activity.location}
      </p>
      <p className="mb-5 mt-4 flex-1 text-[13.5px] leading-[1.75] text-neutral-600">
        {activity.description}
      </p>
      <SkillTags skills={activity.skills} />
      {activity.evidence && (
        <div className="mt-5">
          <EvidenceLinks evidence={activity.evidence} />
        </div>
      )}
    </article>
  );
}

export function Engagements() {
  return (
    <section id="engagements" className="scroll-mt-24 bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <AnimatedSection delay={0.05}>
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6b162c]">
            <HeartHandshake size={16} /> Beyond the classroom
          </p>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-950 md:text-5xl">
                Leadership &amp; Community
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-neutral-600">
                Sharing knowledge, mentoring future engineers, organizing tech events
                and giving back to the community.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {[
                { icon: GraduationCap, label: "Mentorship" },
                { icon: Users, label: "Event Organization" },
                { icon: HeartHandshake, label: "Volunteering" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 rounded-full border border-[#6b162c]/15 bg-[#FAF8F5] px-3 py-1.5 text-[11px] font-medium text-[#6b162c]">
                  <Icon size={12} /> {label}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Highlight mentoring and the NorthSec organizing committee */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {featured.map((activity, index) => (
            <AnimatedSection key={activity.title} delay={0.10 + index * 0.07} className="h-full">
              <ActivityCard activity={activity} prominent />
            </AnimatedSection>
          ))}
        </div>

        {/* Other extracurricular responsibilities */}
        <AnimatedSection delay={0.12}>
          <div className="mb-5 mt-11 flex items-center gap-3">
            <span className="h-px flex-1 bg-neutral-200" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Community involvement
            </p>
            <span className="h-px flex-1 bg-neutral-200" />
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {community.map((activity, index) => (
            <AnimatedSection key={activity.title} delay={0.16 + index * 0.06} className="h-full">
              <ActivityCard activity={activity} />
            </AnimatedSection>
          ))}
        </div>

        {/* An attendee experience belongs to learning, not volunteering. */}
        <AnimatedSection delay={0.22}>
          <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-[#6b162c]/10 bg-[#FAF8F5] p-6 md:flex-row md:items-center md:justify-between md:p-7">
            <div className="flex min-w-0 items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6b162c]/10 text-[#6b162c]">
                <BookOpen size={20} />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#6b162c]">
                    Continuous Learning
                  </p>
                  <span className="text-xs text-neutral-400">· April 2025</span>
                </div>
                <h3 className="mt-1.5 text-lg font-bold text-neutral-900">
                  IT DAYZ · 10th Edition
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-neutral-600">
                  Attended the chatbot creation workshop and explored practical
                  foundations of conversational AI.
                </p>
              </div>
            </div>
            <a
              href={CERTIFICATES.itdayz}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-[#6b162c]/25 bg-white px-4 py-2.5 text-xs font-semibold text-[#6b162c] transition-colors hover:border-[#6b162c] hover:bg-[#6b162c] hover:text-white md:self-center"
            >
              <Award size={15} /> View workshop certificate <ArrowUpRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
