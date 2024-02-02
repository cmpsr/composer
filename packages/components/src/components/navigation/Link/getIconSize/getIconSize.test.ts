import { getIconSize } from './getIconSize';

describe('getIconSize', () => {
  describe('size is a string', () => {
    it.each`
      size   | expected
      ${'s'} | ${'s'}
      ${'m'} | ${'m'}
      ${'l'} | ${'m'}
    `(`returns $expected when size is $size`, ({ size, expected }) => {
      expect(getIconSize(size)).toStrictEqual(expected);
    });
  });

  describe('size is an array', () => {
    it.each`
      size               | expected
      ${['s', 'm', 'l']} | ${['s', 'm', 'm']}
    `(`returns $expected when size is $size`, ({ size, expected }) => {
      expect(getIconSize(size)).toStrictEqual(expected);
    });
  });

  describe('size is an object', () => {
    it.each`
      size                               | expected
      ${{ base: 's', md: 'm', lg: 'l' }} | ${{ base: 's', md: 'm', lg: 'm' }}
    `(`returns $expected when size is $size`, ({ size, expected }) => {
      expect(getIconSize(size)).toStrictEqual(expected);
    });
  });
});
