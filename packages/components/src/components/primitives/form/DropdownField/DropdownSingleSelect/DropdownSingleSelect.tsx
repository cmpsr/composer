import React, { forwardRef, useState } from 'react';
import cn from 'classnames';
import Downshift from 'downshift';
import { isMobile } from 'react-device-detect';
import { DropdownNativeSelect, Option } from '../DropdownNativeSelect';
import { getDropdownSingleSelectClasses } from 'utils/getDropdownSingleSelectClasses';

import { Icon } from 'components/primitives';
import {
  expand_more as ExpandMore,
  expand_less as ExpandLess,
} from 'components/primitives/Icon/icons/navigation';

export const DROPDOWN_DEFAULT_TEST_ID = 'dropdown';

type Props = {
  className?: string;
  options?: Option[];
  placeHolder?: string;
  initialSelectedOption?: Option;
  onItemChange?: (item: Option) => void;
  testId?: string;
  disabled?: boolean;
  name?: string;
  invalid?: boolean;
};

export const DropdownSingleSelect = forwardRef<HTMLSelectElement, Props>(
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
    }: Props,
    ref
  ) => {
    const defaultValue = initialSelectedOption && initialSelectedOption.value;
    const [itemSelected, setItemSelected] = useState(defaultValue || null);
    const {
      selectClasses,
      buttonClasses,
      selectTextClasses,
      selectFocusClasses,
      selectDisabledClasses,
      selectErrorClasses,
      selectListClasses,
      itemListClasses,
      icon,
    } = getDropdownSingleSelectClasses(disabled, invalid, itemSelected);

    if (isMobile) {
      return (
        <DropdownNativeSelect
          className={className}
          options={options}
          placeHolder={placeHolder}
          initialSelectedOption={initialSelectedOption}
          onItemChange={onItemChange}
          disabled={disabled}
          name={name}
          invalid={invalid}
          ref={ref}
        />
      );
    }

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
                  selectFocusClasses,
                  selectDisabledClasses,
                  selectErrorClasses,
                  className
                )}
                data-testid={testId}
                disabled={disabled}
              >
                <span>{selectedItem ? selectedItem.label : placeHolder}</span>
                <Icon width={24} height={24} className={icon}>
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
                      key={`${index}${item.value}`}
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
