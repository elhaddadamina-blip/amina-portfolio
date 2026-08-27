import { Navbar } from "@/components/Navbar";
import { ProgressBar } from "@/components/ProgressBar";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";

import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { CVSection } from "@/components/sections/CVSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { ScrollObserver } from "@/components/ScrollObserver";
import { palette as P } from "@/lib/palette";

export default function Home() {
  return (
    <div style={{ background: P.ivory }}>
      <ScrollObserver />
      <ProgressBar />
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <About />

      <CVSection />
      <Contact />
      <Footer />
    </div>
  );
}
