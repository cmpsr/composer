import React, { forwardRef, useState } from 'react';
import cn from 'classnames';
import { Icon } from 'components/primitives';
import { expand_more as ExpandMore } from 'components/primitives/Icon/icons/navigation';
import { getDropdownSingleSelectClasses } from 'utils/getDropdownSingleSelectClasses';
import { SelectProps, DROPDOWN_DEFAULT_TEST_ID } from '../DropdownSingleSelect';

export const DropdownNativeSelect = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      options,
      placeHolder = 'Select an item',
      initialSelectedOption,
      onItemChange,
      testId = DROPDOWN_DEFAULT_TEST_ID,
      disabled = false,
      name = 'dropdown',
      invalid,
    }: SelectProps,
    ref
  ) => {
    const defaultValue = initialSelectedOption?.value;
    const [itemSelected, setItemSelected] = useState(defaultValue || '');

    const {
      selectWrapper,
      selectClasses,
      selectTextClasses,
      selectFocusClasses,
      selectDisabledClasses,
      selectErrorClasses,
      iconWrapper,
      icon,
    } = getDropdownSingleSelectClasses(disabled, invalid, itemSelected);

    const handleOnChange = (event) => {
      const index = event.target.selectedIndex;
      const value = event.target.value;

      setItemSelected(value);
      return onItemChange(options[index]);
    };

    return (
      <div className={selectWrapper}>
        <select
          value={itemSelected}
          className={cn(
            selectClasses,
            selectTextClasses,
            selectFocusClasses,
            selectDisabledClasses,
            selectErrorClasses,
            className
          )}
          onChange={handleOnChange}
          name={name}
          disabled={disabled}
          data-testid={testId}
          ref={ref}
        >
          <option value="">{placeHolder}</option>
          {options.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <div className={iconWrapper}>
          <Icon className={icon}>
            <ExpandMore type="filled" />
          </Icon>
        </div>
      </div>
    );
  }
);
