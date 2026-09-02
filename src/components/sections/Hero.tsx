"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { palette as P } from "@/lib/palette";
import amnImg from "@/img/amn.webp";

/* ─── motion helpers ─────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

const wipeLeft = (delay = 0) => ({
  initial: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  animate: { clipPath: "inset(0 0% 0 0)", opacity: 1 },
  transition: { duration: 1.0, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

const blurIn = (delay = 0) => ({
  initial: { opacity: 0, filter: "blur(12px)", scale: 0.97 },
  animate: { opacity: 1, filter: "blur(0px)", scale: 1 },
  transition: { duration: 1.0, delay, ease: "easeOut" as const },
});

export function Hero() {
  return (


      <section
        id="hero"
        className="relative min-h-screen w-full overflow-hidden bg-[#FAF8F5] flex flex-col"
      >
        {/* ── radial glow backdrop ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 50% 55%,
              rgba(128,0,32,0.78) 0%,
              rgba(138,28,56,0.45) 38%,
              rgba(250,248,245,0.92) 72%,
              #FAF8F5 100%)`,
          }}
        />

        {/* ── decorative rings ── */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#800020]/10 pointer-events-none"
          style={{ width: 600, height: 600 }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#800020]/6 pointer-events-none"
          style={{ width: 820, height: 820 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, delay: 0.5, ease: "easeOut" }}
        />

        <div className="relative z-10 flex-1 flex flex-col items-center justify-start pt-24 md:pt-28 px-6 md:px-12">

          {/* ── TOP: badge → name → title ── */}
          <div className="flex flex-col items-center text-center gap-4 w-full max-w-7xl mx-auto">

            {/* 1. Badge */}
            <motion.div {...fadeUp(0.1)}>
              <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-md border border-white/50">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ background: P.burgundy }}
                  />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: P.burgundy }} />
                </span>
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase" style={{ color: P.burgundy }}>
                  Available for opportunities
                </span>
              </div>
            </motion.div>

            {/* 2. Name */}
            <motion.h1
              {...blurIn(0.25)}
              className="text-4xl md:text-6xl lg:text-7xl font-sans font-semibold tracking-tight leading-none"
              style={{ color: P.dark }}
            >
              Hi, I&apos;m Amina
            </motion.h1>

            {/* 3. Title */}
            <motion.h2
              {...wipeLeft(0.45)}
              className="whitespace-nowrap text-[clamp(1.8rem,5.5vw,4.5rem)] font-serif italic font-normal tracking-tight leading-tight text-white"
            >
              AI &amp; Software Engineer
            </motion.h2>

          </div>

          {/* ── PHOTO — centered, fills remaining height ── */}
          <div className="flex flex-1 items-end justify-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="relative z-10 w-full max-w-sm md:max-w-md"
            >
              <Image
                src={amnImg}
                alt="Amina EL HADDAD"
                width={600}
                height={620}
                priority
                sizes="(max-width: 768px) 100vw, 600px"
                className="w-full object-cover object-top filter contrast-105 drop-shadow-2xl"
                style={{
                  maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                }}
              />
            </motion.div>
          </div>

          {/* ── CTA — absolute bottom-right inside hero ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" as const }}
            className="absolute bottom-8 right-8 z-[998]"
          >
            <a
              href="#contact"
              className="group flex items-center gap-3 bg-[#1c1917] hover:bg-[#800020] text-white px-7 py-3.5 rounded-full transition-all duration-300 shadow-2xl hover:shadow-[#800020]/40 hover:shadow-2xl hover:-translate-y-0.5"
            >
              <span className="text-sm font-semibold">Get in Touch</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

        </div>
      </section>
  );
}
