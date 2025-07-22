import Footer from "../components/Footer";
import Header from "../components/Header";

const EditorShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-6 text-foreground">
          Lexical Editor Showcase
        </h1>
        <div className="bg-card border border-border rounded-lg p-8 min-h-[300px] flex items-center justify-center text-muted-foreground text-xl">
          {/* TODO: Replace this with the actual Lexical Editor component */}
          <span>Editor component placeholder</span>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EditorShowcase;
