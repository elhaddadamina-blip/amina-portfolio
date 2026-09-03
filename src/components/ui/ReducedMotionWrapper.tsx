"use client";

import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";

export function ReducedMotionWrapper({ children }: { children: React.ReactNode }) {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setShouldReduceMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setShouldReduceMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <MotionConfig reducedMotion={shouldReduceMotion ? "always" : "user"}>
      {children}
    </MotionConfig>
  );
}
