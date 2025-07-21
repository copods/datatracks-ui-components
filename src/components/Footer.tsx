export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "#000033" }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="p-2 bg-white rounded-lg flex items-center justify-center">
              <img
                src="/dt-logotype.png"
                alt="DataTracks"
                className="max-h-10"
              />
            </div>
          </div>

          <div className="flex items-center space-x-8 text-gray-400">
            <a href="#" className="hover:text-orange-300 transition-colors">
              Storybook
            </a>
            <a
              href="https://github.com/copods/datatracks-ui-components"
              className="hover:text-orange-300 transition-colors"
            >
              GitHub
            </a>
            <a href="#" className="hover:text-orange-300 transition-colors">
              Documentation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
