import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import FeaturesSection from "@/components/FeaturesSection";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-foreground">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <UseCases />
      <FeaturesSection />
      <ComparisonSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
