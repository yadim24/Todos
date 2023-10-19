import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#7F7FD5',
    },
    secondary: {
      main: '#FFD6A5',
    },
    success: {
      main: '#86E57F',
    },
    error: {
      main: '#FF8A9A',
    },
    text: {
      primary: '#3D3D57',
      secondary: '#536380',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});
