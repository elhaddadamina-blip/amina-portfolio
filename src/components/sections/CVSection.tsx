import { Download, Mail, GraduationCap, Code2, Terminal, Award } from "lucide-react";
import { palette as P } from "@/lib/palette";
import { cvHighlights } from "@/data";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const iconMap = { GraduationCap, Code2, Terminal, Award };

export function CVSection() {
  return (
    <section
      id="cv"
      style={{ background: P.burgundy, padding: "6rem 0", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          right: "-10%",
          top: "50%",
          transform: "translateY(-50%)",
          width: 500,
          height: 500,
          border: "80px solid rgba(245,245,220,0.04)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "-5%",
          top: "50%",
          transform: "translateY(-50%)",
          width: 350,
          height: 350,
          border: "50px solid rgba(245,245,220,0.06)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="two-col"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div className="reveal left">
            <AnimatedText text="Curriculum Vitae" className="eyebrow" effect="fade" style={{ color: "rgba(245,245,220,0.5)" }} />
            <AnimatedText
              text="Download my résumé & let's build something great"
              el="h2"
              effect="wipe"
              delay={0.2}
              style={{
                fontSize: "clamp(2rem,4vw,3rem)",
                fontWeight: 700,
                color: P.ivory,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                marginBottom: "1.25rem",
              }}
            />
            <AnimatedSection delay={0.4}>
              <p
                style={{
                  fontSize: 15,
                  color: "rgba(245,245,220,0.65)",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                }}
              >
                Full details of my academic background, technical skills, internship experiences, and
                personal projects — all in a clean one-page PDF.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#F5F5DC] text-[#800020] px-7 py-3.5 rounded-full font-bold text-sm shadow-md transition-all duration-250 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Download size={16} /> Download PDF
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-transparent text-[#F5F5DC] px-7 py-3.5 rounded-full font-semibold text-sm border-2 border-white/30 transition-all duration-250 hover:border-white/70 hover:bg-white/10"
                >
                  <Mail size={16} /> Contact Instead
                </a>
              </div>
            </AnimatedSection>
          </div>

          <div
            className="reveal right"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            {cvHighlights.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <AnimatedSection
                  key={item.label}
                  delay={0.2 + i * 0.15}
                  className="bg-white/10 rounded-2xl p-6 border border-white/15 transition-colors duration-200 hover:bg-white/15"
                >
                  <div style={{ marginBottom: 10 }}>
                    <Icon size={20} color="rgba(245,245,220,0.55)" />
                  </div>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "rgba(245,245,220,0.38)",
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: P.ivory,
                      lineHeight: 1.3,
                    }}
                  >
                    {item.val}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(245,245,220,0.5)",
                      marginTop: 3,
                    }}
                  >
                    {item.sub}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
