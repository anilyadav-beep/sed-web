import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Arial Nova", Arial, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Arial Nova';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url('/fonts/arial-nova/arial-nova.woff2') format('woff2'),
               url('/fonts/arial-nova/arial-nova.woff') format('woff');
        }
      `,
    },
  },
});

export default theme;
