import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CV from "@/components/CV";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CV />
      <Contact />
    </main>
  );
}
