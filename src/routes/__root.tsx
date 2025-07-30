import { createRootRoute, Outlet } from "@tanstack/react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-muted/20 to-accent/10">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export const Route = createRootRoute({
  component: RootLayout,
});
