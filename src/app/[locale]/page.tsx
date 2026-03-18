import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import IslandService from "@/components/sections/IslandService";
import SocialProof from "@/components/sections/SocialProof";
import PricingPreview from "@/components/sections/PricingPreview";
import ContactPreview from "@/components/sections/ContactPreview";
import FooterSection from "@/components/layout/FooterSection";
import ScrollAnimator from "@/components/ui/ScrollAnimator";

export default function HomePage() {
  return (
    <>
      <ScrollAnimator />
      <HeroSection />
      <ServicesOverview />
      <IslandService />
      <SocialProof />
      <PricingPreview />
      <ContactPreview />
      <FooterSection />
    </>
  );
}
