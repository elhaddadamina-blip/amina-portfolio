
import {
  ArrowUpRight,
  Mail,
} from "lucide-react";

import {
  GithubIcon,
  LinkedinIcon,
} from "@/components/ui/BrandIcons";

import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { siteConfig } from "@/data";

const EMAIL = "elhaddadamina410@gmail.com";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "GitHub",
    icon: GithubIcon,
    href: "https://github.com/aminael24",
  },
  {
    label: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/amina-el-haddad-476210341/",
  },
  {
    label: "Gmail",
    icon: Mail,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`,
  },
];

export function Footer() {
  return (
    <footer className="bg-[#21191c] text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* MAIN CONTENT */}
        <div className="flex flex-col justify-between gap-8 py-10 md:flex-row md:items-center md:py-12">

          {/* IDENTITY */}
          <div>
            <a
              href="#hero"
              className="text-lg font-bold tracking-tight text-white transition-colors hover:text-[#e5b3c1]"
            >
              {siteConfig.name}
            </a>

            <p className="mt-2 text-[13px] leading-relaxed text-white/55">
              Data Engineering · Artificial Intelligence · Software Engineering
            </p>

            <p className="mt-1 text-xs text-white/40">
              Based in France · Open to internship opportunities
            </p>
          </div>

          {/* NAVIGATION & SOCIALS */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap items-center gap-x-5 gap-y-3"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white/60 transition-all duration-200 hover:border-[#a34b65] hover:bg-[#6b162c] hover:text-white"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-5 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <BackToTopButton />
        </div>
      </div>
    </footer>
  );
}
