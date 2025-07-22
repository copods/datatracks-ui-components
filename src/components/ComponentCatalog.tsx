import { Icon } from "@iconify/react";
import { components } from "../lib/constants";

const ComponentCatalog = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Component Catalog
        </h2>
        <p className="text-xl text-muted-foreground">
          Standardized components for internal applications
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {components.map((component, index) => (
          <div
            key={index}
            className="group bg-card rounded-lg p-6 shadow-md border border-border hover:shadow-lg hover:border-primary transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {component.name}
              </h3>
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                {component.category}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {component.description}
            </p>
            <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
              View Documentation
              <Icon icon="tabler:arrow-right" className="w-4 h-4 ml-1" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComponentCatalog;
