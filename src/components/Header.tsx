import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start">
            <img src="/dt-logotype.png" alt="DataTracks" className="max-h-10" />
            <p className="ml-[22px] text-sm text-gray-600">
              UI Component Library
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button asChild>
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
    </header>
  );
}
