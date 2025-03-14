import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: true;
    lg: true;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: false;
    desktop: false;
  }
}

const theme = createTheme({
  cssVariables: true,
  typography: { fontFamily: "Open Sans" },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 480,
      md: 700,
      lg: 1024
    }
  }
});

if (theme.components) {
  theme.components.MuiButton = {
    styleOverrides: {
      root: { borderRadius: "60px", padding: "12px 20px", background: "#22007F", fontWeight: 600, fontSize: "14px" }
    }
  }


}

export default theme;
