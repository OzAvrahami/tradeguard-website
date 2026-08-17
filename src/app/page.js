import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import RiskRules from "@/components/sections/RiskRules";
import ProductShowcase from "@/components/sections/ProductShowcase";
import TradovateIntegration from "@/components/sections/TradovateIntegration";
import Architecture from "@/components/sections/Architecture";
import Security from "@/components/sections/Security";
import WhyLimitPact from "@/components/sections/WhyLimitPact";
import FuturesTraders from "@/components/sections/FuturesTraders";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div id="top" />
        <Hero />
        <TrustStrip />
        <Problem />
        <HowItWorks />
        <RiskRules />
        <ProductShowcase />
        <TradovateIntegration />
        <Architecture />
        <Security />
        <WhyLimitPact />
        <FuturesTraders />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
