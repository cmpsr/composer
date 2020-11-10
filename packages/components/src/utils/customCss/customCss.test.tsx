import { customCss } from '.';

describe('customCss', () => {
  it('should return empty string if no custom css prop', () => {
    const css = customCss({});
    expect(css).toBe('');
  });
  it('should return custom css class', () => {
    const style = 'color: white';
    const css = customCss({ css: style });
    expect(css).toContain('& {');
    expect(css).toContain(style);
  });
});
