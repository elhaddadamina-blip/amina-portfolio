import { Mail, MapPin, GraduationCap, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { palette as P } from "@/lib/palette";
import { navLinks, projects, siteConfig } from "@/data";

export function Footer() {
  return (
    <footer style={{ background: P.dark, padding: "4rem 0 2rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
        <div
          className="ft-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  background: P.burgundy,
                  borderRadius: 9,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontStyle: "italic",
                  color: P.ivory,
                  fontWeight: 700,
                  fontSize: 17,
                }}
              >
                {siteConfig.initial}
              </div>
              <span style={{ fontWeight: 700, fontSize: 16, color: P.ivory }}>
                {siteConfig.name}
              </span>
            </div>
            <p
              style={{
                fontSize: 13,
                color: "rgba(245,245,220,0.65)",
                lineHeight: 1.7,
                maxWidth: 260,
                marginBottom: "1.25rem",
              }}
            >
              {siteConfig.footerBio}
            </p>

            {/* Social icons — array of components, not objects */}
            <div style={{ display: "flex", gap: 10 }}>
              {([
                { Icon: GithubIcon, label: "GitHub" },
                { Icon: LinkedinIcon, label: "LinkedIn" },
                { Icon: Mail, label: "Email" }
              ]).map(({ Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={label}
                  className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center text-white/60 transition-colors duration-200 hover:bg-[#800020] hover:text-[#F5F5DC]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: P.ivory, marginBottom: "1rem" }}>
              Navigation
            </div>
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="block text-xs text-white/40 hover:text-white transition-colors duration-200 mb-2"
              >
                {l}
              </a>
            ))}
          </div>

          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: P.ivory, marginBottom: "1rem" }}>
              Featured
            </div>
            {projects.slice(0, 4).map((p) => (
              <a
                key={p.id}
                href="#projects"
                className="block text-xs text-white/40 hover:text-white transition-colors duration-200 mb-2"
              >
                {p.title}
              </a>
            ))}
          </div>

          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: P.ivory, marginBottom: "1rem" }}>
              Contact
            </div>
            {(
              [
                { Icon: Mail, text: siteConfig.email },
                { Icon: MapPin, text: siteConfig.location },
                { Icon: GraduationCap, text: "M2 France — Sept. 2026" },
              ] as { Icon: React.ElementType; text: string }[]
            ).map(({ Icon, text }, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 10 }}>
                <Icon size={13} color="rgba(245,245,220,0.5)" style={{ marginTop: 1, flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: "rgba(245,245,220,0.65)", lineHeight: 1.4 }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(245,245,220,0.08)",
            paddingTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div
            style={{
              fontSize: 12,
              color: "rgba(245,245,220,0.55)",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            {siteConfig.copyright} <Heart size={11} color={P.burgundy} fill={P.burgundy} />{" "}
            {siteConfig.copyrightSub}
          </div>
          <BackToTopButton />
        </div>
      </div>
    </footer>
  );
}
