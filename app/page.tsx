import About from "@/components/About";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import ProjectsSection from "@/components/ProjectsSection";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
   <>
   <Hero />
   <About />
   <Experience/>
   <Skills/>
   <ProjectsSection/>
   <Certifications/>
   </>
  );
}
