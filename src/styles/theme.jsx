import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#273141',
      dark: '#1e2530',
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
      '@media (max-width:900px)': {
        fontSize: '1.5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    h5: {
      color: '#ffffff',
      '@media (max-width:900px)': {
        fontSize: '1rem',
      },
    },
    h6: {
      color: '#ffffff',
      '@media (max-width:900px)': {
        fontSize: '0.95rem',
      },
    },
    body1: {
      color: '#273141',
      '@media (max-width:600px)': {
        fontSize: '.75rem',
      },
    },
    body2: {
      color: '#273141',
    },
  },
});

export default theme;
