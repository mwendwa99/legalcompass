import { Routes, Route, MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
// components
import { Nav, Contact } from "./components";
// pages
import HomePage from "./pages/HomePage";
import GetDirection from "./pages/GetDirection";
import NotFound from "./pages/NotFound";
import WhoWeAre from "./pages/WhoWeAre";
import { theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
      {/* <MemoryRouter initialEntries={["/"]} initialIndex={0}> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/getdirections" element={<GetDirection />} />
        <Route path="/WhoWeAre" element={<WhoWeAre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Contact />
      {/* </MemoryRouter> */}
    </ThemeProvider>
  );
}

export default App;
