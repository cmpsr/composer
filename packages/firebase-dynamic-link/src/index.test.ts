import getLinkShortener from '.';
import { LinkShortener } from './integration/LinkShortener';

describe('getLinkShortener', () => {
  it('should return link shortener instance', () => {
    expect(getLinkShortener('', '')).toBeInstanceOf(LinkShortener);
  });
});
