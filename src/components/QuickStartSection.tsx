import { Icon } from "@iconify/react";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function QuickStartSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <Card className="gap-0 p-0">
        <CardHeader className="p-0">
          <div className="bg-gradient-to-r from-primary to-primary/80 px-8 py-6 rounded-t-2xl">
            <h2 className="text-2xl font-bold text-primary-foreground mb-2">
              Implementation Guide
            </h2>
            <p className="text-primary-foreground/80">
              Integration steps for development teams
            </p>
          </div>
        </CardHeader>
        <CardContent className="p-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon
              icon="mdi:play-circle-outline"
              className="w-5 h-5 mr-2 text-primary"
            />
            Access Component Library
          </h3>
          <div className="space-y-3 text-foreground">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                1
              </div>
              <div>
                <p className="font-medium">Launch Storybook</p>
                <p className="text-sm text-muted-foreground">
                  Run{" "}
                  <code className="bg-muted px-2 py-1 rounded">
                    npm run storybook
                  </code>{" "}
                  to access the component documentation
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                2
              </div>
              <div>
                <p className="font-medium">Review Components</p>
                <p className="text-sm text-muted-foreground">
                  Navigate through available components and their usage patterns
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                3
              </div>
              <div>
                <p className="font-medium">Configure Properties</p>
                <p className="text-sm text-muted-foreground">
                  Use the controls panel to test different component
                  configurations
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                4
              </div>
              <div>
                <p className="font-medium">Implement Components</p>
                <p className="text-sm text-muted-foreground">
                  Copy and paste the component code into your application.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
