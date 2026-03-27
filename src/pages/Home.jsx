import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import ForBusinessSection from "../components/home/ForBusinessSection";
import CTASection from "../components/home/CTASection";
import Footer from "../components/layout/Footer";
import BecomeRider from "../components/home/BecomeRider";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ForBusinessSection />
      <BecomeRider />
      <CTASection />
      <Footer />
      
    </>
  );
}