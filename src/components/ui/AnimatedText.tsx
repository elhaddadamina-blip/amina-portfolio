"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimationEffect = "blur" | "wipe" | "wipe-center" | "fade" | "stagger";

interface AnimatedTextProps {
  text: string;
  el?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  className?: string;
  effect?: AnimationEffect;
  once?: boolean;
  delay?: number;
  style?: React.CSSProperties;
}

export function AnimatedText({
  text,
  el = "p",
  className = "",
  effect = "blur",
  once = true,
  delay = 0,
  style,
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  const getVariants = () => {
    switch (effect) {
      case "blur":
        return {
          hidden: { filter: "blur(10px)", opacity: 0, y: 10 },
          visible: {
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay, ease: "easeOut" },
          },
        };
      case "wipe":
        return {
          hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
          visible: {
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
            transition: { duration: 0.8, delay, ease: "easeInOut" },
          },
        };
      case "wipe-center":
        return {
          hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0, x: -10 },
          visible: {
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
            x: 0,
            transition: { duration: 1.0, delay, ease: [0.16, 1, 0.3, 1] },
          },
        };
      case "fade":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay, ease: "easeOut" },
          },
        };
      case "stagger":
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: delay },
          },
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  const MotionTag = motion[el] as React.ElementType;

  if (effect === "stagger") {
    const words = text.split(" ");
    return (
      <MotionTag
        ref={ref}
        className={className}
        style={style}
        variants={getVariants()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[0.25em]"
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            {word}
          </motion.span>
        ))}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      style={style}
    >
      {text}
    </MotionTag>
  );
}
