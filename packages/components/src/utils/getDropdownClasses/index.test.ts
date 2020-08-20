import { getItemClasses, getListClasses } from './index';

describe('getDropdownClasses', () => {
  it('should return an object with classnames', () => {
    const listClasses = getListClasses();
    expect(listClasses).toStrictEqual({
      wrapper: 'absolute flex flex-col items-left shadow-lg',
    });
  });
  it('should return an object with classnames', () => {
    const itemClasses = getItemClasses();
    expect(itemClasses).toStrictEqual({
      wrapper:
        'flex items-center justify-left px-6 py-4 hover:bg-fill-state-ui-hover whitespace-no-wrap cursor-pointer focus:outline-none',
      iconClasses: 'fill-current mr-3',
      titleWrapper: 'flex flex-col',
    });
  });
});
