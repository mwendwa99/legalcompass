import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
// components
import { Nav } from "./components";
// pages
import HomePage from "./pages/HomePage";
import GetDirection from "./pages/GetDirection";
import { theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/getdirections" element={<GetDirection />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
