import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Todos } from 'components/Todos';
import { ReactElement, StrictMode } from 'react';
import './App.css';
import { theme } from './theme';

export const App = (): ReactElement => {
  console.log(theme);

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Todos />
      </ThemeProvider>
    </StrictMode>
  );
};
