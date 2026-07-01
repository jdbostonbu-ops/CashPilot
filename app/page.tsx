import Nav from "@/components/Nav/Nav";
import Hero from "@/components/Hero/Hero";
import TrustBar from "@/components/TrustBar/TrustBar";
import PainSection from "@/components/PainSection/PainSection";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import ProductScreens from "@/components/ProductScreens/ProductScreens";
import WhoItsFor from "@/components/WhoItsFor/WhoItsFor";
import Features from "@/components/Features/Features";
import Testimonials from "@/components/Testimonials/Testimonials";
import ImpactStats from "@/components/ImpactStats/ImpactStats";
import FAQ from "@/components/FAQ/FAQ";
import Pricing from "@/components/Pricing/Pricing";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Footer from "@/components/Footer/Footer";

const HomePage = (): JSX.Element => (
  <main>
    <Nav />
    <Hero />
    <TrustBar />
    <PainSection />
    <HowItWorks />
    <ProductScreens />
    <WhoItsFor />
    <Features />
    <Testimonials />
    <ImpactStats />
    <FAQ />
    <Pricing />
    <FinalCTA />
    <Footer />
  </main>
);

export default HomePage;
