import '@testing-library/jest-dom';

import parse from './parseCSS';

describe('it should test all utility functions used', () => {
  it('should parse camel case object properties to hypen case CSS properties', () => {
    const csObject = {
      backgroundColor: 'purple',
      minHeight: '500px',
      alignItems: 'left',
      flexFlow: 'row',
      rotate: '2',
    };
    const css = parse(csObject);
    expect(css).toEqual('background-color: purple;min-height: 500px;align-items: left;flex-flow: row;rotate: 2;');
  });
});
