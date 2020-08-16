import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4b06c1",
      dark: "#ce02bd",
    },
    secondary: {
      main: "#1b5dbf",
      dark: "#23ffdb",
    },
  },
  typography: {
    h1: {
      "@media (max-width:600px)": {
        fontSize: "4.15rem",
      },
    },
    h2: {
      fontSize: "3.675rem",
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h3: {
      fontSize: "2.8rem",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h4: {
      fontSize: "2rem",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    body1: {
      fontSize: "1.3rem",
      "@media (max-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    body2: {
      fontSize: "1.1rem",
      lineHeight: 1.2,

      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
  },
});

export default theme;
