import { useMemo } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import './App.css';
import { MainPage } from './pages';
import palette from './theme';
import React from 'react';

function App() {
  const isLight = true;

  const themeOption = useMemo(() => ({
    palette: isLight ? palette.light : palette.dark
  }) , [isLight])
  const theme = createTheme(themeOption);

  return (
    <MUIThemeProvider theme={theme}>
      <MainPage />
    </MUIThemeProvider>
  );
}

export default App;
