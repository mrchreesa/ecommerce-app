import "./App.css";
import Main from "./components/Main";
import React, { useState, useEffect } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "light" : "dark",
    },
  });
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "white" : "hsl(0, 0%, 8%)";
    document.body.style.transition = "all 1s";
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation="0"
        style={{
          transition: "1s",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Main setDarkMode={setDarkMode} darkMode={darkMode} />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
