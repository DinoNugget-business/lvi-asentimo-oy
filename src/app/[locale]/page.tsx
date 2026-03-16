import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ServicesOverview from "@/components/sections/ServicesOverview";
import IslandService from "@/components/sections/IslandService";
import ReferencesPreview from "@/components/sections/ReferencesPreview";
import PricingPreview from "@/components/sections/PricingPreview";
import CtaBanner from "@/components/sections/CtaBanner";
import ContactPreview from "@/components/sections/ContactPreview";
import FooterSection from "@/components/layout/FooterSection";
import ScrollAnimator from "@/components/ui/ScrollAnimator";

export default function HomePage() {
  return (
    <>
      <ScrollAnimator />
      <HeroSection />
      <TrustBar />
      <ServicesOverview />
      <IslandService />
      <ReferencesPreview />
      <PricingPreview />
      <CtaBanner />
      <ContactPreview />
      <FooterSection />
    </>
  );
}
