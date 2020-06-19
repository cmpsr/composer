import { getExpandableTextFieldClasses } from '.';

describe('getExpandableTextFieldClasses', () => {
  it('should return an object of classnames', () => {
    const classes = getExpandableTextFieldClasses();
    expect(classes).toStrictEqual({
      wrapperClasses: 'relative w-full',
      placeholderClasses:
        'pointer-events-none text-outline-forms-filled absolute top-0 z-20 transform -translate-y-1/2 top-1/2 left-1',
      expandableTextFieldClasses:
        'md:min-h-3 min-h-2-625 h-2-625 md:h-12 relative left-0 top-0 form-input py-0-625 px-4 focus:border-outline-forms-focus resize-none border-outline-forms-filled border focus:outline-none focus:border-fill-primary-100',
    });
  });
});
