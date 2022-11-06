import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: 0,
          textTransform: "capitalize",
          fontWeight: "bolder",
          fontSize: "18px",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          // textDecorationThickness: "2px",
          textDecoration: "none",
        },
      },
    },
  },
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
    fontSize: 12,
    h1: {
      fontSize: 46,
      fontWeight: 700,
    },
    h2: {
      lineHeight: 1.17,
      fontWeight: 600,
      fontSize: 28,
    },
    h3: {
      fontSize: 23,
      fontWeight: 600,
    },
    h4: {
      fontSize: 20,
      fontWeight: 600,
    },
    h5: {
      fontSize: 18,
      fontWeight: 600,
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 22,
    },
    subtitle2: {
      fontSize: 18,
    },
    button: {
      fontSize: 22,
    },
  },
});