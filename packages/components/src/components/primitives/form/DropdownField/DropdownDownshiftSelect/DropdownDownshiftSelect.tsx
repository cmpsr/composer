import React, { forwardRef, useState } from 'react';
import cn from 'classnames';
import Downshift from 'downshift';
import { getDropdownSingleSelectClasses } from 'utils/getDropdownSingleSelectClasses';
import { SelectProps } from '../DropdownSingleSelect';
import { Icon } from 'components/primitives';
import {
  expand_more as ExpandMore,
  expand_less as ExpandLess,
} from 'components/primitives/Icon/icons/navigation';

export const DROPDOWN_DOWNSHIFT_DEFAULT_TEST_ID = 'dropdown-downshift';

export const DropdownDownshiftSelect = forwardRef<
  HTMLSelectElement,
  SelectProps
>(
  (
    {
      className,
      options,
      placeHolder = 'Select an item',
      initialSelectedOption,
      onItemChange,
      testId = DROPDOWN_DOWNSHIFT_DEFAULT_TEST_ID,
      disabled = false,
      name = 'dropdown',
      invalid,
    }: SelectProps,
    ref
  ) => {
    const defaultValue = initialSelectedOption?.value;
    const [itemSelected, setItemSelected] = useState(defaultValue || null);
    const {
      selectClasses,
      buttonClasses,
      selectTextClasses,
      selectDisabledClasses,
      selectListClasses,
      itemListClasses,
      icon,
    } = getDropdownSingleSelectClasses(disabled, invalid, itemSelected);

    const handleOnChange = (selectedItem) => {
      if (onItemChange) {
        onItemChange(selectedItem);
      }
      setItemSelected(selectedItem?.value);
    };

    return (
      <Downshift
        initialSelectedItem={initialSelectedOption}
        onChange={(selectedItem) => handleOnChange(selectedItem)}
        itemToString={(item) => (item ? item.value : '')}
      >
        {({
          isOpen,
          selectedItem,
          getToggleButtonProps,
          getMenuProps,
          getItemProps,
        }) => {
          return (
            <div>
              <button
                {...getToggleButtonProps()}
                name={name}
                ref={ref}
                className={cn(
                  buttonClasses,
                  selectClasses,
                  selectTextClasses,
                  selectDisabledClasses,
                  className
                )}
                data-testid={testId}
                disabled={disabled}
              >
                <span>{selectedItem ? selectedItem.label : placeHolder}</span>
                <Icon className={icon}>
                  {!isOpen ? (
                    <ExpandMore type="filled" />
                  ) : (
                    <ExpandLess type="filled" />
                  )}
                </Icon>
              </button>
              {isOpen && (
                <ul {...getMenuProps()} className={selectListClasses}>
                  {options.map((item, index) => (
                    <li
                      className={itemListClasses}
                      key={index}
                      {...getItemProps({ key: item.value, index, item })}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        }}
      </Downshift>
    );
  }
);
