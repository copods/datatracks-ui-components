import { createFileRoute } from "@tanstack/react-router";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import QuickStartSection from "../components/QuickStartSection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <QuickStartSection />
      <FeaturesSection />
    </>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
