"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import {
  Palette,
  Server,
  Cloud,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";
import { skillCategories } from "@/data";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TechIcon } from "@/components/ui/TechIcon";

// Category metadata — Lucide icons only, no emojis
const categoryMeta: Record<
  string,
  { Icon: LucideIcon; desc: string; accentFrom: string; accentTo: string }
> = {
  "Frontend": {
    Icon: Palette,
    desc: "UI, Design Systems & Interaction",
    accentFrom: "from-sky-500",
    accentTo: "to-violet-500",
  },
  "Backend": {
    Icon: Server,
    desc: "APIs, Databases & Business Logic",
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-600",
  },
  "DevOps & Cloud": {
    Icon: Cloud,
    desc: "Infrastructure, CI/CD & Deployment",
    accentFrom: "from-orange-400",
    accentTo: "to-amber-500",
  },
  "AI & Data": {
    Icon: BrainCircuit,
    desc: "Machine Learning & Analytics",
    accentFrom: "from-[#6b162c]",
    accentTo: "to-rose-700",
  },
};

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative bg-[#FAF8F5] py-28 md:py-36 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20 blur-[130px] bg-[#6b162c]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* ── HEADER ── */}
        <div className="mb-20 max-w-3xl">
          <AnimatedSection delay={0.05} className="flex items-center gap-2 mb-5">
            <div className="w-1 h-4 rounded-full bg-[#6b162c]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6b162c]">
              Technical Skills
            </span>
          </AnimatedSection>

          <AnimatedText
            text="A full-spectrum toolkit"
            el="h2"
            effect="wipe"
            delay={0.15}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight block"
          />
          <AnimatedText
            text="built across 5 years."
            el="span"
            effect="fade"
            delay={0.3}
            className="text-3xl md:text-5xl font-serif italic font-normal text-[#6b162c] mt-2 block"
          />
        </div>

        {/* ── SKILL CATEGORIES ── */}
        <div className="flex flex-col gap-16">
          {skillCategories.map((category, catIdx) => {
            const meta = categoryMeta[category.cat];
            const CategoryIcon = meta?.Icon ?? Server;

            return (
              <div key={category.cat}>

                {/* Category Header Row */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                  className="flex items-center gap-5 mb-8"
                >
                  {/* Icon Block */}
                  <div
                    className={`
                      w-11 h-11 rounded-xl flex items-center justify-center shrink-0
                      bg-gradient-to-br ${meta?.accentFrom ?? "from-neutral-400"} ${meta?.accentTo ?? "to-neutral-600"}
                      shadow-sm
                    `}
                  >
                    <CategoryIcon size={20} className="text-white" strokeWidth={1.75} />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-neutral-900 tracking-tight leading-none">
                      {category.cat}
                    </h3>
                    {meta?.desc && (
                      <p className="text-xs text-neutral-500 font-medium mt-1">
                        {meta.desc}
                      </p>
                    )}
                  </div>

                  {/* Separator line */}
                  <div className="flex-1 h-px bg-gradient-to-r from-neutral-200 to-transparent ml-2" />

                  {/* Skill count badge */}
                  <span className="shrink-0 text-xs font-semibold text-neutral-400 bg-white border border-neutral-200/80 px-3 py-1 rounded-full">
                    {category.items.length} skills
                  </span>
                </motion.div>

                {/* ── SKILL PILLS ── */}
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item, i) => (
                    <motion.div
                      key={item.n}
                      initial={{ opacity: 0, y: 16 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      whileHover={{
                        y: -5,
                        scale: 1.06,
                        boxShadow: "0 14px 30px rgba(107, 22, 44, 0.13)",
                      }}
                      transition={{
                        duration: 0.35,
                        delay: catIdx * 0.07 + i * 0.04,
                        type: "spring",
                        stiffness: 320,
                        damping: 22,
                      }}
                      className="group flex items-center gap-2.5 bg-white rounded-2xl px-4 py-3 border border-neutral-200/60 shadow-sm cursor-default hover:border-[#6b162c]/25 transition-colors duration-200"
                    >
                      {/* Real tech icon */}
                      <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-neutral-50 border border-neutral-100/80 group-hover:bg-[#6b162c]/6 group-hover:border-[#6b162c]/15 transition-all duration-300">
                        <TechIcon
                          icon={item.icon}
                          size={17}
                          useColor={false}
                          className="text-neutral-500 group-hover:text-[#6b162c] transition-colors duration-300"
                        />
                      </div>

                      {/* Label */}
                      <span className="text-sm font-semibold text-neutral-700 group-hover:text-neutral-900 transition-colors duration-200 whitespace-nowrap">
                        {item.n}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}