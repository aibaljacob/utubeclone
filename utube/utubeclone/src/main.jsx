import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createRoot } from 'react-dom/client';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF0000',
    },
    background: {
      default: '#F9F9F9',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const root = createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
</React.StrictMode>,
);


  