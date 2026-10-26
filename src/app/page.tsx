
import { Navbar } from "@/components/Navbar";
import { ProgressBar } from "@/components/ProgressBar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { SocialSidebar } from "@/components/ui/SocialSidebar";
import { Footer } from "@/components/Footer";
import { ScrollObserver } from "@/components/ScrollObserver";
import { palette as P } from "@/lib/palette";
import { Engagements } from "@/components/sections/Engagements";
export default function Home() {
  return (
<main id="main-content" className="bg-[#FAF8F5]">      {/* Global components */}
      <ScrollObserver />
      <ProgressBar />
      <SocialSidebar />
      <Navbar />

     <Hero />
<About />
<Projects />
<Experience />
<Skills />
<Engagements />
<Certifications />
<Contact />
      {/* Footer */}
      <Footer />
    </main>
  );
}
