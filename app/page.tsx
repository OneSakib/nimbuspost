import AboutSection from "./components/Home/AboutSection";
import ContactSection from "./components/Home/ContactSection";
import HeroSection from "./components/Home/HeroSection";
import RealTimeProjects from "./components/Home/RealTimeProjects";
import PortfolioSection from "./components/Home/PortfolioSection";
import ResumeSection from "./components/Home/ResumeSection";
import ServicesSection from "./components/Home/ServicesSection";
import SkillsSection from "./components/Home/SkillsSection";
// import TestimonialSection from "./components/Home/TestimonialsSection";

export default function Home() {
  return (
    <main className="main">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ResumeSection />
      <RealTimeProjects />
      <PortfolioSection />
      <ServicesSection />
      {/* <TestimonialSection /> */}
      <ContactSection />
    </main>
  );
}
