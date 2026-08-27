import type { Metadata, Viewport } from "next";
import { Montserrat, Plus_Jakarta_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#800020",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://amina-elhaddad.com"),
  title: {
    default: "Amina EL HADDAD — AI & Software Engineer",
    template: "%s | Amina EL HADDAD",
  },
  description:
    "Portfolio of Amina EL HADDAD, a final-year AI & Software Engineering student at ENSA Tangier. Specializing in machine learning, full-stack development, and BigData systems.",
  keywords: [
    "AI",
    "Software Engineer",
    "Machine Learning",
    "React",
    "Next.js",
    "Python",
    "BigData",
    "Portfolio",
    "ENSA Tangier",
  ],
  authors: [{ name: "Amina El Haddad" }],
  openGraph: {
    title: "Amina El Haddad — AI & Software Engineer",
    description: "Building intelligent systems at the intersection of AI, data engineering, and software architecture.",
    type: "website",
    siteName: "Amina El Haddad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amina El Haddad — AI & Software Engineer",
    description: "Building intelligent systems at the intersection of AI, data engineering, and software architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${plusJakartaSans.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
