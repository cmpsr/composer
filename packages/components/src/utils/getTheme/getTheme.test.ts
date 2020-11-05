import { getTheme } from '.';
import theme from 'styles/theme';

describe('getTheme', () => {
  it('should return default theme if no theme provided', () => {
    const currentTheme = getTheme({});
    expect(currentTheme).toStrictEqual(theme);
  });
  it('should return default theme if theme is empty', () => {
    const currentTheme = getTheme({ theme: {} });
    expect(currentTheme).toStrictEqual(theme);
  });
  it('should return given theme', () => {
    const givenTheme = { prop: 'value' };
    const currentTheme = getTheme({ theme: givenTheme });
    expect(currentTheme).toStrictEqual(givenTheme);
  });
});
