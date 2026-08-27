"use client";

import type { IconType } from "react-icons";

// Simple Icons (brands/tech logos)
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiFigma, SiFramer, SiNodedotjs, SiPython, SiFastapi,
  SiPostgresql, SiMongodb, SiPrisma, SiDocker,
  SiGithub, SiVercel, SiLinux, SiSupabase,
  SiTensorflow, SiPytorch, SiPandas, SiJupyter,
  SiHuggingface, SiVuedotjs, SiAngular, SiSvelte,
  SiGraphql, SiRedis, SiKubernetes, SiFirebase,
  SiMysql, SiGit, SiJavascript, SiHtml5, SiCss,
  SiSass, SiWebpack, SiVite, SiJest, SiCplusplus,
  SiRust, SiGo, SiDjango, SiFlask, SiExpress,
  SiNestjs, SiStripe, SiSentry, SiNotion,
} from "react-icons/si";

// Fallback from lucide if needed
import { Code } from "lucide-react";

// Color map for authentic brand colors
const brandColors: Record<string, string> = {
  SiReact:       "#61DAFB",
  SiNextdotjs:   "#000000",
  SiTypescript:  "#3178C6",
  SiTailwindcss: "#06B6D4",
  SiFigma:       "#F24E1E",
  SiFramer:      "#0055FF",
  SiNodedotjs:   "#339933",
  SiPython:      "#3776AB",
  SiFastapi:     "#009688",
  SiPostgresql:  "#4169E1",
  SiMongodb:     "#47A248",
  SiPrisma:      "#2D3748",
  SiDocker:      "#2496ED",
  SiAmazonaws:   "#FF9900",
  SiGithub:      "#181717",
  SiVercel:      "#000000",
  SiLinux:       "#FCC624",
  SiSupabase:    "#3ECF8E",
  SiTensorflow:  "#FF6F00",
  SiPytorch:     "#EE4C2C",
  SiOpenai:      "#412991",
  SiPandas:      "#150458",
  SiJupyter:     "#F37626",
  SiHuggingface: "#FFD21E",
  SiVuedotjs:    "#4FC08D",
  SiAngular:     "#DD0031",
  SiSvelte:      "#FF3E00",
  SiGraphql:     "#E10098",
  SiRedis:       "#DC382D",
  SiKubernetes:  "#326CE5",
  SiFirebase:    "#FFCA28",
  SiMysql:       "#4479A1",
  SiGit:         "#F05032",
  SiJavascript:  "#F7DF1E",
  SiHtml5:       "#E34F26",
  SiCss3:        "#1572B6",
  SiSass:        "#CC6699",
  SiWebpack:     "#8DD6F9",
  SiVite:        "#646CFF",
  SiJest:        "#C21325",
  SiCplusplus:   "#00599C",
  SiRust:        "#000000",
  SiGo:          "#00ADD8",
  SiDjango:      "#092E20",
  SiFlask:       "#000000",
  SiExpress:     "#000000",
  SiNestjs:      "#E0234E",
  SiStripe:      "#635BFF",
  SiSentry:      "#362D59",
  SiNotion:      "#000000",
};

// Master icon registry
export const iconRegistry: Record<string, IconType> = {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiFigma, SiFramer, SiNodedotjs, SiPython, SiFastapi,
  SiPostgresql, SiMongodb, SiPrisma, SiDocker,
  SiGithub, SiVercel, SiLinux, SiSupabase,
  SiTensorflow, SiPytorch, SiPandas, SiJupyter,
  SiHuggingface, SiVuedotjs, SiAngular, SiSvelte,
  SiGraphql, SiRedis, SiKubernetes, SiFirebase,
  SiMysql, SiGit, SiJavascript, SiHtml5, SiCss,
  SiSass, SiWebpack, SiVite, SiJest, SiCplusplus,
  SiRust, SiGo, SiDjango, SiFlask, SiExpress,
  SiNestjs, SiStripe, SiSentry, SiNotion,
};

interface TechIconProps {
  icon: string;
  size?: number;
  useColor?: boolean;
  className?: string;
}

export function TechIcon({ icon, size = 18, useColor = false, className }: TechIconProps) {
  const IconComponent = iconRegistry[icon];
  
  if (!IconComponent) {
    // Graceful fallback to lucide Code icon
    return <Code size={size} className={className ?? "text-[#6b162c]"} />;
  }

  const color = useColor ? (brandColors[icon] ?? "#6b162c") : undefined;

  return (
    <IconComponent
      size={size}
      style={color ? { color } : undefined}
      className={!color ? (className ?? "text-[#6b162c]") : undefined}
    />
  );
}
