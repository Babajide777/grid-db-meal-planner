import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import theme from "./config/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Typography variant="h1">Jide</Typography>
      </ThemeProvider>
    </>
  );
}

export default App;
