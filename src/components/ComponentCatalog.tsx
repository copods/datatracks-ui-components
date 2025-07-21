import { Icon } from "@iconify/react";
import { components } from "../lib/constants";

const ComponentCatalog = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Component Catalog
        </h2>
        <p className="text-xl text-gray-600">
          Standardized components for internal applications
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {components.map((component, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                {component.name}
              </h3>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                {component.category}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              {component.description}
            </p>
            <div className="flex items-center text-orange-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
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
