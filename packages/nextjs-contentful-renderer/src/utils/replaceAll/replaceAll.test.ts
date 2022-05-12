import { replaceAll } from '.';

describe('replaceAll', () => {
  const textToReplace = 'text';
  const replaceValue = 'hello';
  test.each`
    value                                            | expectedOutput
    ${''}                                            | ${''}
    ${textToReplace}                                 | ${replaceValue}
    ${textToReplace + textToReplace}                 | ${replaceValue + replaceValue}
    ${textToReplace + '-' + textToReplace}           | ${replaceValue + '-' + replaceValue}
    ${'/Text' + textToReplace + '-' + textToReplace} | ${'/Text' + replaceValue + '-' + replaceValue}
  `('should return "$expectedOutput" for "$value"', ({ value, expectedOutput }) => {
    expect(replaceAll(textToReplace, replaceValue)(value)).toBe(expectedOutput);
  });
});
