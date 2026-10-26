
"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  const hoveringRef = useRef(false);
  const clickingRef = useRef(false);
  const nativeCursorRef = useRef(false);

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [nativeCursor, setNativeCursor] = useState(false);
  const [mounted, setMounted] = useState(false);

  const rafRef = useRef<number>(0);

  useEffect(() => {
    setMounted(true);

    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) return;

    const checkNativeCursor = (target: Element | null) => {
      const native =
        !!target?.closest(
          '[data-media-overlay="true"], [data-media-player="true"], video'
        ) || !!document.fullscreenElement;

      nativeCursorRef.current = native;
      setNativeCursor(native);

      return native;
    };

    const onMove = (e: MouseEvent) => {
      pos.current = {
        x: e.clientX,
        y: e.clientY,
      };

      const element = document.elementFromPoint(
        e.clientX,
        e.clientY
      );

      checkNativeCursor(element);

      setVisible(true);
    };

    const onDown = () => {
      clickingRef.current = true;
    };

    const onUp = () => {
      clickingRef.current = false;
    };

    const onHover = (e: MouseEvent) => {
      const element = e.target as Element;

      if (checkNativeCursor(element)) {
        hoveringRef.current = false;
        setHovering(false);
        return;
      }

      const interactive = element?.closest?.(
        'a, button, input, textarea, select, [role="button"], label[for], .cursor-pointer'
      );

      hoveringRef.current = !!interactive;
      setHovering(!!interactive);
    };

    const onFullscreenChange = () => {
      const element = document.elementFromPoint(
        pos.current.x,
        pos.current.y
      );

      checkNativeCursor(element);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const animate = () => {
      ringPos.current.x +=
        (pos.current.x - ringPos.current.x) * 0.15;

      ringPos.current.y +=
        (pos.current.y - ringPos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `
          translate(${pos.current.x}px, ${pos.current.y}px)
          translate(-50%, -50%)
        `;

        dotRef.current.style.opacity =
          nativeCursorRef.current ? "0" : "1";
      }

      if (ringRef.current) {
        const scale = clickingRef.current
          ? 0.75
          : hoveringRef.current
          ? 1.6
          : 1;

        ringRef.current.style.transform = `
          translate(${ringPos.current.x}px, ${ringPos.current.y}px)
          translate(-50%, -50%)
          scale(${scale})
        `;

        ringRef.current.style.opacity =
          nativeCursorRef.current ? "0" : "1";
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    // Cursor rules
    const style = document.createElement("style");

    style.textContent = `
      @media (pointer: fine) {
        *, *::before, *::after {
          cursor: none !important;
        }

        /* Normal cursor inside galleries */
        [data-media-overlay="true"],
        [data-media-overlay="true"] *,
        [data-media-overlay="true"] *::before,
        [data-media-overlay="true"] *::after {
          cursor: auto !important;
        }

        [data-media-overlay="true"] button,
        [data-media-overlay="true"] a {
          cursor: pointer !important;
        }

        /* Normal cursor for videos */
        video,
        video *,
        [data-media-player="true"],
        [data-media-player="true"] * {
          cursor: auto !important;
        }

        /* Fullscreen video */
        video:fullscreen,
        video:-webkit-full-screen {
          cursor: auto !important;
        }

        :fullscreen,
        :fullscreen * {
          cursor: auto !important;
        }
      }
    `;

    document.head.appendChild(style);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onHover);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    document.addEventListener(
      "fullscreenchange",
      onFullscreenChange
    );

    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      style.remove();

      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onHover);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);

      document.removeEventListener(
        "fullscreenchange",
        onFullscreenChange
      );

      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);

      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Custom cursor dot */}
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
          opacity: visible && !nativeCursor ? 1 : 0,
          transition: "opacity 0.2s",
          willChange: "transform",
        }}
      />

      {/* Custom cursor ring */}
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
          border: `1.5px solid ${
            hovering
              ? "#6b162c"
              : "rgba(107,22,44,0.35)"
          }`,
          background: hovering
            ? "rgba(107,22,44,0.06)"
            : "transparent",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: visible && !nativeCursor ? 1 : 0,
          transition:
            "opacity 0.2s, border-color 0.25s, background 0.25s",
          willChange: "transform",
        }}
      />
    </>
  );
}
