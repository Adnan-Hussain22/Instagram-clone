import {createTheme} from '@shopify/restyle';
import {palette} from './colors';

const theme = createTheme({
  colors: {
    ...palette,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    headerBig: {
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
      letterSpacing: 0.8
    },
    header: {
      fontSize: 18,
      color: 'black',
    },
    headerSecondary: {
      fontSize: 14,
      color: "headerSecondary",
    },
  },
});

export type Theme = typeof theme;
export default theme;
