"use client";

import { useState, type CSSProperties } from "react";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { palette as P } from "@/lib/palette";
import { siteConfig } from "@/data";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const inputStyle = (field: string): CSSProperties => ({
    width: "100%",
    padding: "13px 16px",
    background: P.ivory,
    border: `1.5px solid ${focused === field ? P.burgundy : P.border}`,
    borderRadius: 10,
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 14,
    color: P.dark,
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxShadow: focused === field ? `0 0 0 3px rgba(128,0,32,0.07)` : "none",
  });

  const contactItems = [
    { Icon: Mail, label: "Email", val: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { Icon: MapPin, label: "Location", val: siteConfig.location, href: "#" },
    { Icon: LinkedinIcon, label: "LinkedIn", val: siteConfig.linkedin, href: siteConfig.linkedinUrl },
  ];

  const socialItems = [
    { Icon: GithubIcon, href: siteConfig.githubUrl, label: "GitHub" },
    { Icon: LinkedinIcon, href: siteConfig.linkedinUrl, label: "LinkedIn" },
    { Icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
  ];

  return (
    <section id="contact" style={{ background: P.ivory, padding: "6rem 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
        <div className="reveal up" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <AnimatedText text="Get In Touch" className="eyebrow" effect="fade" style={{ justifyContent: "center" }} />
          <AnimatedText
            text="Let's start a conversation about your next project"
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
          style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "3rem", alignItems: "start" }}
        >
          <div className="reveal left">
            <AnimatedSection delay={0.4}>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 15,
                  color: P.muted,
                  lineHeight: 1.8,
                  marginBottom: "2.5rem",
                }}
              >
                Whether you&apos;re looking for an intern, a collaborator, or just want to chat about AI and
                software engineering — my inbox is always open.
              </p>
            </AnimatedSection>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: "2.5rem" }}>
              {contactItems.map(({ Icon, label, val, href }, i) => (
                <AnimatedSection key={label} delay={0.5 + i * 0.1}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    background: P.white,
                    borderRadius: 14,
                    padding: "14px 18px",
                    border: `1px solid ${P.border}`,
                    textDecoration: "none",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.border = `1px solid ${P.burgundy}`;
                    el.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.border = `1px solid ${P.border}`;
                    el.style.transform = "";
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: P.glow,
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color={P.burgundy} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 11,
                        color: P.muted,
                        fontWeight: 500,
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 14,
                        color: P.dark,
                        fontWeight: 600,
                      }}
                    >
                      {val}
                    </div>
                  </div>
                </a>
              </AnimatedSection>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {socialItems.map(({ Icon, href, label }, i) => (
                <AnimatedSection key={label} delay={0.8 + i * 0.1}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: P.white,
                    border: `1px solid ${P.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: P.muted,
                    textDecoration: "none",
                    transition: "all 0.22s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = P.burgundy;
                    el.style.color = P.ivory;
                    el.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = P.white;
                    el.style.color = P.muted;
                    el.style.transform = "";
                  }}
                >
                  <Icon size={18} />
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.6} className="reveal right">
            {sent ? (
              <div
                style={{
                  background: P.white,
                  borderRadius: 20,
                  padding: "3rem",
                  border: `1px solid ${P.border}`,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    background: "#ECFDF5",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                  }}
                >
                  <CheckCircle size={32} color="#059669" />
                </div>
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: P.dark,
                    marginBottom: 8,
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 14,
                    color: P.muted,
                    lineHeight: 1.7,
                  }}
                >
                  Thank you — I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  style={{
                    marginTop: "1.5rem",
                    background: P.burgundy,
                    color: P.ivory,
                    border: "none",
                    padding: "10px 24px",
                    borderRadius: 8,
                    cursor: "pointer",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                style={{
                  background: P.white,
                  borderRadius: 20,
                  padding: "2.5rem",
                  border: `1px solid ${P.border}`,
                }}
              >
                <div
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}
                >
                  {(["name", "email"] as const).map((f) => (
                    <div key={f}>
                      <label
                        htmlFor={f}
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 12,
                          fontWeight: 600,
                          color: P.dark,
                          display: "block",
                          marginBottom: 6,
                        }}
                      >
                        {f === "name" ? "Name" : "Email"}
                      </label>
                      <input
                        id={f}
                        required
                        type={f === "email" ? "email" : "text"}
                        value={form[f]}
                        onChange={(e) => setForm((v) => ({ ...v, [f]: e.target.value }))}
                        onFocus={() => setFocused(f)}
                        onBlur={() => setFocused(null)}
                        placeholder={f === "name" ? "Your name" : "your@email.com"}
                        style={inputStyle(f)}
                      />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label
                    htmlFor="subject"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      color: P.dark,
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    value={form.subject}
                    onChange={(e) => setForm((v) => ({ ...v, subject: e.target.value }))}
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                    placeholder="What's this about?"
                    style={inputStyle("subject")}
                  />
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                  <label
                    htmlFor="message"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      color: P.dark,
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder="Tell me about your project or opportunity..."
                    style={{ ...inputStyle("message"), resize: "vertical", minHeight: 130 } as CSSProperties}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    background: P.burgundy,
                    color: P.ivory,
                    border: "none",
                    padding: 14,
                    borderRadius: 10,
                    cursor: "pointer",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    transition: "all 0.25s",
                    boxShadow: "0 4px 16px rgba(128,0,32,0.25)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = P.burgundyDk;
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = P.burgundy;
                    el.style.transform = "";
                  }}
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
