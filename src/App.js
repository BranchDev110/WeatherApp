import { ThemeProvider } from '@emotion/react';
import './App.css';
import { MainPage } from './pages';

function App() {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
