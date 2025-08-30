import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";
import ThemeToggle from "@/components/ThemeToggle";
import StarsBackground from "@/components/StarsBackground";
import Footer from "@/components/Footer";
import ExperienceSection from "@/components/ExperienceSection";
import ButtonWhatsApp from "@/components/ButtonWhatsApp";
import PhoneCallApp from "@/components/PhoneCallApp";
import MyServiceButton from "../components/MyServiceButton";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toogle */}
      <ThemeToggle />

      {/* Background Effect */}
      <StarsBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
      <MyServiceButton />
      <ButtonWhatsApp />
      <PhoneCallApp />
    </div>
  );
};

export default Home;
