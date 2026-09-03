"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { skillCategories } from "@/data";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TechTile } from "@/components/ui/TechIcon"; // ← TechTile not TechIcon

import type { SkillItem, SkillCategory } from "@/types";

const categoryMeta: Record<
  string,
  { desc: string }
> = {
  Frontend: {
    desc: "UI, Design Systems & Interaction",
  },
  Backend: {
    desc: "APIs, Databases & Business Logic",
  },
  "DevOps & Cloud": {
    desc: "Infrastructure, CI/CD & Deployment",
  },
  "AI & Data": {
    desc: "Machine Learning & Analytics",
  },
};

// ── Skill Card ─────────────────────────────────────────────────────────────
function SkillCard({
  item,
  delay,
  isInView,
}: {
  item: SkillItem;
  delay: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      whileHover={{
        y: -7,
        scale: 1.05,
        boxShadow: "0 22px 44px rgba(107,22,44,0.13)",
      }}
      transition={{
        duration: 0.4,
        delay,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
        group relative flex flex-col items-center
        bg-white/40 backdrop-blur-md rounded-3xl p-5 pb-6
        border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)]
        cursor-default w-[130px] min-h-[160px]
        hover:border-white/60 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]
        transition-all duration-300
      "
    >
      {/* 
        TechTile — colored square with white icon inside.
        Color comes from brandTileColor[item.icon] in TechIcon.tsx.
        No useColor prop needed or accepted.
      */}
      <TechTile
        icon={item.icon}
        size={28}
        tileSize="w-[68px] h-[68px]"
        radius="rounded-2xl"
      />

      {/* Label */}
      <span className="
        mt-4 text-[13px] font-semibold
        text-neutral-800 text-center leading-tight
        group-hover:text-neutral-950
        transition-colors duration-200
        px-1
      ">
        {item.n}
      </span>

      {/* Certified badge */}
      {item.certified && (
        <div className="
          absolute -bottom-3.5 left-1/2 -translate-x-1/2
          bg-neutral-900 text-white
          text-[9px] font-bold tracking-[0.12em] uppercase
          px-3 py-1 rounded-full whitespace-nowrap
          shadow-md border border-neutral-700
        ">
          Certified
        </div>
      )}
    </motion.div>
  );
}

// ── Main Section ───────────────────────────────────────────────────────────
export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative bg-[#FAF8F5] py-28 md:py-36 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="
        pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2
        w-[700px] h-[500px] rounded-full
        opacity-20 blur-[130px] bg-[#6b162c]
      " />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">

        {/* ── HEADER ─────────────────────────────────────────────────── */}
        <div className="mb-20 max-w-3xl">
          <AnimatedSection delay={0.05} className="flex items-center gap-2.5 mb-5">
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
            className="
              text-4xl md:text-6xl font-semibold
              tracking-tight text-neutral-900
              leading-tight block
            "
          />
          <AnimatedText
            text="built across 5 years."
            el="span"
            effect="fade"
            delay={0.3}
            className="
              text-3xl md:text-5xl font-serif italic
              font-normal text-[#6b162c] mt-2 block
            "
          />
        </div>

        {/* ── CATEGORIES ─────────────────────────────────────────────── */}
        <div className="flex flex-col gap-20">
          {(skillCategories as SkillCategory[]).map((category, catIdx) => {
            const meta = categoryMeta[category.cat];

            return (
              <div key={category.cat}>

                {/* Category header */}
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                  className="mb-8 pb-3 border-b border-neutral-200/80"
                >
                  <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
                    {category.cat}
                    {meta?.desc && (
                      <span className="text-neutral-500 font-normal ml-2">
                        : {meta.desc}
                      </span>
                    )}
                  </h3>
                </motion.div>

                {/* Skill cards */}
                <div className="flex flex-wrap gap-6 pb-4">
                  {category.items.map((item, i) => (
                    <SkillCard
                      key={item.n}
                      item={item}
                      delay={catIdx * 0.07 + i * 0.05}
                      isInView={isInView}
                    />
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