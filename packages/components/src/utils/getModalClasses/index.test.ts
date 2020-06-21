import { getModalClasses } from '.';

describe('getModalClasses', () => {
  it('should return a string of classnames for modal', () => {
    const classes = getModalClasses();
    expect(classes).toStrictEqual({
      modalWrapper: `opacity-0`,
      wrapper: 'shadow-xl px-8 pt-8 pb-6 bg-white focus:outline-none absolute',
      overlay: `fixed top-0 left-0 right-0 bottom-0 bg-fill-overlay flex justify-center items-center z-20`,
    });
  });
});
