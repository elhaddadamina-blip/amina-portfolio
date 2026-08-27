"use client";

import { useState, useEffect } from "react";
import { useScrollY } from "@/hooks";
import { palette as P } from "@/lib/palette";

export function ProgressBar() {
  const y = useScrollY();
  const [total, setTotal] = useState(1);

  useEffect(() => {
    const upd = () => setTotal(document.documentElement.scrollHeight - window.innerHeight);
    upd();
    window.addEventListener("resize", upd);
    return () => window.removeEventListener("resize", upd);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        height: 3,
        background: P.burgundy,
        width: `${(y / total) * 100}%`,
        transition: "width 0.1s",
        boxShadow: `0 0 8px ${P.burgundy}80`,
      }}
    />
  );
}
