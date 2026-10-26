
"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  Star,
  ArrowRight,
  ExternalLink,
  FolderGit2,
  Play,
  ImageIcon,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import Image from "next/image";
import { TiltCard } from "@/components/ui/TiltCard";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects, projectCategories } from "@/data";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Projects() {
  const [active, setActive] = useState("All");
  const [playingVideo, setPlayingVideo] = useState<string | null>(
    null
  );

  const [gallery, setGallery] = useState<{ title: string; images: string[] } | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    if (!gallery) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setGallery(null);
      if (event.key === "ArrowRight")
        setGalleryIndex((i) => (i + 1) % gallery.images.length);
      if (event.key === "ArrowLeft")
        setGalleryIndex((i) =>
          (i - 1 + gallery.images.length) % gallery.images.length
        );
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [gallery]);

  // Stop video when it scrolls out of view
  useEffect(() => {
    if (!playingVideo) return;

    const element = document.querySelector(
      `[data-project-video="${playingVideo}"]`
    );

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.35) {
          setPlayingVideo((current) =>
            current === playingVideo ? null : current
          );
        }
      },
      {
        threshold: [0, 0.35, 1],
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [playingVideo]);

  // Filter projects
  const list =
    active === "All"
      ? projects
      : projects.filter((p) =>
          Array.isArray(p.cat)
            ? p.cat.includes(active)
            : p.cat === active
        );

  // Toggle video / project image
  const toggleVideo = (projectId: string) => {
    setPlayingVideo((current) =>
      current === projectId ? null : projectId
    );
  };

  return (
    <>
    <section
      id="projects"
      className="
        relative py-28 md:py-36
        bg-[#FAF8F5]
        text-neutral-900
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between mb-12 gap-6 xl:gap-8">

          <div>
            <AnimatedSection
              delay={0.05}
              className="flex items-center gap-2 mb-3"
            >
              <FolderGit2 className="w-4 h-4 text-[#6b162c]" />

              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6b162c]">
                Portfolio
              </span>
            </AnimatedSection>

            <AnimatedText
              text="What I've built"
              el="h2"
              effect="wipe"
              className="
                text-4xl sm:text-5xl
                font-bold tracking-tight
                text-neutral-900 leading-tight
              "
            />

            <AnimatedText
              text="from concept to production."
              el="p"
              effect="fade"
              delay={0.2}
              className="
                text-3xl sm:text-4xl
                font-serif italic font-normal
                text-[#6b162c] mt-1
              "
            />
          </div>

          {/* CATEGORY FILTER */}
          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex w-full min-w-0 flex-nowrap items-center gap-2 overflow-x-auto pb-2 whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:w-auto xl:shrink-0"
          >
            {projectCategories.map((category) => {
              const isActive = active === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActive(category);
                    setPlayingVideo(null);
                  }}
                  aria-pressed={isActive}
                  className={`
                    shrink-0 whitespace-nowrap px-3 py-2 rounded-full
                    text-xs font-semibold
                    tracking-normal cursor-pointer
                    transition-all duration-300 ease-out
                    ${
                      isActive
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

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {list.map((p, i) => {
            const isVideoPlaying = playingVideo === p.id;
            const hasVideo = Boolean(p.video);
            const galleryImages = "images" in p && Array.isArray(p.images) ? p.images as string[] : [];
            const hasGallery = galleryImages.length > 0;

            return (
              <AnimatedSection
                key={p.id}
                delay={0.1 + (i % 3) * 0.1}
                className="h-full"
              >
                <TiltCard
                  className="
                    group h-full flex flex-col
                    bg-white rounded-3xl overflow-hidden
                    border border-neutral-200/70 shadow-sm
                    transition-all duration-500 ease-out
                    hover:-translate-y-2.5
                    hover:shadow-[0_22px_50px_rgba(107,22,44,0.14)]
                    hover:border-[#6b162c]/30
                  "
                >

                  {/* IMAGE OR VIDEO */}
                  <div
                    data-project-video={p.id}
                    className="
                      relative h-56 w-full
                      overflow-hidden shrink-0
                      bg-neutral-900
                    "
                  >
                    {isVideoPlaying && p.video ? (
                      <>
                        {/* BLURRED BACKGROUND */}
                        <div className="absolute inset-0 overflow-hidden">
                          <Image
                            src={p.img}
                            alt=""
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="
                              object-cover
                              blur-xl scale-125
                              opacity-50
                            "
                          />
                        </div>

                        {/* VIDEO PLAYER */}
                        <video
                          data-media-player="true"
                          key={`${p.id}-video`}
                          src={p.video}
                          controls
                          autoPlay
                          playsInline
                          preload="metadata"
                          onEnded={() => {
                            setPlayingVideo(null);
                          }}
                          className="
                            absolute inset-0 z-10
                            w-full h-full
                            object-contain
                          "
                        >
                          Your browser does not support this video.
                        </video>
                      </>
                    ) : (
                      <>
                        {/* PROJECT IMAGE */}
                        <Image
                          src={p.img}
                          alt={p.title}
                          fill
                          sizes="
                            (max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw
                          "
                          className="
                            object-cover
                            transition-transform
                            duration-700 ease-out
                            group-hover:scale-110
                          "
                        />

                        {/* IMAGE GRADIENT */}
                        <div
                          className="
                            absolute inset-0
                            bg-gradient-to-t
                            from-black/60
                            via-black/10
                            to-transparent
                            opacity-70
                            group-hover:opacity-85
                            transition-opacity duration-300
                            pointer-events-none
                          "
                        />

                        {/* CATEGORY BADGE */}
                        <div
                          className="
                            absolute top-4 right-4 z-10
                            backdrop-blur-md
                            bg-black/40
                            border border-white/20
                            text-white text-[11px]
                            font-semibold
                            px-3 py-1 rounded-full
                            tracking-wide
                          "
                        >
                          {Array.isArray(p.cat)
                            ? p.cat.join(" · ")
                            : p.cat}
                        </div>

                        {/* STAR RATING */}
                        <div
                          className="
                            absolute bottom-4 left-4 z-10
                            flex items-center gap-1.5
                            backdrop-blur-md
                            bg-white/10
                            border border-white/20
                            px-3 py-1 rounded-full
                          "
                        >
                          <Star
                            size={12}
                            className="
                              text-amber-400
                              fill-amber-400
                            "
                          />

                          <span className="text-xs font-semibold text-white tracking-wide">
                            {p.stars}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* CARD CONTENT */}
                  <div className="p-7 flex-1 flex flex-col justify-between">

                    <div>
                      {/* PROJECT TITLE */}
                      <h3
                        className="
                          text-xl font-bold
                          text-neutral-900
                          tracking-tight mb-2
                          group-hover:text-[#6b162c]
                          transition-colors duration-300
                        "
                      >
                        {p.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p
                        className="
                          text-sm text-neutral-600
                          leading-relaxed mb-6
                          line-clamp-3
                        "
                      >
                        {p.desc}
                      </p>
                    </div>

                    <div>
                      {/* TECHNOLOGY TAGS */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="
                              text-xs font-medium
                              text-neutral-600
                              bg-neutral-100/80
                              border border-neutral-200/60
                              px-2.5 py-1 rounded-md
                              transition-colors duration-300
                              group-hover:border-[#6b162c]/20
                              group-hover:bg-[#6b162c]/5
                            "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* ACTION BUTTONS */}
                      <div className="pt-4 border-t border-neutral-100 space-y-3">

                        {hasGallery && !p.code && !p.demo && !p.video ? (
                          <button
                            type="button"
                            onClick={() => {
                              setPlayingVideo(null);
                              setGallery({ title: p.title, images: galleryImages });
                              setGalleryIndex(0);
                            }}
                            className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#6b162c] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#521122]"
                          >
                            <ImageIcon size={17} /> View Gallery
                          </button>
                        ) : (
                        <>
                        {/* CODE AND LIVE DEMO */}
                        <div className="grid grid-cols-2 gap-3">

                          {/* GITHUB CODE */}
                          {p.code ? (
                            <a
                              href={p.code}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                                flex items-center
                                justify-center gap-2
                                py-2.5 px-3
                                rounded-xl
                                text-xs font-semibold
                                text-neutral-700
                                bg-neutral-100
                                border border-neutral-200/80
                                hover:bg-neutral-200/80
                                hover:text-neutral-900
                                transition-all duration-300
                              "
                            >
                              <GithubIcon size={14} />
                              <span>Code</span>
                            </a>
                          ) : hasGallery ? (
                            <button type="button" onClick={() => { setPlayingVideo(null); setGallery({ title: p.title, images: galleryImages }); setGalleryIndex(0); }} className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-[#6b162c] hover:bg-[#521122] transition-all duration-300">
                              <ImageIcon size={14} /> View Gallery
                            </button>
                          ) : (
                            <span
                              className="
                                flex items-center justify-center
                                gap-2 py-2.5 px-3
                                rounded-xl text-xs font-semibold
                                text-neutral-400
                                bg-neutral-100
                                border border-neutral-200/80
                              "
                            >
                              <GithubIcon size={14} />
                              <span>Private</span>
                            </span>
                          )}

                          {/* LIVE DEMO OR VIDEO DEMO */}
                          {p.demo ? (
                            <a
                              href={p.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                                flex items-center justify-center gap-2
                                py-2.5 px-3 rounded-xl
                                text-xs font-semibold
                                text-white bg-[#6b162c]
                                hover:bg-[#521122]
                                transition-all duration-300
                              "
                            >
                              <span>Live Demo</span>
                              <ExternalLink size={14} />
                            </a>
                          ) : p.video ? (
                            <button
                              type="button"
                              onClick={() => toggleVideo(p.id)}
                              className="
                                flex items-center justify-center gap-2
                                py-2.5 px-3 rounded-xl
                                text-xs font-semibold
                                text-white bg-[#6b162c]
                                hover:bg-[#521122]
                                transition-all duration-300
                              "
                            >
                              {isVideoPlaying ? (
                                <ImageIcon size={14} />
                              ) : (
                                <Play size={14} />
                              )}

                              <span>
                                {isVideoPlaying
                                  ? "Back to Image"
                                  : "Video Demo"}
                              </span>
                            </button>
                          ) : null}
                        </div>
                        </>
                        )}

                        {/* ADDITIONAL VIDEO BUTTON */}
                        {p.demo && hasVideo && (
                          <button
                            type="button"
                            onClick={() => toggleVideo(p.id)}
                            className="
                              w-full flex items-center
                              justify-center gap-2
                              px-4 py-2.5 rounded-xl
                              text-xs font-semibold
                              text-[#6b162c]
                              bg-[#6b162c]/5
                              border border-[#6b162c]/20
                              hover:bg-[#6b162c]/10
                              hover:border-[#6b162c]/40
                              transition-all duration-300
                            "
                          >
                            {isVideoPlaying ? (
                              <>
                                <ImageIcon size={15} />
                                <span>Back to Image</span>
                              </>
                            ) : (
                              <>
                                <Play size={15} />
                                <span>Watch Video Demo</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </AnimatedSection>
            );
          })}
        </div>

        {/* FOOTER CTA */}
        <AnimatedSection
          delay={0.4}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://github.com/aminael24"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex items-center gap-3
              px-6 py-3.5 rounded-full
              bg-white
              border border-neutral-200/80
              text-sm font-semibold
              text-neutral-700
              hover:text-[#6b162c]
              hover:border-[#6b162c]/30
              hover:shadow-lg
              transition-all duration-300
            "
          >
            <GithubIcon
              size={18}
              className="
                text-neutral-900
                group-hover:text-[#6b162c]
                transition-colors
              "
            />

            <span>View all repositories on GitHub</span>

            <ArrowRight
              size={16}
              className="
                transition-transform duration-300
                group-hover:translate-x-1
                text-[#6b162c]
              "
            />
          </a>
        </AnimatedSection>
      </div>
    </section>

    {gallery && createPortal(
      <div
        data-media-overlay="true"
        className="fixed inset-0 z-[99999] flex flex-col bg-[#101014] text-white cursor-auto"
        role="dialog"
        aria-modal="true"
        aria-label={`${gallery.title} image gallery`}
        onClick={() => setGallery(null)}
      >
        <header
          className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 md:px-8"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold md:text-lg">{gallery.title}</h3>
            <p className="text-xs text-white/60">{galleryIndex + 1} / {gallery.images.length}</p>
          </div>
          <button type="button" onClick={() => setGallery(null)} aria-label="Close gallery" className="rounded-full p-2 cursor-pointer transition hover:bg-white/15">
            <X size={24} />
          </button>
        </header>

        <div
          className="relative min-h-0 flex-1"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="absolute inset-0 px-12 py-3 md:px-20 md:py-5">
            <div className="relative h-full w-full">
              <Image
                key={gallery.images[galleryIndex]}
                src={gallery.images[galleryIndex]}
                alt={`${gallery.title} – screenshot ${galleryIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => setGalleryIndex((i) => (i - 1 + gallery.images.length) % gallery.images.length)}
            aria-label="Previous image"
            className="absolute left-1 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-2 hover:bg-white/25 md:left-6 md:p-3"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={() => setGalleryIndex((i) => (i + 1) % gallery.images.length)}
            aria-label="Next image"
            className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-2 hover:bg-white/25 md:right-6 md:p-3"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div
          className="flex shrink-0 justify-center gap-2 overflow-x-auto border-t border-white/10 px-4 py-3 md:gap-3"
          onClick={(event) => event.stopPropagation()}
        >
          {gallery.images.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              onClick={() => setGalleryIndex(i)}
              aria-label={`View screenshot ${i + 1}`}
              aria-current={i === galleryIndex ? "true" : undefined}
              className={`relative h-12 w-20 shrink-0 cursor-pointer overflow-hidden rounded-md border-2 transition md:h-16 md:w-24 ${
                i === galleryIndex
                  ? "border-white opacity-100"
                  : "border-transparent opacity-55 hover:opacity-90"
              }`}
            >
              <Image src={src} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>,
      document.body
    )}
    </>
  );
}
