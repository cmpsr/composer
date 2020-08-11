import { getButtonStateClassesFromType } from '.';
import { ButtonTypes } from '../../components/primitives/Button';

describe('getClassesFromType', () => {
  it('should return a string of classnames for primary button type', () => {
    const typeStateClasses = getButtonStateClassesFromType(ButtonTypes.Primary);
    expect(typeStateClasses).toEqual(
      'disabled:bg-state-primary-disabled ' +
        'disabled:pointer-events-none ' +
        'active:bg-state-primary-pressed ' +
        'hover:bg-state-primary-hover'
    );
  });
  it('should return a string of classnames for secondary button type', () => {
    const typeStateClasses = getButtonStateClassesFromType(
      ButtonTypes.Secondary
    );
    expect(typeStateClasses).toEqual(
      'disabled:bg-fill-state-secondary-disabled ' +
        'disabled:pointer-events-none ' +
        'active:bg-fill-state-secondary-pressed ' +
        'hover:bg-fill-state-secondary-hover'
    );
  });
});
