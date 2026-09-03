"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Hide on touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onEnterLeave = () => {
      // Check if hovering an interactive element
      const el = document.elementFromPoint(pos.current.x, pos.current.y);
      if (!el) return;
      const interactive = el.closest(
        'a, button, input, textarea, select, [role="button"], label[for], .cursor-pointer'
      );
      setHovering(!!interactive);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    // Smooth ring follow with RAF
    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%) scale(${clicking ? 0.75 : hovering ? 1.6 : 1})`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    // Hide default cursor
    const style = document.createElement("style");
    style.textContent = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(style);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onEnterLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onEnterLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, [visible, hovering, clicking]);

  // Don't render on SSR
  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Dot — snaps to cursor position */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#6b162c",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s, width 0.2s, height 0.2s",
          willChange: "transform",
        }}
      />

      {/* Ring — trails behind with spring-like ease */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: `1.5px solid ${hovering ? "#6b162c" : "rgba(107,22,44,0.35)"}`,
          background: hovering
            ? "rgba(107,22,44,0.06)"
            : "transparent",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: visible ? 1 : 0,
          transition:
            "opacity 0.3s, border-color 0.25s, background 0.25s, width 0.25s, height 0.25s",
          willChange: "transform",
        }}
      />
    </>
  );
}
