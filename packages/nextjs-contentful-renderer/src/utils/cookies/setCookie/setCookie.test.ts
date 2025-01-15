import { setCookie } from './setCookie';

describe('setCookie', () => {
  const mockSetHeader = jest.fn();
  const fakeContext: any = {
    res: {
      setHeader: (key: string, value: string) => mockSetHeader(key, value),
    },
  };

  test('should set cookie and value with default max-age', () => {
    setCookie(fakeContext, 'cookie', 'value');
    expect(mockSetHeader).toBeCalledTimes(1);
    expect(mockSetHeader).toBeCalledWith('Set-Cookie', 'x-cmpsr-pages-cookie=value; Max-Age=3600');
  });
  test('should set custom max age', () => {
    setCookie(fakeContext, 'cookie', 'value', { maxAge: 1200 });
    expect(mockSetHeader).toBeCalledTimes(1);
    expect(mockSetHeader).toBeCalledWith('Set-Cookie', 'x-cmpsr-pages-cookie=value; Max-Age=1200');
  });
  test('should convert value to string if number provided', () => {
    setCookie(fakeContext, 'cookie', 5);
    expect(mockSetHeader).toBeCalledTimes(1);
    expect(mockSetHeader).toBeCalledWith('Set-Cookie', 'x-cmpsr-pages-cookie=5; Max-Age=3600');
  });
  test('should stringify and serialise value if an object is provided', () => {
    setCookie(fakeContext, 'cookie', { key: 'value' });
    expect(mockSetHeader).toBeCalledTimes(1);
    expect(mockSetHeader).toBeCalledWith(
      'Set-Cookie',
      'x-cmpsr-pages-cookie=%7B%22key%22%3A%22value%22%7D; Max-Age=3600',
    );
  });
});
