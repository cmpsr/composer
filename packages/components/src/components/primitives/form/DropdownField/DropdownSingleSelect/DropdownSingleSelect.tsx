import React, { forwardRef } from 'react';
import cn from 'classnames';
import Downshift from 'downshift';

import { Icon } from 'components/primitives';
import { expand_more as ExpandMore } from 'components/primitives/Icon/icons/navigation';

export const DROPDOWN_DEFAULT_TEST_ID = 'dropdown';

interface Option {
  label: any;
  value: any;
}

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

export const DropdownSingleSelect = forwardRef<HTMLElement, Props>(
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
    return (
      <Downshift
        initialSelectedItem={initialSelectedOption}
        onChange={(selectedItem) => {
          onItemChange && onItemChange(selectedItem);
        }}
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
                  'flex items-center justify-between px-3 h-12 appearance-none w-full text-dark-100 bg-fill-forms-enabled border rounded focus:border-outline-forms-focus border-outline-forms-filled text-left focus:outline-none',
                  {
                    'bg-gray-200': disabled,
                    'border-outline-forms-filled hover:border-fill-primary-100': !disabled,
                  },
                  { 'border-fill-system-error': invalid },
                  className
                )}
                data-testid={testId}
                disabled={disabled}
              >
                {(selectedItem && <span>{selectedItem.label}</span>) || (
                  <span className="text-outline-forms-filled">
                    {placeHolder}
                  </span>
                )}
                <Icon width={24} height={24} className="fill-current">
                  <ExpandMore type="filled" />
                </Icon>
              </button>
              {isOpen && (
                <ul
                  {...getMenuProps()}
                  className="border rounded-b border-outline-primary-100"
                >
                  {options.map((item, index) => (
                    <li
                      className="p-3 hover:bg-gray-100"
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
