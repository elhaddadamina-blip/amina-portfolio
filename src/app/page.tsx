import { Navbar } from "@/components/Navbar";
import { ProgressBar } from "@/components/ProgressBar";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { SocialSidebar } from "@/components/ui/SocialSidebar";

import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { ScrollObserver } from "@/components/ScrollObserver";
import { palette as P } from "@/lib/palette";

export default function Home() {
  return (
    <main id="main-content" className="bg-[#F5F5DC]">
      <ScrollObserver />
      <ProgressBar />
      <SocialSidebar />
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />

      <Contact />
      <Footer />
    </main>
  );
}
