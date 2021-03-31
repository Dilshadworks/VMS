import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#202F7C",
    },
    secondary: {
      main: "#273579",
    },
    textPrimary: {
      main: "#333333",
    },
  },
  // overrides: {
  //   MuiButton: {
  //     raisedPrimary: {
  //       color: 'white',
  //     },
  //   },
  // },
  typography: {
    h1: {
      fontSize: "65px",
      lineHeight: "84px",
      fontFamily: "Poppins",
    },
    h4: {
      fontSize: "50px",
      fontFamily: "Poppins",
    },
    body1: {
      fontFamily: "Poppins",
      fontSize: "32px",
      textTransform: "inherit",
      lineHeight: "40px",
    },
  },
});

