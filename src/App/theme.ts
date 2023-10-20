import { createTheme } from '@mui/material';
import { green, red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    background: {
      default: '#ede7f6',
      paper: '#fff',
    },
    primary: {
      main: '#7b53eb',
    },
    secondary: {
      main: '#a77bea',
    },
    success: {
      main: green[600],
    },
    error: {
      main: red[600],
    },
    text: {
      primary: '#1f1244',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  // components: {
  //   MuiTextField: {
  //     defaultProps: {
  //       size: 'small',
  //     },
  //   },
  // },
});
