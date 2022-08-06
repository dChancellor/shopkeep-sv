import type { ThemeObject } from '../types';

// TODO - add light and dark greens instead of these purple
const colors: ThemeObject = {
  light: '#F3BAA5',
  100: '#F3BAA5',
  200: '#F1AC93',
  300: '#EC906F',
  400: '#EA825D',
  500: '#E66E43',
  600: '#E56638',
  700: '#E35926',
  800: '#D94E1C',
  900: '#C7481A',
  1000: '#B54117',
  dark: '#B54117',
  lightGradient: '',
  mediumGradient: '',
  darkGradient: '',
};

colors.lightGradient = `linear-gradient(180deg, ${colors['100']} 0%, ${colors['300']} 100%);`;
colors.mediumGradient = `linear-gradient(180deg, ${colors['400']} 0%, ${colors['700']} 100%);`;
colors.darkGradient = `linear-gradient(180deg, ${colors['600']} 0%, ${colors['900']} 100%);`;

export default colors;
