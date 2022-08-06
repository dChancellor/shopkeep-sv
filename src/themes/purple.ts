import type { ThemeObject } from '../types';

const colors: ThemeObject = {
  light: '#FEEFFF',
  100: '#F7CDFF',
  200: '#EFACFF',
  300: '#E88AFE',
  400: '#E068FE',
  500: '#C559E3',
  600: '#AB4AC9',
  700: '#903BAE',
  800: '#752D93',
  900: '#5A1E78',
  1000: '#400F5E',
  dark: '#250043',
  lightGradient: '',
  mediumGradient: '',
  darkGradient: '',
};

colors.lightGradient = `linear-gradient(180deg, ${colors['100']} 0%, ${colors['300']} 100%);`;
colors.mediumGradient = `linear-gradient(180deg, ${colors['400']} 0%, ${colors['700']} 100%);`;
colors.darkGradient = `linear-gradient(180deg, ${colors['600']} 0%, ${colors['900']} 100%);`;

export default colors;
