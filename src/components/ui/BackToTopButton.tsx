"use client";

import { ChevronUp } from "lucide-react";

export function BackToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center text-white/40 transition-all duration-200 hover:bg-[#800020] hover:text-[#F5F5DC]"
      aria-label="Back to top"
    >
      <ChevronUp size={16} />
    </button>
  );
}
