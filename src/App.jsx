import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
// components
import { Button } from "./components";
import { theme } from "./Theme";

function App() {
  const dispatch = useDispatch();
  // const theme = createTheme(useSelector((state) => state.theme.palette));

  return (
    // <div className="App">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button />
    </ThemeProvider>
    // </div>
  );
}

export default App;
