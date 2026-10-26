
import React from "react";
import type { IconType } from "react-icons";
import { Code2 } from "lucide-react";

import {
  // FRONTEND
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiAngular,
  SiVuedotjs,
  SiSvelte,
  SiFigma,
  SiHtml5,
  SiCss,
  SiVite,
  SiGraphql,
  SiFlutter,
  SiDart,

  // BACKEND
  SiSpring,
  SiPython,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiPhp,
  SiLaravel,
  SiDotnet,
  SiKeycloak,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiSqlite,
  SiSocketdotio,
  SiPrisma,
  SiSupabase,
  SiFirebase,

  // DEVOPS
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiVercel,
  SiLinux,
  SiGit,
  SiNginx,

  // AI & DATA
  SiTensorflow,
  SiPytorch,
  SiHuggingface,
  SiPandas,
  SiJupyter,
  SiApachekafka,
  SiStreamlit,
  SiKeras,
  SiOpencv,
} from "react-icons/si";

import { FaJava, FaAws } from "react-icons/fa";

// ======================================================
// REAL BRAND LOGO URLS
// ======================================================

export const realBrandLogos: Record<string, string> = {
  SiDbt:
    "https://api.iconify.design/logos/dbt-icon.svg",

  SiTalend:
    "https://cdn.simpleicons.org/talend/FF6D70",

  PentahoPDI:
    "https://cdn.worldvectorlogo.com/logos/pentaho-2.svg",

  SiOllama:
    "https://cdn.simpleicons.org/ollama/111111",

  SiOpenai:
    "https://cdn.simpleicons.org/openai/111111",

  SiMicrosoftpowerbi:
    "https://api.iconify.design/logos/microsoft-power-bi.svg",

  DAX:
    "https://api.iconify.design/logos/microsoft-power-bi.svg",

  SiDax:
    "https://api.iconify.design/logos/microsoft-power-bi.svg",

  PowerQuery:
    "https://api.iconify.design/logos/microsoft-power-bi.svg",

  SiPowerquery:
    "https://api.iconify.design/logos/microsoft-power-bi.svg",
};

// ======================================================
// REAL LANGGRAPH LOGO — BIRD + GRAPH
// Embedded SVG; no external image required.
// ======================================================

function LangGraphLogo({
  size = 38,
}: {
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="block"
    >
      <path
        fill="#1C3C3C"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.099 6H17.9C21.264 6 24 8.692 24 12s-2.736 6-6.099 6H6.1C2.736 18 0 15.308 0 12s2.736-6 6.099-6zm5.419 9.3c.148.154.367.146.561.106l.002.001c.09-.072-.038-.163-.16-.25-.074-.052-.145-.102-.166-.147.068-.08-.133-.265-.289-.408a1.52 1.52 0 01-.15-.148c-.11-.119-.155-.268-.2-.418-.03-.1-.06-.2-.11-.292-.304-.694-.653-1.383-1.143-1.97-.315-.39-.674-.74-1.033-1.09a19.384 19.384 0 01-.683-.688c-.226-.229-.362-.511-.499-.794-.114-.236-.228-.473-.396-.68-.507-.735-2.107-.936-2.342.104 0 .032-.01.052-.039.073-.13.094-.245.2-.342.327-.238.326-.274.877.022 1.17l.001-.019c.01-.147.02-.286.139-.391.228.193.576.262.841.117.32.45.422.995.525 1.54.085.456.17.912.382 1.316l.014.022c.124.203.25.41.41.587.059.089.178.184.297.279.157.125.314.25.329.359v.143c-.001.285-.002.58.184.813.103.205-.15.41-.352.385-.112.015-.233-.014-.354-.042-.165-.04-.329-.078-.462-.003-.038.04-.091.04-.145.042-.064.002-.129.004-.167.07-.008.019-.026.04-.045.063-.042.05-.087.105-.033.146l.015-.01c.082-.062.16-.12.27-.084-.014.08.039.102.092.123l.027.012a.344.344 0 01-.008.056c-.009.045-.017.088.018.127a.598.598 0 00.046-.054c.037-.046.073-.092.139-.11.144.19.289.111.471.013.206-.111.459-.248.81-.055-.135-.006-.255.01-.345.12-.023.024-.042.052-.002.084.207-.132.294-.085.375-.04.06.032.115.063.212.024l.07-.036c.155-.083.314-.166.499-.137-.139.039-.188.125-.242.218-.026.047-.054.095-.094.14-.021.021-.03.046-.007.08.29-.023.4-.095.548-.192.07-.046.15-.099.261-.154.124-.075.248-.027.368.02.13.05.255.098.371-.014.037-.033.083-.034.129-.034.016 0 .033 0 .05-.002-.037-.19-.24-.188-.448-.186-.24.003-.483.006-.475-.289.222-.149.224-.407.226-.651 0-.06 0-.117.005-.173.163.09.336.16.508.229.162.065.323.13.474.21.158.25.404.58.732.558.008-.026.016-.047.026-.073.019.004.039.008.059.014.086.02.178.044.223-.056zm6.429-2.829c.19.186.447.29.716.29.269 0 .526-.104.716-.29a.98.98 0 00.297-.7.98.98 0 00-.297-.7 1.024 1.024 0 00-1.08-.224l-.58-.831-.405.272.583.835a.978.978 0 00.05 1.348zm-1.817-2.69a1.03 1.03 0 001.056-.095.991.991 0 00.363-.507.97.97 0 00-.016-.62.994.994 0 00-.39-.488 1.028 1.028 0 00-1.298.14.987.987 0 00-.263.856.98.98 0 00.187.42c.095.125.218.225.36.294zm0 5.752a1.032 1.032 0 001.056-.095.991.991 0 00.363-.507.97.97 0 00-.016-.62.994.994 0 00-.39-.488 1.027 1.027 0 00-1.298.14.986.986 0 00-.263.856.98.98 0 00.187.42c.095.125.218.225.36.294zm.93-3.516v-.492h-1.55a.977.977 0 00-.217-.404l.584-.847-.425-.276-.583.847a1.023 1.023 0 00-1.047.23.973.973 0 00-.296.696c0 .261.107.512.296.696a1.023 1.023 0 001.047.23l.583.847.42-.276-.579-.847a.977.977 0 00.217-.404h1.55z"
      />
    </svg>
  );
}

// ======================================================
// MICROSOFT AZURE LOGO
// ======================================================

function AzureLogo({
  size = 28,
}: {
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.05 4.24L6.56 18.05l10.91.02L13.05 4.24zM8.89 6.4l-6.03 11.3L7.38 18 8.9 6.4zm6.26 0L16.62 18l4.52.01-6.03-11.61z" />
    </svg>
  );
}

// ======================================================
// BRAND COLORS
// ======================================================

export const brandTileColor: Record<string, string> = {
  // FRONTEND
  SiReact: "#087EA4",
  SiNextdotjs: "#111111",
  SiTypescript: "#3178C6",
  SiTailwindcss: "#06B6D4",
  SiJavascript: "#CA8A04",
  SiAngular: "#C3002F",
  SiVuedotjs: "#42B883",
  SiSvelte: "#FF3E00",
  SiFigma: "#F24E1E",
  SiHtml5: "#E34F26",
  SiCss: "#1572B6",
  SiVite: "#646CFF",
  SiGraphql: "#E10098",
  SiFlutter: "#02569B",
  SiDart: "#0175C2",

  // BACKEND
  FaJava: "#E76F00",
  SiSpring: "#6DB33F",
  SiPython: "#3776AB",
  SiNodedotjs: "#22863A",
  SiNestjs: "#E0234E",
  SiExpress: "#444444",
  SiDjango: "#092E20",
  SiFlask: "#444444",
  SiPhp: "#777BB4",
  SiLaravel: "#FF2D20",
  SiDotnet: "#512BD4",
  SiKeycloak: "#4D4D4D",
  SiPostgresql: "#336791",
  SiMysql: "#00758F",
  SiMongodb: "#47A248",
  SiRedis: "#DC382D",
  SiSqlite: "#003B57",
  SiSocketdotio: "#222222",
  SiPrisma: "#1A202C",
  SiSupabase: "#3ECF8E",
  SiFirebase: "#DD2C00",

  // DEVOPS
  SiDocker: "#2496ED",
  SiDockercompose: "#2496ED",
  SiKubernetes: "#326CE5",
  SiAmazonwebservices: "#FF9900",
  SiMicrosoftazure: "#0078D4",
  SiGooglecloud: "#4285F4",
  SiGithub: "#24292E",
  SiGithubactions: "#2088FF",
  SiGitlab: "#FC6D26",
  SiVercel: "#111111",
  SiLinux: "#D97706",
  SiGit: "#F05032",
  SiNginx: "#009639",

  // DATA & AI
  SiTensorflow: "#FF6F00",
  SiPytorch: "#EE4C2C",
  SiHuggingface: "#D97706",
  SiOpenai: "#10A37F",
  SiPandas: "#150458",
  SiJupyter: "#F37626",
  SiApachekafka: "#231F20",
  SiStreamlit: "#FF4B4B",
  SiKeras: "#D00000",
  SiOpencv: "#5C3EE8",

  // ADDITIONAL BRAND LOGOS
  SiDbt: "#FF694B",
  SiTalend: "#FF6D70",
  PentahoPDI: "#005AA7",
  SiLanggraph: "#1C3C3C",
  SiOllama: "#111111",
  SiMicrosoftpowerbi: "#F2C811",
  DAX: "#F2C811",
  SiDax: "#F2C811",
  PowerQuery: "#217346",
  SiPowerquery: "#217346",
};

// ======================================================
// ICON REGISTRY
// ======================================================

export const iconRegistry: Record<string, IconType> = {
  // FRONTEND
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiAngular,
  SiVuedotjs,
  SiSvelte,
  SiFigma,
  SiHtml5,
  SiCss,
  SiVite,
  SiGraphql,
  SiFlutter,
  SiDart,

  // BACKEND
  FaJava,
  SiSpring,
  SiPython,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiPhp,
  SiLaravel,
  SiDotnet,
  SiKeycloak,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiSqlite,
  SiSocketdotio,
  SiPrisma,
  SiSupabase,
  SiFirebase,

  // DEVOPS
  SiDocker,
  SiDockercompose: SiDocker,
  SiKubernetes,
  SiAmazonwebservices: FaAws,
  SiGooglecloud,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiVercel,
  SiLinux,
  SiGit,
  SiNginx,

  // DATA & AI
  SiTensorflow,
  SiPytorch,
  SiHuggingface,
  SiPandas,
  SiJupyter,
  SiApachekafka,
  SiStreamlit,
  SiKeras,
  SiOpencv,
};

// ======================================================
// REMOTE BRAND IMAGE
// ======================================================

function BrandImage({
  src,
  size,
}: {
  src: string;
  size: number;
}) {
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed) {
    return <Code2 size={size} className="text-[#6b162c]" />;
  }

  return (
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="block max-h-full max-w-full object-contain"
    />
  );
}

// ======================================================
// TECH ICON
// ======================================================

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
  // Real embedded LangGraph bird logo.
  if (icon === "SiLanggraph") {
    return <LangGraphLogo size={size} />;
  }

  if (icon === "SiMicrosoftazure") {
    return <AzureLogo size={size} />;
  }

  // Real remote brand logos.
  const image = realBrandLogos[icon];

  if (image) {
    return <BrandImage src={image} size={size} />;
  }

  // Existing react-icons logos.
  const IconComponent = iconRegistry[icon];

  if (IconComponent) {
    return (
      <IconComponent
        size={size}
        className={className}
      />
    );
  }

  return <Code2 size={size} className={className} />;
});

// ======================================================
// TECH TILE
// ======================================================

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

  const isSpecialLogo =
    icon === "SiLanggraph" ||
    Boolean(realBrandLogos[icon]);

  // Show original brand artwork on a white background.
  if (isSpecialLogo) {
    return (
      <div
        className={`${tileSize} ${radius} flex shrink-0 items-center justify-center overflow-hidden border border-neutral-100 bg-white p-2 shadow-sm transition-transform duration-300 group-hover:scale-105`}
      >
        <TechIcon
          icon={icon}
          size={icon === "SiLanggraph" ? 42 : 38}
        />
      </div>
    );
  }

  // Existing white icons on colored squares.
  return (
    <div
      className={`${tileSize} ${radius} flex shrink-0 items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105`}
      style={{ backgroundColor: bg }}
    >
      <TechIcon
        icon={icon}
        size={size}
        className="text-white"
      />
    </div>
  );
});
