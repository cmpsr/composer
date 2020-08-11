import { ExpandableTextFieldIconPosition } from 'components/primitives/form/ExpandableTextFieldIcon';

export const getExpandableTextFieldIconClasses = (
  iconPosition: ExpandableTextFieldIconPosition,
  isIconEnabled: boolean
) => {
  const isIconLeft = iconPosition === ExpandableTextFieldIconPosition.Left;
  return {
    wrapperClasses: 'flex items-end',
    iconWrapperClasses: `${
      isIconLeft ? 'order-1 pr-4' : 'order-2 pl-4'
    } min-h-2-625 md:min-h-3`,
    iconClasses: `${
      isIconEnabled ? 'text-fill-primary-900' : 'text-fill-primary-600'
    } fill-current cursor-pointer mt-2 md:mt-0-625`,
    expandableTextFieldClasses: `${isIconLeft ? 'order-2' : 'order-1'}`,
  };
};
