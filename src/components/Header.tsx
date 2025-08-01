import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "../lib/theme";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Header() {
  const { resolvedTheme } = useTheme();
  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start">
            <img
              src={
                resolvedTheme === "dark"
                  ? "/dt-logotype-light.png"
                  : "/dt-logotype.png"
              }
              alt="DataTracks"
              className="max-h-10"
            />
            <p className="hidden md:block ml-[22px] text-sm text-muted-foreground">
              UI Showcase
            </p>
          </div>
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Button variant="ghost" className="p-0" asChild>
                <Icon icon="mdi:menu" className="w-7 h-7" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="h-full px-4 py-6 flex flex-col items-start justify-between gap-4">
                <div className="flex flex-col items-start gap-2">
                  <p className="mb-4">UI Showcase</p>
                  <Button variant="link" className="px-0" asChild>
                    <a
                      href="http://localhost:6006"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Storybook
                    </a>
                  </Button>
                  <Button variant="link" className="px-0" asChild>
                    <a
                      href="https://github.com/copods/datatracks-ui-components"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </Button>
                </div>
                <div className="self-stretch flex items-center justify-between gap-2">
                  <img
                    src={
                      resolvedTheme === "dark"
                        ? "/dt-logotype-light.png"
                        : "/dt-logotype.png"
                    }
                    alt="DataTracks"
                    className="max-h-8"
                  />
                  <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <div className="hidden md:flex items-center space-x-6">
            {/*<Button variant="link" className="px-0" asChild>
              <a
                href="https://github.com/copods/datatracks-ui-components"
                rel="noopener noreferrer"
              >
                Text Editor
              </a>
            </Button>*/}
            <Button variant="link" className="px-0" asChild>
              <a
                href="http://localhost:6006"
                target="_blank"
                rel="noopener noreferrer"
              >
                Storybook
              </a>
            </Button>
            <Button variant="link" className="px-0" asChild>
              <a
                href="https://github.com/copods/datatracks-ui-components"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
