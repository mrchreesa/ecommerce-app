import "./App.css";
import Main from "./components/Main";
import React, { useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "light" : "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ transition: "1s" }}>
        <Main setDarkMode={setDarkMode} darkMode={darkMode} />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
