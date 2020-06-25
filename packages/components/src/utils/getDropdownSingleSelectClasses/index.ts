export const getDropdownSingleSelectClasses = (
  disabled = false,
  invalid = false,
  itemSelected
) => {
  return {
    selectWrapper: 'relative',
    buttonClasses: 'flex items-center justify-between',
    selectClasses:
      'appearance-none px-3 h-12 w-full bg-fill-forms-enabled border rounded text-left',
    selectTextClasses: `${
      itemSelected ? 'text-fill-forms-filled' : 'text-fill-forms-inactive'
    }`,
    selectFocusClasses: 'focus:border-outline-forms-focus focus:outline-none',
    selectDisabledClasses: disabled
      ? 'bg-fill-forms-disabled border-outline-forms-disabled !text-fill-forms-inactive'
      : 'border-outline-forms-filled hover:border-fill-primary-100',
    selectErrorClasses: `${invalid ? 'border-fill-system-error' : ''}`,
    iconWrapper:
      'pointer-events-none absolute inset-y-0 flex items-center z-10 right-0 pr-3',
    icon: 'fill-current text-fill-black-50',
    selectListClasses: 'border rounded-b border-outline-primary-100',
    itemListClasses: 'p-3 hover:bg-gray-100',
  };
};
