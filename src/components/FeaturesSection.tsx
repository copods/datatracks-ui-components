import { Icon } from "@iconify/react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function FeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Component Standards
        </h2>
        <p className="text-xl text-gray-600">
          Consistent, reliable components for enterprise applications
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card>
          <CardHeader className="items-start">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Icon
                icon="mdi:palette-outline"
                className="w-6 h-6 text-orange-600"
              />
            </div>
            <CardTitle className="text-xl mb-3">Enterprise Standards</CardTitle>
            <CardDescription>
              Components follow established design patterns and coding standards
              for consistency across projects.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="items-start">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "#000033" }}
            >
              <Icon
                icon="mdi:shield-check-outline"
                className="w-6 h-6 text-white"
              />
            </div>
            <CardTitle className="text-xl mb-3">Type Safety</CardTitle>
            <CardDescription>
              Full TypeScript implementation with comprehensive type definitions
              for reliable development workflow.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="items-start">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "#CC0000" }}
            >
              <Icon icon="mdi:flash-outline" className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-xl mb-3">Production Ready</CardTitle>
            <CardDescription>
              Optimized components with minimal bundle impact and efficient
              rendering for production applications.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
