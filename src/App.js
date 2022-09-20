import { useMemo } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import './App.css';
import { MainPage } from './pages';
import palette from './theme';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const isLight = false;

  const themeOption = useMemo(() => ({
    palette: isLight ? palette.light : palette.dark
  }) , [isLight])
  const theme = createTheme(themeOption);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MUIThemeProvider theme={theme}>
        <MainPage />
      </MUIThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
