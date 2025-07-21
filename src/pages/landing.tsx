import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import QuickStartSection from "../components/QuickStartSection";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-gray-50 to-red-50">
      <Header />
      <HeroSection />
      <QuickStartSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Landing;
