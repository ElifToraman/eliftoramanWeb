import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fffff",
    },
    secondary: {
      main: "#fffff",
    },
    text: {
      primary: "#002f63", 
      secondary: "#2f2f30",
    },
  },
  typography: {
    fontFamily: "Nunito, serif",
    fontSize: 14,
    button: {
      textTransform: "none",
    },
    H54px: {
      fontSize: "54px",
      fontWeight: 700,
    },
    H44px: {
      fontSize: "46px",
      fontWeight: 600,
    },
    H38px: {
      fontSize: "38px",
      fontWeight: 600,
    },
    H24px: {
      fontSize: "24px",
      fontWeight: 600,
    },
    body1: {
      fontSize: "20px",
      fontWeight: "500"
    },
    body2: {
      fontSize: "18px",
      fontWeight: "500"
    },
  },
});

export default theme;
