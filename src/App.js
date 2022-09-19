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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/hotellist' element={<HotelList />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
