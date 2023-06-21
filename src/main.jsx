import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import { Routes } from './routes'
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import { LangProvider } from './useContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </LangProvider>
  </React.StrictMode>,
)
