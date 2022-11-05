import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
// components
import { Button } from "./components";
import { theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button type="secondary" title="title" strong={true} />
    </ThemeProvider>
  );
}

export default App;
