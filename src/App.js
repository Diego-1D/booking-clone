import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/muiTheme";
import Home from "./pages/home";
import HotelList from "./pages/hotelList";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotellist" element={<HotelList />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
