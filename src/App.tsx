import { ThemeProvider } from "./lib/theme";
import Landing from "./pages/landing";

const App = () => {
  return (
    <ThemeProvider>
      <Landing />
    </ThemeProvider>
  );
};

export default App;
