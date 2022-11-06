import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
// components
import { Button, Nav } from "./components";
import { theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
    </ThemeProvider>
  );
}

export default App;
