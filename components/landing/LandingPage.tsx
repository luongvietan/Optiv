import { Footer } from "@/components/landing/footer/Footer";
import { AiProductivitySection } from "@/components/landing/sections/ai-productivity/AiProductivitySection";
import { CaseStudyTestimonialSection } from "@/components/landing/sections/case-study/CaseStudyTestimonialSection";
import { HeroSection } from "@/components/landing/sections/hero/HeroSection";
import { BuildPlanAiSection } from "@/components/landing/sections/build-plan-ai/BuildPlanAiSection";
import { ProductivityMetricsSection } from "@/components/landing/sections/productivity-metrics/ProductivityMetricsSection";
import { SocialProofCtaSection } from "@/components/landing/sections/social-proof-cta/SocialProofCtaSection";

export function LandingPage() {
  return (
    <>
      <main>
        <HeroSection />
        <AiProductivitySection />
        <CaseStudyTestimonialSection />
        <ProductivityMetricsSection />
        <BuildPlanAiSection />
        <SocialProofCtaSection />
      </main>
      <Footer />
    </>
  );
}
