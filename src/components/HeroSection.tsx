import { Icon } from "@iconify/react";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-6 mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
            <Icon icon="mdi:flash-outline" className="w-4 h-4 mr-2" />
            Internal Use • Standardized • TypeScript Ready
          </div>
          <div className="inline-flex items-center px-3 py-1 bg-gray-900 text-white rounded-full text-xs font-medium">
            <Icon icon="mdi:layers-outline" className="w-4 h-4 mr-1" />
            Built on{" "}
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-1"
            >
              shadcn/ui
            </a>
          </div>
        </div>

        <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight font-lato">
          DataTracks Components
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            Enterprise UI Library
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Standardized React components for internal web applications. Access
          our Storybook documentation to view implementation examples and
          component specifications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white hover:opacity-80 transition-all duration-200">
            <Icon icon="mdi:book-open-page-variant" className="w-5 h-5" />
            <span>Access Storybook</span>
            <Icon
              icon="tabler:arrow-right"
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            />
          </Button>

          <Button
            className="px-8 py-4 bg-white text-gray-900"
            variant="outline"
          >
            <Icon icon="mdi:code-tags" className="w-5 h-5" />
            <span>Component Docs</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
