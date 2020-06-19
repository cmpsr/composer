import { ButtonTypes } from 'components/primitives/Button';

export const getButtonStateClassesFromType = (type: ButtonTypes) => {
  if (type === ButtonTypes.Primary) {
    return (
      'disabled:bg-states-contained-disabled ' +
      'disabled:pointer-events-none ' +
      'active:bg-states-contained-pressed ' +
      'hover:bg-states-contained-hover'
    );
  } else if (type === ButtonTypes.Secondary) {
    return (
      'disabled:bg-states-outlined-disabled ' +
      'disabled:pointer-events-none ' +
      'active:bg-states-outlined-pressed ' +
      'hover:bg-states-outlined-hover'
    );
  }
};
