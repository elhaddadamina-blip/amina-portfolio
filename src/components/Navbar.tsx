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

          {/* ── RIGHT: Resume button ── */}
          <div className="hidden md:flex items-center shrink-0">
            <a
              href="#cv"
              className="flex items-center gap-1.5 bg-[#800020] text-[#F5F5DC] px-5 py-2 rounded-lg font-semibold text-xs transition-all duration-200 hover:bg-[#600018] hover:-translate-y-0.5"
            >
              <Download size={13} /> Resume
            </a>
          </div>

          {/* ── MOBILE: hamburger ── */}
          <button
            className="m-btn md:hidden"
            onClick={() => setOpen(!open)}
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
          <a
            href="#cv"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 mt-4 no-underline rounded-lg px-5 py-3 font-semibold text-sm"
            style={{
              background: P.burgundy,
              color: P.ivory,
            }}
          >
            <Download size={14} /> Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
