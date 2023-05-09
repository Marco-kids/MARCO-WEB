import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E63E6B",
      light: "#EA85A0",
    },
    secondary: {
      main: "#F5F5F5",
    },
  },
  typography: {
    fontFamily: [
      '"Helvetica"',
      "Roboto",
      "Arial",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
