"use client";

import { ThemeProvider } from "./components/theme-provider";
import { ParticlesBackground } from "./components/particles-background";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { SkillsSection } from "./components/skills-section";
import { ProjectsSection } from "./components/projects-section";
import { ServicesSection } from "./components/services-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { CTASection } from "./components/cta-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <ThemeProvider>
      <ParticlesBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        {/*<TestimonialsSection />*/}
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
