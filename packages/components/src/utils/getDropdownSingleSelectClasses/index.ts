export const getDropdownSingleSelectClasses = (
  disabled = false,
  invalid = false,
  itemSelected
) => {
  return {
    selectWrapper: 'relative',
    buttonClasses: 'flex items-center justify-between',
    selectClasses: `appearance-none px-3 h-12 w-full bg-fill-form-enabled border rounded text-left ${
      invalid ? 'border-fill-system-error' : 'focus:border-outline-form-focus'
    } focus:outline-none text-form`,
    selectTextClasses: `${
      itemSelected ? 'text-dark-100' : 'text-outline-form-filled'
    }`,
    selectDisabledClasses: disabled
      ? 'bg-fill-form-disabled border-outline-form-disabled !text-outline-form-filled'
      : 'border-outline-form-filled hover:border-state-primary-enabled',
    iconWrapper:
      'pointer-events-none absolute inset-y-0 flex items-center z-10 right-0 pr-3',
    icon: 'fill-current text-fill-black-300',
    selectListClasses: 'border rounded-b border-outline-primary-900',
    itemListClasses: 'p-3 hover:bg-gray-100',
  };
};
