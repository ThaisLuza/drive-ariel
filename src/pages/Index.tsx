import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PillarsSection from "@/components/PillarsSection";
import LegislationBanner from "@/components/LegislationBanner";
import ProgramsSection from "@/components/ProgramsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PillarsSection />
      <LegislationBanner />
      <ProgramsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;