export const palette = {
  burgundy: "#800020",
  burgundyAlt: "#6b162c",
  burgundyDk: "#5c0018",
  ivory: "#F5F5DC",
  ivoryWarm: "#FAF8F5",
  ivoryDk: "#EAE8C4",
  ivoryMd: "#DDD9B8",
  white: "#FFFFFF",
  dark: "#1C1917",
  muted: "#78716C",
  border: "#D4CFAA",
  borderLt: "#EAE6CC",
  glow: "rgba(128,0,32,0.10)",
} as const;

export type Palette = typeof palette;
