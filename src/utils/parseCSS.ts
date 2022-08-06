import type { Styles } from '../types';

interface Map {
  [key: string]: string;
}
const camelToCSS: Map = {
  backgroundColor: 'background-color',
  minHeight: 'min-height',
  alignItems: 'align-items',
  flexFlow: 'flex-flow',
};

const parse = (styles: Styles) =>
  Object.entries(styles).reduce((str: string, [key, value]: [string, string | number]) => {
    str += `${camelToCSS[key] ? camelToCSS[key] : key}: ${value}`;
    return str;
  }, '');

export default parse;
