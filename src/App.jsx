import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import FeaturedSection from './components/FeaturedSection';
import AboutUsSection from './components/AboutUsSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import useReveal from './components/useReveal';

export default function App() {
  useReveal();
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <FeaturedSection />
      <AboutUsSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTABanner />
      <Footer />
    </>
  );
}
