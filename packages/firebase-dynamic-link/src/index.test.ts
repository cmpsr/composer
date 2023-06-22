import getLinkShortener, { LinkShortener } from '.';

describe('getLinkShortener', () => {
  it('should return link shortener instance', () => {
    expect(getLinkShortener('', '')).toBeInstanceOf(LinkShortener);
  });
});
