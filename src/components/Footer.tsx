import { useTheme } from "../lib/theme";
import { Button } from "./ui/button";

export default function Footer() {
  const { resolvedTheme } = useTheme();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img
              src={
                resolvedTheme === "dark"
                  ? "/dt-logotype.png"
                  : "/dt-logotype-light.png"
              }
              alt="DataTracks"
              className="max-h-10"
            />
          </div>

          <div className="flex items-center space-x-8 text-primary-foreground/70">
            {/*<Button
              variant="link"
              className="px-0 text-primary-foreground"
              asChild
            >
              <a
                href="https://github.com/copods/datatracks-ui-components"
                target="_blank"
                rel="noopener noreferrer"
              >
                Text Editor
              </a>
            </Button>*/}
            <Button
              variant="link"
              className="px-0 text-primary-foreground"
              asChild
            >
              <a
                href="http://localhost:6006"
                target="_blank"
                rel="noopener noreferrer"
              >
                Storybook
              </a>
            </Button>
            <Button
              variant="link"
              className="px-0 text-primary-foreground"
              asChild
            >
              <a
                href="https://github.com/copods/datatracks-ui-components"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
