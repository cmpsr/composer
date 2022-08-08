import { renderHookWithProviders } from '@tests/renderHookWithProviders';
import { useScrollPosition } from '.';

describe('useScrollPosition', () => {
  const originalPageYOffset = window.pageYOffset;

  afterAll(() => {
    Object.defineProperty(window, 'pageYOffset', { value: originalPageYOffset });
  });

  test('should return scroll position default value 0', () => {
    const {
      result: { current },
    } = renderHookWithProviders(useScrollPosition);
    expect(current).toBe(0);
  });

  test('should return scroll position when page y has scrolled', () => {
    Object.defineProperty(window, 'pageYOffset', { value: 100 });
    const {
      result: { current },
    } = renderHookWithProviders(useScrollPosition);
    expect(current).toBe(100);
  });
});
