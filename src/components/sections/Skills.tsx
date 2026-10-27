
"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";

import { skillCategories } from "@/data";
import { TechTile } from "@/components/ui/TechIcon";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

import type { SkillItem, SkillCategory } from "@/types";

// ─────────────────────────────────────────────
// CONFIGURATION
// ─────────────────────────────────────────────

const CARD_GAP = 12;
const ANIMATION_DURATION = 700;

// ─────────────────────────────────────────────
// TECHNOLOGY CARD
// ─────────────────────────────────────────────

function TechCard({ item }: { item: SkillItem }) {
  return (
    <div
      data-tech-card
      className="tech-carousel-card group relative flex h-[130px] shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border border-[#6b162c]/10 bg-white/85 shadow-[0_5px_20px_rgba(0,0,0,0.035)] transition-[box-shadow,border-color] duration-300 hover:border-[#6b162c]/25 hover:shadow-[0_12px_30px_rgba(107,22,44,0.10)]"
    >
      {/* Colored technology icon */}
      <div className="transition-transform duration-300 group-hover:scale-110">
        <TechTile
          icon={item.icon}
          size={26}
          tileSize="w-[54px] h-[54px]"
          radius="rounded-xl"
        />
      </div>

      {/* Technology name */}
      <span className="px-2 text-center text-[12px] font-semibold leading-tight text-neutral-800 group-hover:text-[#6b162c]">
        {item.n}
      </span>

      {/* Certification badge */}
      {item.certified && (
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#6b162c] px-2.5 py-0.5 text-[9px] font-semibold text-white shadow-sm">
          Certified
        </span>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// INFINITE CARD CAROUSEL
// ─────────────────────────────────────────────

function TechCarousel({
  title,
  description,
  items,
  interval = 2600,
}: {
  title: string;
  description: string;
  items: SkillItem[];
  interval?: number;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);

  const reducedMotion = useReducedMotion();

  const count = items.length;

  // Three complete copies provide enough cards
  // for seamless looping in both directions.
  const extendedItems = [
    ...items,
    ...items,
    ...items,
  ];

  // Start at the middle copy.
  const [position, setPosition] = useState(count);

  const [step, setStep] = useState(0);
  const [transitionEnabled, setTransitionEnabled] =
    useState(true);

  const [paused, setPaused] = useState(false);

  // ── Measure card width ───────────────────────

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    const measure = () => {
      const card = viewport.querySelector<HTMLElement>(
        "[data-tech-card]"
      );

      if (!card) return;

      const width = card.getBoundingClientRect().width;

      setStep(width + CARD_GAP);
    };

    measure();

    const observer = new ResizeObserver(measure);

    observer.observe(viewport);

    return () => {
      observer.disconnect();
    };
  }, [count]);

  // ── Reset when category data changes ─────────

  useEffect(() => {
    setPosition(count);
  }, [count]);

  // ── Automatic movement ──────────────────────

  useEffect(() => {
    if (
      paused ||
      reducedMotion ||
      count < 2 ||
      step === 0 ||
      !transitionEnabled
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setPosition((current) => current + 1);
    }, interval);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    paused,
    reducedMotion,
    count,
    step,
    interval,
    transitionEnabled,
  ]);

  // ── Seamless infinite loop ──────────────────

  const handleTransitionEnd = (
    event: React.TransitionEvent<HTMLDivElement>
  ) => {
    if (event.target !== event.currentTarget) return;
    if (event.propertyName !== "transform") return;

    let resetPosition: number | null = null;

    // End of second copy -> middle copy
    if (position >= count * 2) {
      resetPosition = count;
    }

    // Beginning of middle copy -> second copy end
    if (position < count) {
      resetPosition = position + count;
    }

    if (resetPosition === null) return;

    setTransitionEnabled(false);
    setPosition(resetPosition);

    // Re-enable animation after the invisible jump.
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    });
  };

  // ── Navigation ──────────────────────────────

  const next = () => {
    if (!transitionEnabled || count < 2) return;
    setPosition((current) => current + 1);
  };

  const previous = () => {
    if (!transitionEnabled || count < 2) return;
    setPosition((current) => current - 1);
  };

  if (count === 0) return null;

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      {/* ── Category header ────────────────── */}

    
{/* CATEGORY HEADER */}
<div className="mb-5">
  <h3 className="text-xl font-bold tracking-tight text-neutral-900 md:text-2xl">
    {title}
  </h3>

  <p className="mt-1 text-[13px] text-neutral-500">
    {description}
  </p>
</div>

{/* CAROUSEL WITH LEFT / RIGHT ARROWS */}
<div className="flex w-full items-center gap-2 md:gap-3">

  {/* LEFT ARROW */}
  <button
    type="button"
    onClick={previous}
    disabled={count < 2}
    aria-label={`Previous ${title} technology`}
    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#6b162c]/20 bg-white text-[#6b162c] shadow-sm transition-all duration-200 hover:scale-105 hover:border-[#6b162c] hover:bg-[#6b162c] hover:text-white disabled:opacity-40 md:h-11 md:w-11"
  >
    <ChevronLeft size={19} />
  </button>

  {/* CARDS VIEWPORT */}
  <div
    ref={viewportRef}
    className="relative min-w-0 flex-1 overflow-hidden py-4"
  >
    {/* LEFT GRADIENT */}
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-5 bg-gradient-to-r from-[#FAF8F5] to-transparent" />

    {/* RIGHT GRADIENT */}
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-5 bg-gradient-to-l from-[#FAF8F5] to-transparent" />

    {/* MOVING CARDS */}
    <div
      className="flex w-full gap-3"
      onTransitionEnd={handleTransitionEnd}
      style={{
        transform: `translate3d(-${position * step}px, 0, 0)`,
        transition:
          transitionEnabled && step > 0 && !reducedMotion
            ? `transform ${ANIMATION_DURATION}ms linear`
            : "none",
        visibility: step > 0 ? "visible" : "hidden",
        willChange: "transform",
      }}
    >
      {extendedItems.map((item, index) => (
        <TechCard
          key={`${title}-${item.n}-${index}`}
          item={item}
        />
      ))}
    </div>
  </div>

  {/* RIGHT ARROW */}
  <button
    type="button"
    onClick={next}
    disabled={count < 2}
    aria-label={`Next ${title} technology`}
    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#6b162c]/20 bg-white text-[#6b162c] shadow-sm transition-all duration-200 hover:scale-105 hover:border-[#6b162c] hover:bg-[#6b162c] hover:text-white disabled:opacity-40 md:h-11 md:w-11"
  >
    <ChevronRight size={19} />
  </button>

</div>


    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN SKILLS SECTION
// ─────────────────────────────────────────────

export function Skills() {
  const categories = skillCategories as SkillCategory[];

  const getItems = (name: string) =>
    categories.find(
      (category) => category.cat === name
    )?.items ?? [];

  const frontend = getItems("Frontend");
  const backend = getItems("Backend");
  const cloud = getItems("DevOps & Cloud");
  const ai = getItems("AI & Data");

  // Highlight Python in Data Engineering & AI.
  const python = backend.find(
    (item) => item.n === "Python"
  );

  const dataItems = [
    ...(python ? [python] : []),
    ...ai.filter((item) => item.n !== "Python"),
  ];

  const softwareItems = [
    ...backend.filter(
      (item) => item.n !== "Python"
    ),
    ...cloud,
  ];

  return (
    <section
  id="skills"
className="relative scroll-mt-24 overflow-hidden bg-[#FAF8F5] pt-10 pb-8 md:pt-16 md:pb-10">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[440px] w-[700px] -translate-x-1/2 rounded-full bg-[#6b162c] opacity-[0.07] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">

        {/* ── Header ─────────────────────── */}

        <div className="mb-8 max-w-3xl md:mb-12">
          <AnimatedSection
            delay={0.05}
            className="mb-5 flex items-center gap-2.5"
          >
            <div className="h-4 w-1 rounded-full bg-[#6b162c]" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b162c]">
              Technical Skills
            </span>
          </AnimatedSection>

       
{/* Mobile: visible immediately, no scroll animation */}
<div className="lg:hidden">
  <h2 className="text-[clamp(1.85rem,7vw,2.75rem)] font-semibold leading-[1.15] tracking-tight text-neutral-900">
    Technologies behind my work
  </h2>

  <p className="mt-3 font-serif text-[clamp(1.65rem,6vw,2.5rem)] italic leading-tight text-[#6b162c]">
    from data to software.
  </p>
</div>

{/* Desktop: preserve the existing animation */}
<div className="hidden lg:block">
  <AnimatedText
    text="Technologies behind my work"
    el="h2"
    effect="wipe"
    delay={0.15}
    className="block text-4xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-6xl"
  />

  <AnimatedText
    text="from data to software."
    el="span"
    effect="fade"
    delay={0.3}
    className="mt-2 block font-serif text-3xl italic font-normal text-[#6b162c] md:text-5xl"
  />
</div>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-neutral-500">
            Technologies I use to build data pipelines,
            AI systems, and modern software applications.
          </p>
        </div>

        {/* ── Carousels ──────────────────── */}

        <div className="space-y-12">

          {/* Data Engineering & AI */}
          <TechCarousel
            title="Data Engineering & AI"
            description="Data Pipelines · Analytics · Machine Learning"
            items={dataItems}
            interval={2600}
          />

          {/* Backend & Cloud */}
          <TechCarousel
            title="Backend & Cloud"
            description="APIs · Databases · Infrastructure"
            items={softwareItems}
            interval={3000}
          />

          {/* Frontend & Design */}
          <TechCarousel
            title="Frontend & Design"
            description="UI · Design Systems · Interaction"
            items={frontend}
            interval={2800}
          />

        </div>

       
      </div>

      {/* ── Responsive Card Sizing ──────────── */}

      <style jsx global>{`
        /* Desktop: 6 cards */
        .tech-carousel-card {
          flex: 0 0 calc((100% - 60px) / 6);
          min-width: 0;
        }

        /* Tablet: 4 cards */
        @media (max-width: 1100px) {
          .tech-carousel-card {
            flex-basis: calc((100% - 36px) / 4);
          }
        }

        /* Mobile: 2 cards */
        @media (max-width: 640px) {
          .tech-carousel-card {
            flex-basis: calc((100% - 12px) / 2);
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .tech-carousel-card {
            transition: none !important;
          }
        }
      `}</style>

    </section>
  );
}
