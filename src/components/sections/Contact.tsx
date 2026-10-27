
"use client";

import { useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const EMAIL = "elhaddadamina410@gmail.com";

const LINKEDIN =
  "https://www.linkedin.com/in/amina-el-haddad-476210341/";

const GITHUB = "https://github.com/aminael24";

const subjects = [
  "Internship opportunity",
  "Data Engineering",
  "Artificial Intelligence / ML",
  "Backend Development",
  "Collaboration",
  "Other",
];

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type EmailProvider = "gmail" | "outlook" | "default";

const inputClass =
  "w-full rounded-xl border border-neutral-200 bg-[#FAF8F5] px-4 py-3.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-[#6b162c]/60 focus:bg-white focus:ring-2 focus:ring-[#6b162c]/10";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "Internship opportunity",
    message: "",
  });

  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [fallbackUrl, setFallbackUrl] = useState("");

  function update(field: keyof ContactForm, value: string) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setFeedback("");
    setFallbackUrl("");
  }

  function emailContent() {
    const subject =
      `[Portfolio] ${form.subject} - ${form.name.trim()}`;

    const body = [
      "Hello Amina,",
      "",
      form.message.trim(),
      "",
      "Best regards,",
      form.name.trim(),
      `Email: ${form.email.trim()}`,
    ].join("\n");

    return { subject, body };
  }

  function getEmailUrls() {
    const { subject, body } = emailContent();

    const mailtoUrl =
      `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    const gmailParams = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: EMAIL,
      su: subject,
      body,
    });

    const gmailUrl =
      `https://mail.google.com/mail/?${gmailParams.toString()}`;

    const outlookParams = new URLSearchParams({
      to: EMAIL,
      subject,
      body,
    });

    const outlookUrl =
      "https://outlook.live.com/mail/0/deeplink/compose?" +
      outlookParams.toString();

    return {
      mailtoUrl,
      gmailUrl,
      outlookUrl,
    };
  }

  function openEmail(provider: EmailProvider) {
    if (!formRef.current?.reportValidity()) {
      return;
    }

    const { mailtoUrl, gmailUrl, outlookUrl } = getEmailUrls();

    const isMobile =
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    setFeedback("");
    setFallbackUrl("");

    // Open the device's default email application.
    if (provider === "default") {
      window.location.href = mailtoUrl;
      return;
    }

    // Mobile Gmail:
    // mailto is more reliable than Gmail Web compose
    // when Android redirects mail.google.com to Gmail.
    if (provider === "gmail" && isMobile) {
      window.location.href = mailtoUrl;
      return;
    }

    // Outlook opens Outlook Web on desktop and mobile.
    if (provider === "outlook") {
      if (isMobile) {
        window.location.href = outlookUrl;
        return;
      }

      const newTab = window.open(
        outlookUrl,
        "_blank",
        "noopener,noreferrer"
      );

      if (!newTab) {
        setFallbackUrl(outlookUrl);
        setFeedback(
          "If Outlook did not open, use the link below."
        );
      }

      return;
    }

    // Desktop Gmail
    const newTab = window.open(
      gmailUrl,
      "_blank",
      "noopener,noreferrer"
    );

    if (!newTab) {
      setFallbackUrl(gmailUrl);
      setFeedback(
        "If Gmail did not open, use the link below."
      );
    } else {
      setFeedback(
        "Review your message in Gmail and click Send."
      );
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    openEmail("gmail");
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[#FAF8F5] py-12 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">

        {/* SECTION HEADER */}
        <AnimatedSection>
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6b162c]">
            <Mail size={16} />
            Get in touch
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-950 md:text-5xl">
            Let&apos;s connect.
          </h2>

          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-neutral-600">
            Have an internship opportunity, a data or AI project,
            or a collaboration in mind? Feel free to reach out.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 items-start gap-6 lg:mt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">

          {/* LEFT: CONTACT INFORMATION */}
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6 md:p-8">

              <h3 className="text-xl font-bold text-neutral-900">
                Contact information
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                I&apos;m currently studying in France and looking
                for a six-month end-of-studies internship
                starting in April 2027.
              </p>

              <div className="mt-7 space-y-5">

                {/* LOCATION */}
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6b162c]/10 text-[#6b162c]">
                    <MapPin size={19} />
                  </span>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-semibold text-neutral-900">
                      France
                    </p>

                    <p className="text-xs text-neutral-500">
                      Open to opportunities across France
                    </p>
                  </div>
                </div>

                {/* AVAILABILITY */}
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6b162c]/10 text-[#6b162c]">
                    <BriefcaseBusiness size={19} />
                  </span>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                      Availability
                    </p>

                    <p className="mt-1 text-sm font-semibold text-neutral-900">
                      April 2027 · 6 months
                    </p>

                    <p className="text-xs text-neutral-500">
                      End-of-studies internship
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6b162c]/10 text-[#6b162c]">
                    <Mail size={19} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                      Email
                    </p>

                    <a
                      href={`mailto:${EMAIL}`}
                      className="mt-1 block break-all text-sm font-semibold text-neutral-900 hover:text-[#6b162c]"
                    >
                      {EMAIL}
                    </a>

                    <button
                      type="button"
                      onClick={copyEmail}
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#6b162c] hover:underline"
                      aria-label="Copy email address"
                    >
                      {copied ? (
                        <Check size={14} />
                      ) : (
                        <Copy size={14} />
                      )}

                      {copied ? "Copied" : "Copy email"}
                    </button>
                  </div>
                </div>
              </div>

              {/* MAIN INTERESTS */}
              <div className="mt-7 border-t border-neutral-100 pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  Main interests
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Engineering",
                    "AI / ML",
                    "Backend Development",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-[#6b162c]/15 bg-[#FAF8F5] px-3 py-1.5 text-xs font-medium text-[#6b162c]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-5 grid grid-cols-2 gap-3">

              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-3 py-3.5 text-sm font-semibold text-neutral-800 transition-colors hover:border-[#6b162c]/30 hover:text-[#6b162c] sm:px-4"
              >
                <span className="flex items-center gap-2">
                  <Linkedin size={17} />
                  LinkedIn
                </span>

                <ArrowUpRight size={15} />
              </a>

              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-3 py-3.5 text-sm font-semibold text-neutral-800 transition-colors hover:border-[#6b162c]/30 hover:text-[#6b162c] sm:px-4"
              >
                <span className="flex items-center gap-2">
                  <Github size={17} />
                  GitHub
                </span>

                <ArrowUpRight size={15} />
              </a>
            </div>
          </AnimatedSection>

          {/* RIGHT: CONTACT FORM */}
          <AnimatedSection delay={0.18}>
            <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6 md:p-8">

              {/* FORM HEADER */}
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    Send a message
                  </h3>

                  <p className="mt-2 text-sm text-neutral-500">
                    Fill in the form and choose your preferred
                    email service.
                  </p>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6b162c]/10 text-[#6b162c]">
                  <Send size={19} />
                </span>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* NAME + EMAIL */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-xs font-semibold text-neutral-700"
                    >
                      Your name{" "}
                      <span className="text-[#6b162c]">*</span>
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={120}
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(event) =>
                        update("name", event.target.value)
                      }
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-xs font-semibold text-neutral-700"
                    >
                      Your email{" "}
                      <span className="text-[#6b162c]">*</span>
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      placeholder="name@company.com"
                      value={form.email}
                      onChange={(event) =>
                        update("email", event.target.value)
                      }
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* SUBJECT */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-xs font-semibold text-neutral-700"
                  >
                    Subject
                  </label>

                  <select
                    id="contact-subject"
                    value={form.subject}
                    onChange={(event) =>
                      update("subject", event.target.value)
                    }
                    className={inputClass}
                  >
                    {subjects.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-xs font-semibold text-neutral-700"
                  >
                    Your message{" "}
                    <span className="text-[#6b162c]">*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    rows={6}
                    minLength={10}
                    maxLength={2000}
                    required
                    placeholder="Tell me about the opportunity or project..."
                    value={form.message}
                    onChange={(event) =>
                      update("message", event.target.value)
                    }
                    className={`${inputClass} min-h-[150px] resize-y`}
                  />

                  <p className="mt-1 text-right text-xs text-neutral-400">
                    {form.message.length} / 2000
                  </p>
                </div>

                {/* MAIN GMAIL BUTTON */}
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#6b162c] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#521122] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6b162c]"
                >
                  Continue in Gmail

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                {/* ALTERNATIVE EMAIL PROVIDERS */}
                <div className="space-y-3">
                  <p className="text-center text-xs text-neutral-500">
                    Or choose another email service
                  </p>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                    {/* OUTLOOK */}
                    <button
                      type="button"
                      onClick={() => openEmail("outlook")}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-neutral-700 transition-all hover:border-[#6b162c]/40 hover:bg-[#FAF8F5] hover:text-[#6b162c]"
                    >
                      Open in Outlook

                      <ExternalLink size={15} />
                    </button>

                    {/* DEFAULT EMAIL APP */}
                    <button
                      type="button"
                      onClick={() => openEmail("default")}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-neutral-700 transition-all hover:border-[#6b162c]/40 hover:bg-[#FAF8F5] hover:text-[#6b162c]"
                    >
                      Other email app

                      <ArrowUpRight size={15} />
                    </button>

                  </div>
                </div>

                {/* FEEDBACK */}
                {feedback && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="rounded-lg bg-[#FAF8F5] px-4 py-3 text-sm text-[#6b162c]"
                  >
                    <p>{feedback}</p>

                    {fallbackUrl && (
                      <a
                        href={fallbackUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 font-semibold underline"
                      >
                        Open email service

                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                )}

                {/* INFO */}
                <p className="text-center text-xs leading-relaxed text-neutral-400">
                  Your email application will prepare the message.
                  Please review it and click Send to deliver it.
                </p>

              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
