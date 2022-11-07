import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
// components
import { Nav, Carousel, Banner } from "./components";
import { theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
      <Carousel />
      <Banner />
    </ThemeProvider>
  );
}

export default App;
