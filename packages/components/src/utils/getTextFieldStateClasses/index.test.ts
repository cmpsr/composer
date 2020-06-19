import { getTextFieldStateClasses } from '.';

describe('getTextFieldStateClasses', () => {
  it('should return a string of classnames for disabled true and invalid false', () => {
    const disabled = true;
    const invalid = false;
    const textFieldStateClasses = getTextFieldStateClasses(disabled, invalid);
    expect(textFieldStateClasses).toEqual(
      'disabled:placeholder-dark-50 ' +
        'disabled:bg-fill-forms-disabled ' +
        'disabled:border-outline-forms-disabled '
    );
  });
  it('should return a string of classnames for disabled false and invalid false', () => {
    const disabled = false;
    const invalid = false;
    const textFieldStateClasses = getTextFieldStateClasses(disabled, invalid);
    expect(textFieldStateClasses).toEqual(
      'border-outline-forms-filled ' +
        'focus:outline-none ' +
        'placeholder-outline-forms-filled ' +
        'focus:border-outline-forms-focus'
    );
  });
  it('should return a string of classnames for disabled false and invalid true', () => {
    const disabled = false;
    const invalid = true;
    const textFieldStateClasses = getTextFieldStateClasses(disabled, invalid);
    expect(textFieldStateClasses).toEqual(
      'border-outline-forms-filled ' +
        'focus:outline-none ' +
        'placeholder-outline-forms-filled ' +
        'border-fill-system-error'
    );
  });
});
