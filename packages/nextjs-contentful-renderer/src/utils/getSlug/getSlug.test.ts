import { getSlug } from '.';

describe('getSlug', () => {
  test.each`
    slug           | expected
    ${''}          | ${''}
    ${'/'}         | ${'/'}
    ${'/test/url'} | ${'/test/url'}
  `('should return ("$expected") for ("$slug")', ({ slug, expected }) => {
    expect(getSlug(slug)).toBe(expected);
  });

  test.each`
    arr                         | expected
    ${['']}                     | ${''}
    ${['/']}                    | ${'/'}
    ${['/test', 'url']}         | ${'/test/url'}
    ${['/test', 'long', 'url']} | ${'/test/long/url'}
  `('should return ("$expected") for ("$arr")', ({ arr, expected }) => {
    expect(getSlug(arr)).toBe(expected);
  });
});
