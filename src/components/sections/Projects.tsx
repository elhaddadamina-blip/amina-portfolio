"use client";

import { useState } from "react";
import { Star, ArrowRight, ExternalLink, FolderGit2 } from "lucide-react";
import Image from "next/image";
import { TiltCard } from "@/components/ui/TiltCard";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects, projectCategories } from "@/data";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Projects() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="projects" className="relative py-28 md:py-36 bg-[#FAF8F5] text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ── HEADER & CATEGORY FILTER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <AnimatedSection delay={0.05} className="flex items-center gap-2 mb-3">
              <FolderGit2 className="w-4 h-4 text-[#6b162c]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6b162c]">
                Portfolio
              </span>
            </AnimatedSection>

            <AnimatedText
              text="What I've built"
              el="h2"
              effect="wipe"
              className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 leading-tight"
            />
            <AnimatedText
              text="from concept to production."
              el="p"
              effect="fade"
              delay={0.2}
              className="text-3xl sm:text-4xl font-serif italic font-normal text-[#6b162c] mt-1"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {projectCategories.map((category) => {
              const isActive = active === category;
              return (
                <button
                  key={category}
                  onClick={() => setActive(category)}
                  aria-pressed={isActive}
                  aria-label={`Filter by ${category}`}
                  className={`
                    px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide cursor-pointer
                    transition-all duration-300 ease-out
                    ${isActive
                      ? "bg-[#6b162c] text-white shadow-lg shadow-[#6b162c]/25 scale-105"
                      : "bg-white text-neutral-600 border border-neutral-200/80 hover:border-[#6b162c]/40 hover:text-neutral-900 hover:shadow-sm"
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── PROJECTS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((p, i) => (
            <AnimatedSection key={p.id} delay={0.1 + (i % 3) * 0.1}>
              <TiltCard 
                className={`
                  group h-full flex flex-col bg-white rounded-3xl overflow-hidden 
                  border border-neutral-200/70 shadow-sm
                  /* HOVER-INDUCED SCALE & ELEVATE EFFECT */
                  transition-all duration-500 ease-out
                  hover:-translate-y-2.5 
                  hover:shadow-[0_22px_50px_rgba(107,22,44,0.14)] 
                  hover:border-[#6b162c]/30
                `}
              >
                {/* Image Thumbnail Container */}
                <div className="relative h-56 w-full overflow-hidden shrink-0 bg-neutral-100">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />

                  {/* Category Badge (Top Right) */}
                  <div className="absolute top-4 right-4 z-10 backdrop-blur-md bg-black/40 border border-white/20 text-white text-[11px] font-semibold px-3 py-1 rounded-full tracking-wide">
                    {p.cat}
                  </div>

                  {/* Star Rating Badge (Bottom Left) */}
                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 backdrop-blur-md bg-white/10 border border-white/20 px-3 py-1 rounded-full">
                    <Star size={12} className="text-amber-400 fill-amber-400" />
                    <span className="text-xs font-semibold text-white tracking-wide">
                      {p.stars}
                    </span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-2 group-hover:text-[#6b162c] transition-colors duration-300">
                      {p.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-neutral-600 leading-relaxed mb-6 line-clamp-3">
                      {p.desc}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium text-neutral-600 bg-neutral-100/80 border border-neutral-200/60 px-2.5 py-1 rounded-md transition-colors duration-300 group-hover:border-[#6b162c]/20 group-hover:bg-[#6b162c]/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-neutral-100">
                      {/* Code Button */}
                      <a
                        href="#"
                        className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-neutral-700 bg-neutral-100 border border-neutral-200/80 hover:bg-neutral-200/80 hover:text-neutral-900 transition-all duration-300"
                      >
                        <GithubIcon size={14} />
                        <span>Code</span>
                      </a>

                      {/* Demo Button */}
                      <a
                        href="#"
                        className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-[#6b162c] hover:bg-[#521122] shadow-[#6b162c]/20 shadow-sm hover:shadow-md transition-all duration-300 group/btn"
                      >
                        <span>Demo</span>
                        <ExternalLink size={14} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </div>

              </TiltCard>
            </AnimatedSection>
          ))}
        </div>

        {/* ── FOOTER CTA ── */}
        <AnimatedSection delay={0.4} className="mt-16 flex justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-white border border-neutral-200/80 text-sm font-semibold text-neutral-700 hover:text-[#6b162c] hover:border-[#6b162c]/30 hover:shadow-lg transition-all duration-300"
          >
            <GithubIcon size={18} className="text-neutral-900 group-hover:text-[#6b162c] transition-colors" />
            <span>View all repositories on GitHub</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 text-[#6b162c]" />
          </a>
        </AnimatedSection>

      </div>
    </section>
  );
}