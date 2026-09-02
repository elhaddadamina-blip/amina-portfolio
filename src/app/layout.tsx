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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amina El Haddad — AI & Software Engineer",
    description: "Building intelligent systems at the intersection of AI, data engineering, and software architecture.",
    type: "website",
    url: "/",
    siteName: "Amina El Haddad Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amina EL HADDAD — AI & Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amina El Haddad — AI & Software Engineer",
    description: "Building intelligent systems at the intersection of AI, data engineering, and software architecture.",
    images: ["/og-image.png"],
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
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#6b162c] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
