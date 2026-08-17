import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import SoftSkills from "@/components/SoftSkills";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundFX from "@/components/BackgroundFX";
import ScrollProgress from "@/components/ScrollProgress";

export default function HomePage() {
  return (
    <>
      <BackgroundFX />
      <ScrollProgress />
      <Navbar />
      <main id="main" className="relative overflow-x-clip">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <SoftSkills />
        <CurrentlyLearning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
