import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";

import theme from "./styles/theme";

import { LangProvider } from "./hooks/lang.jsx";

import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LangProvider>
        <Routes />
      </LangProvider>
    </ThemeProvider>
  </React.StrictMode>
);
