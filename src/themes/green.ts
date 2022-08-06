import type { ThemeObject } from '../types';

// TODO - add light and dark greens instead of these purple
const colors: ThemeObject = {
  light: '#F2FFDE',
  100: '#D3F1A7',
  200: '#CBEE96',
  300: '#B9E873',
  400: '#B0E561',
  500: '#A8E250',
  600: '#9FE03E',
  700: '#96DD2C',
  800: '#8CD322',
  900: '#80C11F',
  1000: '#75AF1D',
  dark: '#250043',
  lightGradient: '',
  mediumGradient: '',
  darkGradient: '',
};

colors.lightGradient = `linear-gradient(180deg, ${colors['100']} 0%, ${colors['300']} 100%);`;
colors.mediumGradient = `linear-gradient(180deg, ${colors['400']} 0%, ${colors['700']} 100%);`;
colors.darkGradient = `linear-gradient(180deg, ${colors['600']} 0%, ${colors['900']} 100%);`;

export default colors;
