import React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./Utils/Theme";
import Navbar from "./pages/AppBar/AppBar";
import AppRouter from "./Utils/AppRouter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <Navbar />
        <AppRouter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
