import { getClassesFromStyle } from '.';

const input = {
  background: {
    default: {
      bg: 'fill-primary-600',
    },
    sm: {
      bg: 'fill-primary-700',
    },
    md: {
      bg: 'fill-primary-800',
    },
    lg: {
      bg: 'fill-primary-900',
    },
  },
};
describe('getClassesFromStyle', () => {
  it('should return a string of with the correct value', () => {
    const result = getClassesFromStyle(input.background);
    expect(result).toEqual(
      'bg-fill-primary-600 sm:bg-fill-primary-700 md:bg-fill-primary-800 lg:bg-fill-primary-900'
    );
  });
});
