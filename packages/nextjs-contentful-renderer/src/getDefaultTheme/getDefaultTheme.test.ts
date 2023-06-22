import { getDefaultTheme } from './getDefaultTheme';

const mockGetDefaultTheme = jest.fn();
jest.mock('../utils/contentful', () => ({
  getDefaultTheme: (...params) => mockGetDefaultTheme(...params),
}));

describe('getDefaultTheme', () => {
  const fakeTheme = {
    colors: {
      'text-light': 'red',
    },
  };
  mockGetDefaultTheme.mockResolvedValue(fakeTheme);

  test('should get default theme with default params', async () => {
    await getDefaultTheme(false);
    expect(mockGetDefaultTheme).toBeCalledTimes(1);
    expect(mockGetDefaultTheme).toBeCalledWith(expect.anything(), process.env.SITE_DOMAIN, false);
  });

  test('should get default theme with given params', async () => {
    await getDefaultTheme(true, 'some_random_domain');
    expect(mockGetDefaultTheme).toBeCalledTimes(1);
    expect(mockGetDefaultTheme).toBeCalledWith(expect.anything(), 'some_random_domain', true);
  });

  test('should return get default theme from contentful value', async () => {
    const theme = await getDefaultTheme(false);
    expect(theme).toStrictEqual(fakeTheme);
  });
});
