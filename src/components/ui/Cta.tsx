"use client";

import type { ReactNode, CSSProperties } from "react";
import { palette as P } from "@/lib/palette";

interface CtaProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline";
}

export function Cta({ href = "#", children, variant = "primary" }: CtaProps) {
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    padding: "12px 26px",
    borderRadius: 100,
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 14,
    fontWeight: 600,
    textDecoration: "none",
    transition: "all 0.25s",
    letterSpacing: "0.01em",
  };

  const styles: Record<"primary" | "outline", CSSProperties> = {
    primary: { background: P.burgundy, color: P.ivory, boxShadow: "0 4px 18px rgba(128,0,32,0.28)" },
    outline: { background: "transparent", color: P.dark, border: `2px solid ${P.dark}` },
  };

  return (
    <a
      href={href}
      style={{ ...base, ...styles[variant] }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        if (variant === "primary") {
          el.style.background = P.burgundyDk;
          el.style.transform = "translateY(-3px)";
          el.style.boxShadow = "0 8px 26px rgba(128,0,32,0.38)";
        } else {
          el.style.background = P.dark;
          el.style.color = P.ivory;
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        if (variant === "primary") {
          el.style.background = P.burgundy;
          el.style.transform = "";
          el.style.boxShadow = "0 4px 18px rgba(128,0,32,0.28)";
        } else {
          el.style.background = "transparent";
          el.style.color = P.dark;
        }
      }}
    >
      {children}
    </a>
  );
}
