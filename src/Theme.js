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
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#D9D9D9",
          color: "#01244C",
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
    grey: {
      // light: '#ffa726',
      main: "#726A6A",
      // dark: '#ef6c00',
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    background: {
      default: "#01244C",
      paper: "#01244C",
      card: "#D9D9D9",
    },
    divider: "#726A6A",
    text: {
      primary: "rgba(255,255,255,0.87)",
      secondary: "#01244C",
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
      fontSize: 18,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: 18,
      fontWeight: 700,
    },
    body1: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 1.7,
    },
    body2: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.1,
    },
    button: {
      fontSize: 22,
    },
  },
});
