"use client";

import { useState } from "react";
import {
  Download, Menu, X, ChevronRight,
  Briefcase, FolderKanban, Wrench, User, Mail,
} from "lucide-react";
import { useScrollY } from "@/hooks";
import { palette as P } from "@/lib/palette";
import { siteConfig } from "@/data";

/* Nav links with icons */
const navItems = [
  { label: "Experience", icon: Briefcase },
  { label: "Projects", icon: FolderKanban },
  { label: "Skills", icon: Wrench },
  { label: "About", icon: User },
  { label: "Contact", icon: Mail },
];

export function Navbar() {
  const y = useScrollY();
  const [open, setOpen] = useState(false);
  const scrolled = y > 50;

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-[999] transition-all duration-300"
      style={{
        background: scrolled ? "rgba(245,245,220,0.93)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: `1px solid ${scrolled ? P.border : "transparent"}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-[70px]">

          {/* ── LEFT: name ── */}
          <a href="#hero" className="flex items-center gap-2.5 no-underline shrink-0">
            <span className="font-bold text-base tracking-tight" style={{ color: P.dark }}>
              {siteConfig.name}
            </span>
          </a>

          {/* ── CENTER: nav links with icons ── */}
          <div className="d-nav hidden md:flex items-center gap-1">
            {navItems.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#1c1917] hover:text-[#800020] hover:bg-[#800020]/5 transition-all duration-200"
              >
                <Icon size={15} className="opacity-50" />
                {label}
              </a>
            ))}
          </div>

          {/* ── RIGHT: CV + Hire Me ── */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {/* CV button */}
            <a
              href="#cv"
              className="flex items-center gap-1.5 border border-[#800020] text-[#800020] px-4 py-2 rounded-full font-semibold text-xs transition-all duration-200 hover:bg-[#800020] hover:text-[#F5F5DC] hover:-translate-y-0.5"
            >
              <Download size={12} /> CV
            </a>

            {/* Hire Me — animated glow button */}
            <a
              href="#contact"
              className="relative flex items-center justify-center px-5 py-2 rounded-full font-bold text-white text-xs overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_14px_rgba(128,0,32,0.35)] hover:shadow-[0_0_22px_rgba(128,0,32,0.55)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#800020] via-[#d12f57] to-[#800020] anim-gradient-flow" />
              <span className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] anim-shine-sweep" />
              <span className="relative z-10 tracking-widest uppercase">Hire Me</span>
            </a>
          </div>

          {/* ── MOBILE: hamburger ── */}
          <button
            className="m-btn md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: P.dark,
              padding: 6,
            }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* ── MOBILE: dropdown ── */}
      {open && (
        <div
          id="mobile-menu"
          className="anim-slide-down md:hidden"
          style={{
            background: "rgba(245,245,220,0.97)",
            backdropFilter: "blur(16px)",
            borderTop: `1px solid ${P.border}`,
            padding: "1rem 2rem 1.5rem",
          }}
        >
          {navItems.map(({ label, icon: Icon }) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-3 no-underline font-medium text-base"
              style={{
                borderBottom: `1px solid ${P.borderLt}`,
                color: P.dark,
              }}
            >
              <span className="flex items-center gap-3">
                <Icon size={16} className="opacity-40" />
                {label}
              </span>
              <ChevronRight size={15} color={P.muted} />
            </a>
          ))}
          <div className="flex gap-3 mt-4">
            <a
              href="#cv"
              onClick={() => setOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 no-underline rounded-full px-5 py-3 font-semibold text-sm border"
              style={{ borderColor: P.burgundy, color: P.burgundy }}
            >
              <Download size={14} /> CV
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex-1 relative flex items-center justify-center rounded-full font-bold text-white text-sm overflow-hidden shadow-[0_0_14px_rgba(128,0,32,0.35)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#800020] via-[#d12f57] to-[#800020] anim-gradient-flow" />
              <span className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] anim-shine-sweep" />
              <span className="relative z-10 tracking-widest uppercase py-3">Hire Me</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
