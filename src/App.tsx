import { createRouter, RouterProvider } from "@tanstack/react-router";
import { ThemeProvider } from "./lib/theme";
import { routeTree } from "./routeTree.gen";

const App = () => {
  const router = createRouter({ routeTree });
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
