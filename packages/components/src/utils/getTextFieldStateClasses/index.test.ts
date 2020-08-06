import { getTextFieldStateClasses } from '.';

describe('getTextFieldStateClasses', () => {
  it('should return a string of classnames for disabled true and invalid false', () => {
    const disabled = true;
    const invalid = false;
    const textFieldStateClasses = getTextFieldStateClasses(disabled, invalid);
    expect(textFieldStateClasses).toEqual(
      'disabled:placeholder-dark-50 ' +
        'disabled:bg-fill-form-disabled ' +
        'disabled:border-outline-form-disabled '
    );
  });
  it('should return a string of classnames for disabled false and invalid false', () => {
    const disabled = false;
    const invalid = false;
    const textFieldStateClasses = getTextFieldStateClasses(disabled, invalid);
    expect(textFieldStateClasses).toEqual(
      'border-outline-form-filled ' +
        'focus:outline-none ' +
        'placeholder-outline-form-filled ' +
        'focus:border-outline-form-focus'
    );
  });
  it('should return a string of classnames for disabled false and invalid true', () => {
    const disabled = false;
    const invalid = true;
    const textFieldStateClasses = getTextFieldStateClasses(disabled, invalid);
    expect(textFieldStateClasses).toEqual(
      'border-outline-form-filled ' +
        'focus:outline-none ' +
        'placeholder-outline-form-filled ' +
        'border-fill-system-error'
    );
  });
});
