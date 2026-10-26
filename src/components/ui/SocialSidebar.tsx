
"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const EMAIL = "elhaddadamina410@gmail.com";

// Open Gmail directly with recipient pre-filled
const GMAIL_URL =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`;

const socials = [
  {
    Icon: Github,
    href: "https://github.com/aminael24",
    label: "GitHub",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/amina-el-haddad-476210341/",
    label: "LinkedIn",
  },
  {
    Icon: Mail,
    href: GMAIL_URL,
    label: "Gmail",
  },
];

export function SocialSidebar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`
        hidden md:flex
        fixed left-4 top-1/2 -translate-y-1/2 z-50
        flex-col items-center gap-1
        transition-all duration-700
        ${
          visible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-6"
        }
      `}
    >
      {/* Top line */}
      <div className="mb-2 h-16 w-px bg-gradient-to-b from-transparent to-neutral-400/40" />

      {socials.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="
            group relative flex h-11 w-11
            items-center justify-center
            rounded-xl text-neutral-400
            transition-all duration-300
            hover:-translate-x-1
            hover:text-[#6b162c]
          "
        >
          <Icon size={30} />

          {/* Tooltip */}
          <span
            className="
              pointer-events-none absolute left-11
              whitespace-nowrap rounded-lg
              bg-neutral-900 px-2.5 py-1
              text-xs font-medium text-white
              opacity-0 translate-x-1
              transition-all duration-200
              group-hover:translate-x-0
              group-hover:opacity-100
            "
          >
            {label}
          </span>
        </a>
      ))}

      {/* Bottom line */}
      <div className="mt-2 h-16 w-px bg-gradient-to-b from-neutral-400/40 to-transparent" />
    </div>
  );
}
