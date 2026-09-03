"use client";

import { useState, type CSSProperties } from "react";
import { Send, CheckCircle } from "lucide-react";
import { palette as P } from "@/lib/palette";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import contactBg from "@/img/contact.webp";

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
    background: "rgba(255, 255, 255, 0.7)",
    border: `1.5px solid ${focused === field ? P.burgundy : "rgba(255, 255, 255, 0.5)"}`,
    borderRadius: 10,
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 14,
    color: P.dark,
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxShadow: focused === field ? `0 0 0 3px rgba(128,0,32,0.07)` : "none",
  });


  return (
    <section
      id="contact"
      style={{
        background: P.ivory,
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Blurred background image (uncropped) */}
      <div
        style={{
          position: "absolute",
          inset: -20,
          backgroundImage: `url(${contactBg.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(2px)",
          zIndex: 0
        }}
      />

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
        <div className="reveal up" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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

        <div>
          <AnimatedSection delay={0.4} className="reveal up">
            {sent ? (
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.45)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  borderRadius: 20,
                  padding: "3rem",
                  border: `1px solid rgba(255, 255, 255, 0.4)`,
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
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
                  background: "rgba(255, 255, 255, 0.45)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  borderRadius: 20,
                  padding: "2.5rem",
                  border: `1px solid rgba(255, 255, 255, 0.4)`,
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
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
