"use client";

import { useState } from "react";
import { GraduationCap, MapPin, BookOpen, Award, ChevronDown, ChevronRight } from "lucide-react";
import { palette as P } from "@/lib/palette";
import { ensaCurriculum, m2Modules } from "@/data";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Education() {
  const [ensaOpen, setEnsaOpen] = useState(false);
  const [ensaYear, setEnsaYear] = useState<string | null>(null);
  const [m2Open, setM2Open] = useState(false);

  return (
    <section id="education" style={{ background: P.white, padding: "6rem 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
        <div className="reveal up" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <AnimatedText text="Education" className="eyebrow" effect="fade" style={{ justifyContent: "center" }} />
          <AnimatedText
            text="Academic journey across two countries"
            el="h2"
            effect="wipe"
            delay={0.2}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.8rem,4vw,2.8rem)",
              fontWeight: 700,
              color: P.dark,
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
            }}
          />
        </div>

        <div
          className="two-col"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}
        >
          <AnimatedSection
            delay={0.4}
            className="reveal left"
            style={{
              background: P.ivory,
              borderRadius: 20,
              overflow: "hidden",
              border: `1px solid ${P.border}`,
            }}
          >
            <div
              style={{
                background: `linear-gradient(135deg,${P.burgundy},${P.burgundyDk})`,
                padding: "2rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    background: "rgba(245,245,220,0.15)",
                    borderRadius: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={26} color={P.ivory} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      color: "rgba(245,245,220,0.5)",
                      marginBottom: 4,
                    }}
                  >
                    2020 — 2025
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700,
                      fontSize: 17,
                      color: P.ivory,
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    Engineering Degree
                  </h3>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 13,
                      color: "rgba(245,245,220,0.7)",
                      marginTop: 4,
                    }}
                  >
                    Computer Engineering + Data Science & AI
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 8 }}>
                    <MapPin size={12} color="rgba(245,245,220,0.5)" />
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 12,
                        color: "rgba(245,245,220,0.7)",
                      }}
                    >
                      ENSA Tangier 🇲🇦
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "1.25rem" }}>
                {["5-Year Programme", "60+ Modules", "Bac+5 Engineering", "CTI Accredited"].map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setEnsaOpen(!ensaOpen)}
                aria-expanded={ensaOpen}
                aria-controls="ensa-curriculum-panel"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  background: "none",
                  border: `1px solid ${P.border}`,
                  borderRadius: 10,
                  padding: "12px 16px",
                  cursor: "pointer",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: P.dark,
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = P.ivoryDk;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "none";
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <BookOpen size={14} color={P.burgundy} /> View Full Curriculum
                </span>
                <ChevronDown
                  size={16}
                  style={{
                    transform: ensaOpen ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.3s",
                  }}
                />
              </button>
              {ensaOpen && (
                <div id="ensa-curriculum-panel" style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: 8 }}>
                  {Object.entries(ensaCurriculum).map(([yr, mods]) => (
                    <div key={yr}>
                      <button
                        onClick={() => setEnsaYear(ensaYear === yr ? null : yr)}
                        aria-expanded={ensaYear === yr}
                        aria-controls={`ensa-year-panel-${yr.replace(/\s+/g, '-')}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "8px 0",
                          borderBottom: `1px solid ${P.borderLt}`,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: 13,
                            fontWeight: 600,
                            color: P.dark,
                          }}
                        >
                          {yr}
                        </span>
                        <ChevronRight
                          size={14}
                          color={P.muted}
                          style={{
                            transform: ensaYear === yr ? "rotate(90deg)" : "rotate(0)",
                            transition: "transform 0.25s",
                          }}
                        />
                      </button>
                      {ensaYear === yr && (
                        <div
                          id={`ensa-year-panel-${yr.replace(/\s+/g, '-')}`}
                          className="anim-slide-down"
                          style={{
                            paddingTop: 6,
                            paddingBottom: 4,
                            paddingLeft: 8,
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                          }}
                        >
                          {mods.map((m) => (
                            <div key={m} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                              <div
                                style={{
                                  width: 5,
                                  height: 5,
                                  borderRadius: "50%",
                                  background: P.burgundy,
                                  marginTop: 7,
                                  flexShrink: 0,
                                }}
                              />
                              <span
                                style={{
                                  fontFamily: "'Montserrat', sans-serif",
                                  fontSize: 12,
                                  color: P.muted,
                                  lineHeight: 1.5,
                                }}
                              >
                                {m}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection
            delay={0.6}
            className="reveal right"
            style={{
              background: P.ivory,
              borderRadius: 20,
              overflow: "hidden",
              border: `1px solid ${P.border}`,
            }}
          >
            <div style={{ background: "linear-gradient(135deg,#1a1a2e,#16213e)", padding: "2rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Award size={26} color={P.ivory} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 12,
                      letterSpacing: "0.1em",
                      color: "rgba(255,255,255,0.7)",
                      marginBottom: 4,
                    }}
                  >
                    2025 — 2026
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700,
                      fontSize: 17,
                      color: P.ivory,
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    Master&apos;s Degree M2
                  </h3>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.7)",
                      marginTop: 4,
                    }}
                  >
                    DOSI — Développement Logiciel des SI
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 8 }}>
                    <MapPin size={12} color="rgba(255,255,255,0.5)" />
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 12,
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      France 🇫🇷 — Autumn 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ padding: "1.5rem" }}>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 13,
                  color: P.muted,
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                High-level training in new technologies and industrialisation tools currently in use in
                development and maintenance of modern Information Systems, with multicultural
                communication exposure.
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "1.5rem" }}>
                {["30 ECTS S9", "30 ECTS S10", "6-Month Internship", "Agile Project"].map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setM2Open(!m2Open)}
                aria-expanded={m2Open}
                aria-controls="m2-curriculum-panel"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  background: "none",
                  border: `1px solid ${P.border}`,
                  borderRadius: 10,
                  padding: "12px 16px",
                  cursor: "pointer",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: P.dark,
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = P.ivoryDk;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "none";
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <BookOpen size={14} color={P.burgundy} /> View Programme Modules
                </span>
                <ChevronDown
                  size={16}
                  style={{
                    transform: m2Open ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.3s",
                  }}
                />
              </button>
              {m2Open && (
                <div style={{ marginTop: "1rem" }}>
                  {Object.entries(m2Modules).map(([sem, mods]) => (
                    <div key={sem} style={{ marginBottom: "1rem" }}>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 12,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          color: P.burgundy,
                          marginBottom: 8,
                        }}
                      >
                        {sem}
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {mods.map((m) => (
                          <div
                            key={m.name}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              padding: "8px 12px",
                              background: P.white,
                              borderRadius: 8,
                              border: `1px solid ${P.borderLt}`,
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: 12,
                                color: P.dark,
                              }}
                            >
                              {m.name}
                            </span>
                            <span
                              style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: 11,
                                color: P.burgundy,
                                fontWeight: 600,
                                marginLeft: 8,
                              }}
                            >
                              {m.ects} ECTS
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
