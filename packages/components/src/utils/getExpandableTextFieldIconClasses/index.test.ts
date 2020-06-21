import { getExpandableTextFieldIconClasses } from '.';
import { ExpandableTextFieldIconPosition } from '../../components/primitives/form/ExpandableTextFieldIcon';

describe('getExpandableTextFieldIconClasses', () => {
  it('should return an object of classnames when icon position is left', () => {
    const classes = getExpandableTextFieldIconClasses(
      ExpandableTextFieldIconPosition.Left,
      false
    );
    expect(classes).toStrictEqual({
      wrapperClasses: 'flex items-end',
      iconWrapperClasses: 'order-1 pr-4 min-h-2-625 md:min-h-3',
      iconClasses:
        'text-fill-primary-25 fill-current cursor-pointer mt-2 md:mt-0-625',
      expandableTextFieldClasses: 'order-2',
    });
  });
  it('should return an object of classnames when icon position is right', () => {
    const classes = getExpandableTextFieldIconClasses(
      ExpandableTextFieldIconPosition.Right,
      false
    );
    expect(classes).toStrictEqual({
      wrapperClasses: 'flex items-end',
      iconWrapperClasses: 'order-2 pl-4 min-h-2-625 md:min-h-3',
      iconClasses:
        'text-fill-primary-25 fill-current cursor-pointer mt-2 md:mt-0-625',
      expandableTextFieldClasses: 'order-1',
    });
  });
  it('should return iconClasses when isIconEnabled is true', () => {
    const { iconClasses } = getExpandableTextFieldIconClasses(
      ExpandableTextFieldIconPosition.Right,
      true
    );
    expect(iconClasses).toStrictEqual(
      'text-fill-primary-100 fill-current cursor-pointer mt-2 md:mt-0-625'
    );
  });
  it('should return iconClasses when isIconEnabled is false', () => {
    const { iconClasses } = getExpandableTextFieldIconClasses(
      ExpandableTextFieldIconPosition.Right,
      false
    );
    expect(iconClasses).toStrictEqual(
      'text-fill-primary-25 fill-current cursor-pointer mt-2 md:mt-0-625'
    );
  });
});
