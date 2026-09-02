import React from "react";import type { IconType } from "react-icons";
import { Code } from "lucide-react";

// ── Simple Icons ───────────────────────────────────────────────────────────
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiAngular,
  SiVuedotjs,
  SiSvelte,
  SiFigma,
  SiFramer,
  SiHtml5,
  SiCss,
  SiVite,
  SiGraphql,
  // Backend
  SiSpring,
  SiPython,
  SiFastapi,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiSupabase,
  SiFirebase,
  // DevOps & Cloud
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiJenkins,
  SiGithub,
  SiGitlab,
  SiVercel,
  SiLinux,
  SiTerraform,
  SiAnsible,
  SiGit,
  // AI & Data
  SiTensorflow,
  SiPytorch,
  SiHuggingface,
  SiPandas,
  SiJupyter,
  SiApachespark,
  SiApachekafka,
  SiElasticsearch,
} from "react-icons/si";

// ── Font Awesome ───────────────────────────────────────────────────────────
import { FaJava } from "react-icons/fa";

// ── SVG fallbacks for icons missing in this react-icons build ─────────────
type SvgProps = { size?: number; className?: string };

const SvgAws = ({ size = 18, className = "" }: SvgProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.079-.423.079-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.264-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.778.778 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.07.223-.255.152-.384.384-.384.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.133.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.743.167-1.158.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.025-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607z" />
  </svg>
);

const SvgAzure = ({ size = 18, className = "" }: SvgProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.05 4.24L6.56 18.05l10.91.02L13.05 4.24zM8.89 6.4l-6.03 11.3L7.38 18 8.9 6.4zm6.26 0L16.62 18l4.52.01-6.03-11.61z" />
  </svg>
);

const SvgOpenAI = ({ size = 18, className = "" }: SvgProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.843-3.372L15.115 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.403-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
  </svg>
);

const SvgPowerBI = ({ size = 18, className = "" }: SvgProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4 20h2V9H4v11zm4 0h2V7H8v13zm4 0h2v-8h-2v8zm4 0h2V4h-2v16z" />
  </svg>
);

const SvgTableau = ({ size = 18, className = "" }: SvgProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.5 1v3.5H8V6h3.5v3.5H13V6h3.5V4.5H13V1zm-9 7v2.5H0V12h2.5v2.5H4V12h2.5V10.5H4V8zm17 0v2.5H17V12h2.5v2.5H21V12h2.5V10.5H21V8zM11.5 14.5V18H8v1.5h3.5V23H13v-3.5h3.5V18H13v-3.5z" />
  </svg>
);

// ── Brand tile color map ───────────────────────────────────────────────────
export const brandTileColor: Record<string, string> = {
  // Frontend
  SiReact:               "#087EA4",
  SiNextdotjs:           "#000000",
  SiTypescript:          "#3178C6",
  SiTailwindcss:         "#06B6D4",
  SiJavascript:          "#CA8A04",
  SiAngular:             "#C3002F",
  SiVuedotjs:            "#42B883",
  SiSvelte:              "#FF3E00",
  SiFigma:               "#F24E1E",
  SiFramer:              "#0055FF",
  SiHtml5:               "#E34F26",
  SiCss:                 "#1572B6",
  SiVite:                "#646CFF",
  SiGraphql:             "#E10098",
  // Backend
  FaJava:                "#E76F00",
  SiSpring:              "#6DB33F",
  SiPython:              "#3776AB",
  SiFastapi:             "#059669",
  SiNodedotjs:           "#22863A",
  SiNestjs:              "#E0234E",
  SiExpress:             "#444444",
  SiDjango:              "#092E20",
  SiFlask:               "#555555",
  SiPhp:                 "#777BB4",
  SiPostgresql:          "#336791",
  SiMysql:               "#00758F",
  SiMongodb:             "#47A248",
  SiRedis:               "#DC382D",
  SiPrisma:              "#1A202C",
  SiSupabase:            "#3ECF8E",
  SiFirebase:            "#DD2C00",
  // DevOps & Cloud
  SiDocker:              "#2496ED",
  SiKubernetes:          "#326CE5",
  SiAmazonwebservices:   "#FF9900",
  SiMicrosoftazure:      "#0078D4",
  SiGooglecloud:         "#4285F4",
  SiJenkins:             "#D33833",
  SiGithub:              "#24292E",
  SiGitlab:              "#FC6D26",
  SiVercel:              "#000000",
  SiLinux:               "#D97706",
  SiTerraform:           "#7B42BC",
  SiAnsible:             "#1A1918",
  SiGit:                 "#F05032",
  // AI & Data
  SiTensorflow:          "#FF6F00",
  SiPytorch:             "#EE4C2C",
  SiHuggingface:         "#D97706",
  SiOpenai:              "#10A37F",
  SiPandas:              "#150458",
  SiJupyter:             "#F37626",
  SiApachespark:         "#E25A1C",
  SiApachekafka:         "#231F20",
  SiElasticsearch:       "#005571",
  SiMicrosoftpowerbi:    "#F2C811",
  SiTableau:             "#E97627",
};

// ── Icon registry ──────────────────────────────────────────────────────────
// SVG fallbacks are cast to IconType so the registry stays uniformly typed.
export const iconRegistry: Record<string, IconType> = {
  // Frontend
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiAngular,
  SiVuedotjs,
  SiSvelte,
  SiFigma,
  SiFramer,
  SiHtml5,
  SiCss,
  SiVite,
  SiGraphql,
  // Backend
  FaJava,
  SiSpring,
  SiPython,
  SiFastapi,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiSupabase,
  SiFirebase,
  // DevOps & Cloud
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices: SvgAws       as unknown as IconType,
  SiMicrosoftazure:    SvgAzure     as unknown as IconType,
  SiGooglecloud,
  SiJenkins,
  SiGithub,
  SiGitlab,
  SiVercel,
  SiLinux,
  SiTerraform,
  SiAnsible,
  SiGit,
  // AI & Data
  SiTensorflow,
  SiPytorch,
  SiHuggingface,
  SiOpenai:            SvgOpenAI    as unknown as IconType,
  SiPandas,
  SiJupyter,
  SiApachespark,
  SiApachekafka,
  SiElasticsearch,
  SiMicrosoftpowerbi:  SvgPowerBI   as unknown as IconType,
  SiTableau:           SvgTableau   as unknown as IconType,
};

// ── TechIcon ───────────────────────────────────────────────────────────────
interface TechIconProps {
  icon: string;
  size?: number;
  className?: string;
}

export const TechIcon = React.memo(function TechIcon({
  icon,
  size = 18,
  className = "text-white",
}: TechIconProps) {
  const IconComponent = iconRegistry[icon];
  if (!IconComponent) {
    return <Code size={size} className={className} />;
  }
  return <IconComponent size={size} className={className} />;
});

// ── TechTile ───────────────────────────────────────────────────────────────
interface TechTileProps {
  icon: string;
  size?: number;
  tileSize?: string;
  radius?: string;
}

export const TechTile = React.memo(function TechTile({
  icon,
  size = 28,
  tileSize = "w-16 h-16",
  radius = "rounded-2xl",
}: TechTileProps) {
  const bg = brandTileColor[icon] ?? "#6b162c";

  return (
    <div
      className={`
        ${tileSize} ${radius}
        flex items-center justify-center
        shadow-md shrink-0
        transition-transform duration-300
        group-hover:scale-105
      `}
      style={{ backgroundColor: bg }}
    >
      <TechIcon icon={icon} size={size} className="text-white" />
    </div>
  );
});
