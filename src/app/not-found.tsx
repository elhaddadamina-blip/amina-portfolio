"use client";

import Link from "next/link";
import { palette as P } from "@/lib/palette";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: P.ivory,
        color: P.dark,
        fontFamily: "'Montserrat', sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: 800,
          color: P.burgundy,
          lineHeight: 1,
          marginBottom: "1rem",
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: 600,
          marginBottom: "2rem",
        }}
      >
        Page Not Found
      </h2>
      <p
        style={{
          fontSize: "1rem",
          color: P.muted,
          maxWidth: "400px",
          marginBottom: "2.5rem",
        }}
      >
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          background: P.burgundy,
          color: P.white,
          padding: "12px 24px",
          borderRadius: "100px",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "0.875rem",
          transition: "all 0.2s ease-in-out",
          boxShadow: `0 4px 14px ${P.glow}`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.background = P.burgundyDk;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.background = P.burgundy;
        }}
      >
        Return Home
      </Link>
    </div>
  );
}
