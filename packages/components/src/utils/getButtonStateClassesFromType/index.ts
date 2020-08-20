import { ButtonTypes } from 'components/primitives/Button';

export const getButtonStateClassesFromType = (type: ButtonTypes) => {
  if (type === ButtonTypes.Primary) {
    return (
      'disabled:bg-fill-state-primary-disabled ' +
      'disabled:pointer-events-none ' +
      'active:bg-fill-state-primary-pressed ' +
      'hover:bg-fill-state-primary-hover'
    );
  } else if (type === ButtonTypes.Secondary) {
    return (
      'disabled:bg-fill-state-secondary-disabled ' +
      'disabled:pointer-events-none ' +
      'active:bg-fill-state-secondary-pressed ' +
      'hover:bg-fill-state-secondary-hover'
    );
  }
};
