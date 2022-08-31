import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/muiTheme";
import Home from "./pages/home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
