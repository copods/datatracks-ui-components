import { createFileRoute } from "@tanstack/react-router";

const EditorShowcase = () => {
  return (
    <main className="min-h-screen w-full max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6 text-foreground">
        Lexical Editor Showcase
      </h1>
      <div className="bg-card border border-border rounded-lg p-8 min-h-[300px] flex items-center justify-center text-muted-foreground text-xl">
        {/* TODO: Replace this with the actual Lexical Editor component */}
        <span>Editor component placeholder</span>
      </div>
    </main>
  );
};

export const Route = createFileRoute("/editor-showcase")({
  component: EditorShowcase,
});
