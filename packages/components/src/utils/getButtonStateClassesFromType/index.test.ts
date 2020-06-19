import { getButtonStateClassesFromType } from '.';
import { ButtonTypes } from '../../components/primitives/Button';

describe('getClassesFromType', () => {
  it('should return a string of classnames for primary button type', () => {
    const typeStateClasses = getButtonStateClassesFromType(ButtonTypes.Primary);
    expect(typeStateClasses).toEqual(
      'disabled:bg-states-contained-disabled ' +
        'disabled:pointer-events-none ' +
        'active:bg-states-contained-pressed ' +
        'hover:bg-states-contained-hover'
    );
  });
  it('should return a string of classnames for secondary button type', () => {
    const typeStateClasses = getButtonStateClassesFromType(
      ButtonTypes.Secondary
    );
    expect(typeStateClasses).toEqual(
      'disabled:bg-states-outlined-disabled ' +
        'disabled:pointer-events-none ' +
        'active:bg-states-outlined-pressed ' +
        'hover:bg-states-outlined-hover'
    );
  });
});
