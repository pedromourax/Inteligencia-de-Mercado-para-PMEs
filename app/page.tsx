"use client";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { PricingPlans } from "@/components/pricing-plans";
import { CaseStudy } from "@/components/case-study";
import { LegalSection } from "@/components/legal-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 pb-20 w-full">
      <Hero />
      <Features />
      <PricingPlans />
      <CaseStudy />
      <LegalSection />
    </div>
  );
}
