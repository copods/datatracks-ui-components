import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import QuickStartSection from "../components/QuickStartSection";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10">
      <Header />
      <HeroSection />
      <QuickStartSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Landing;
