import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
