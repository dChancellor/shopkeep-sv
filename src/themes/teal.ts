import type { ThemeObject } from '../types';

// TODO - add light and dark greens instead of these purple
const colors: ThemeObject = {
  light: '#CFF2E3',
  100: '#CFF2E3',
  200: '#BFEDD9',
  300: '#9FE5C6',
  400: '#7FDCB4',
  500: '#61D4A2',
  600: '#4FCF97',
  700: '#35C084',
  800: '#2CA06E',
  900: '#238058',
  1000: '#1A6042',
  dark: '#1A6042',
  lightGradient: '',
  mediumGradient: '',
  darkGradient: '',
};

colors.lightGradient = `linear-gradient(180deg, ${colors['100']} 0%, ${colors['300']} 100%);`;
colors.mediumGradient = `linear-gradient(180deg, ${colors['400']} 0%, ${colors['700']} 100%);`;
colors.darkGradient = `linear-gradient(180deg, ${colors['600']} 0%, ${colors['900']} 100%);`;

export default colors;
