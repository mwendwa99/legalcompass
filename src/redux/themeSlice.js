import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  palette: {
    type: "light",
    primary: {
      main: "#01244c",
      contrastText: "rgba(241,241,241,0.87)",
      dark: "#001935",
    },
    secondary: {
      main: "#EABD09",
    },
    background: {
      default: "#01244C",
      paper: "#01244C",
    },
    divider: "#726A6A",
    text: {
      primary: "rgba(255,255,255,0.87)",
      secondary: "#ffffff",
    },
  },
  typography: {
    fontFamily: ' "lato",sans-serif',
    fontSize: 16,
    h1: {
      fontSize: 48,
      fontWeight: 700,
    },
    h2: {
      lineHeight: 1.17,
      fontWeight: 600,
      fontSize: 30,
    },
    h3: {
      fontSize: 25,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 24,
    },
    subtitle2: {
      fontSize: 20,
    },
    button: {
      fontSize: 24,
    },
  },
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    light: (state) => initialState,
  },
});

export const { light } = themeSlice.actions;

export default themeSlice.reducer;
