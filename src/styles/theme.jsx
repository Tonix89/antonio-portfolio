import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#273141',
    },
    secondary: {
      main: '#ffffff',
    },
  },

  typography: {
    fontFamily: [
      'Kalam-Bold',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h3: {
      color: '#ffffff',
    },
    h4: {
      color: '#ffffff',
    },
    h5: {
      color: '#ffffff',
    },
    h6: {
      color: '#ffffff',
    },
    body1: {
      color: '#273141',
    },
    body2: {
      color: '#273141',
    },
  },
});

export default theme;
