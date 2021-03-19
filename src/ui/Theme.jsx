import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

// It is the global theme(Style) which can be accessed all over the application.
// It is also the place to visit if MU-Default-Theme-Style needs to be overwritten/modified with our custom variant.
const theme = createMuiTheme({
  // Palette provides  color system
  // Typograpy provides text presentation system like <p>, h1...h6 and so on
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: "700",
      fontSize: "1rem",
      color: "white",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h1: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: arcBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "1.75rem",
      color: arcBlue,
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Railway",
      color: arcBlue,
      lineHeight: 1,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "white",
    },

    body1: {
      fontSize: "1.25rem",
      color: arcGrey,
      fontWeight: 300,
    },

    caption: {
      fontSize: "1.25rem",
      color: arcGrey,
      fontWeight: 300,
    },

    learnButton: {
      borderColor: arcBlue,
      color: arcGrey,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontWeight: "bold",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcBlue,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      root: {
        color: arcGrey,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
        "&:after": {
          borderBottom: `2px solid darkBlue`,
        },
      },
    },
  },
});

export default theme;
