"use client";

import { useEffect, useRef, useState } from "react";
import {
  Award,
  BriefcaseBusiness,
  ChevronDown,
  ChevronRight,
  FileText,
  FolderKanban,
  HeartHandshake,
  Mail,
  Menu,
  UserRound,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/data";

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const mainLinks: NavItem[] = [
  { label: "About", href: "#about", icon: UserRound },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Skills", href: "#skills", icon: Wrench },
];

const secondaryLinks: NavItem[] = [
  { label: "Community", href: "#engagements", icon: HeartHandshake },
  { label: "Certifications", href: "#certifications", icon: Award },
];

const sectionIds = [
  "hero",
  "about",
  "projects",
  "experience",
  "skills",
  "engagements",
  "certifications",
  "cv",
  "contact",
];

// The underline belongs to EACH link, not to the <nav> element.
function desktopLinkClass(isActive: boolean) {
  return [
    "relative inline-flex h-10 items-center whitespace-nowrap px-3",
    "text-[13px] font-medium transition-colors duration-200",
    "after:absolute after:bottom-0 after:left-3 after:right-3",
    "after:h-[2px] after:rounded-full after:bg-[#6b162c]",
    "after:origin-center after:transition-transform after:duration-300",
    isActive
      ? "text-[#6b162c] after:scale-x-100"
      : "text-neutral-700 after:scale-x-0 hover:text-[#6b162c] hover:after:scale-x-100",
  ].join(" ");
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("hero");
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      setScrolled(window.scrollY > 24);

      let current = "hero";
      let closestTop = -Infinity;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const top = section.getBoundingClientRect().top;
        if (top <= 150 && top > closestTop) {
          current = id;
          closestTop = top;
        }
      }

      setActiveId(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: PointerEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMoreOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenus = () => {
    setMobileOpen(false);
    setMoreOpen(false);
  };

  const isMoreActive = secondaryLinks.some(
    (link) => link.href === `#${activeId}`
  );

  return (
  
<nav
  aria-label="Main navigation"
  className={`
    fixed left-0 right-0 top-0 z-[999]
    border-b
    transition-all duration-300 ease-in-out
    ${
      scrolled
        ? "border-[#6b162c]/10 bg-[#FAF8F5]/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(45,12,22,0.05)]"
        : "border-transparent bg-transparent hover:border-[#6b162c]/10 hover:bg-[#FAF8F5]/95 hover:backdrop-blur-xl"
    }
  `}
>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex h-[72px] items-center justify-between gap-4">
          {/* BRAND */}
          <a
            href="#hero"
            onClick={closeMenus}
            className="shrink-0 text-[15px] font-extrabold tracking-tight text-neutral-950 transition-colors hover:text-[#6b162c] sm:text-[17px]"
          >
            {siteConfig.name}
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-1 xl:flex">
            {mainLinks.map(({ label, href }) => {
              const isActive = activeId === href.slice(1);

              return (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenus}
                  aria-current={isActive ? "location" : undefined}
                  className={desktopLinkClass(isActive)}
                >
                  {label}
                </a>
              );
            })}

            {/* MORE DROPDOWN */}
            <div className="relative" ref={moreRef}>
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={moreOpen}
                aria-controls="navbar-more-menu"
                onClick={() => setMoreOpen((previous) => !previous)}
                className={`${desktopLinkClass(isMoreActive || moreOpen)} gap-1`}
              >
                More
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {moreOpen && (
                <div
                  id="navbar-more-menu"
                  className="absolute right-0 top-[calc(100%+12px)] w-56 rounded-2xl border border-neutral-200 bg-white p-2 shadow-[0_20px_55px_rgba(35,20,25,0.13)]"
                >
                  {secondaryLinks.map(({ label, href, icon: Icon }) => {
                    const isActive = activeId === href.slice(1);

                    return (
                      <a
                        key={href}
                        href={href}
                        onClick={closeMenus}
                        aria-current={isActive ? "location" : undefined}
                        className={`flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] font-medium transition-colors hover:bg-[#FAF8F5] hover:text-[#6b162c] ${
                          isActive ? "text-[#6b162c]" : "text-neutral-700"
                        }`}
                      >
                        <Icon size={17} className="text-[#6b162c]" />
                        {label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

         
        
{/* DESKTOP ACTIONS */}
<div className="hidden shrink-0 items-center gap-3 xl:flex">

  {/* VIEW CV */}
  <a
    href="/CV%20AMINA%20EL%20HADDAD.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group inline-flex h-10 items-center justify-center
      gap-2 whitespace-nowrap
      rounded-full border border-[#6b162c]
      bg-white/40 px-5
      text-[12px] font-semibold text-[#6b162c]
      transition-all duration-300
      hover:bg-[#6b162c] hover:text-white
      hover:shadow-md
    "
  >
    <FileText size={15} />
    View CV
  </a>

  {/* CONTACT */}
  <a
    href="#contact"
    onClick={closeMenus}
    className="
      inline-flex h-10 items-center
      justify-center gap-2 whitespace-nowrap
      rounded-full bg-[#6b162c]
      px-5 text-[12px] font-semibold text-white
      shadow-[0_6px_18px_rgba(107,22,44,0.18)]
      transition-all duration-300
      hover:bg-[#4b0718]
      hover:shadow-lg
    "
  >
    <Mail size={15} />
    Let&apos;s talk
  </a>

</div>

           
       

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="navbar-mobile-menu"
            onClick={() => {
              setMobileOpen((previous) => !previous);
              setMoreOpen(false);
            }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#6b162c]/15 text-[#6b162c] transition-colors hover:bg-[#6b162c]/[0.06] xl:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div
          id="navbar-mobile-menu"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-neutral-200 bg-[#FAF8F5] px-6 pb-6 pt-3 shadow-xl xl:hidden"
        >
          {[...mainLinks, ...secondaryLinks].map(({ label, href, icon: Icon }) => {
            const isActive = activeId === href.slice(1);

            return (
              <a
                key={href}
                href={href}
                onClick={closeMenus}
                aria-current={isActive ? "location" : undefined}
                className={`flex items-center justify-between border-b border-neutral-200/70 px-3 py-3.5 text-sm font-medium transition-colors hover:text-[#6b162c] ${
                  isActive ? "text-[#6b162c]" : "text-neutral-700"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} className={isActive ? "text-[#6b162c]" : "text-neutral-500"} />
                  {label}
                </span>
                <ChevronRight size={16} className="text-neutral-400" />
              </a>
            );
          })}

          <div className="mt-4 grid grid-cols-2 gap-3 pt-2">
            <a
              href="/CV%20AMINA%20EL%20HADDAD.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenus}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#6b162c]/35 px-3 py-3 text-sm font-semibold text-[#6b162c]"
            >
              <FileText size={16} /> View CV
            </a>
            <a
              href="#contact"
              onClick={closeMenus}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#6b162c] px-3 py-3 text-sm font-semibold text-white"
            >
              <Mail size={16} /> Let&apos;s talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
