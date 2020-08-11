import React, { useState } from 'react';
import cn from 'classnames';
import Downshift from 'downshift';

import { Icon } from 'components/primitives';
import { expand_more as ExpandMore } from 'components/primitives/Icon/icons/navigation';
import { cancel as Cancel } from 'components/primitives/Icon/icons/navigation';

export const DROPDOWN_DEFAULT_TEST_ID = 'dropdown';

type Props = {
  className?: string;
  options?: { label: any; value: any }[];
  placeHolder?: string;
  onItemChange?: (...args: any[]) => void;
  testId?: string;
  disabled?: boolean;
};

interface SelectedItem {
  label: string;
  value: string;
}

export const DropdownMultiSelect = ({
  className,
  options,
  placeHolder = 'Select an item',
  onItemChange,
  testId = DROPDOWN_DEFAULT_TEST_ID,
  disabled = false,
}: Props) => {
  const [selectedItems, setSelectedItems] = useState(new Set<SelectedItem>());

  const addItem = (selectedItem: SelectedItem) => {
    if (!selectedItems.has(selectedItem)) {
      const newSet = new Set(selectedItems);
      newSet.add(selectedItem);
      setSelectedItems(newSet);
      onItemChange && onItemChange(Array.from(newSet.values()));
    }
  };

  const removeItem = (itemToRemove: SelectedItem) => {
    if (selectedItems.has(itemToRemove)) {
      const newSet = new Set(selectedItems);
      newSet.delete(itemToRemove);
      setSelectedItems(newSet);
      onItemChange(Array.from(newSet.values()));
    }
  };

  const renderItems = () => {
    const items = [];

    selectedItems.forEach((item) => {
      const { value, label } = item;
      items.push(
        <span
          key={`${value}`}
          className="flex mr-1 items-center justify-between bg-gray-900 text-sm text-white rounded-full px-3 h-8"
        >
          {label}
          <div
            onClick={(e) => {
              e.stopPropagation();
              removeItem(item);
            }}
          >
            <Icon width={18} height={18} className="fill-current ml-3">
              <Cancel type="filled" />
            </Icon>
          </div>
        </span>
      );
    });

    return items;
  };

  return (
    <Downshift
      onChange={(selectedItem) => addItem(selectedItem)}
      itemToString={(item) => item.value}
    >
      {({ isOpen, getToggleButtonProps, getMenuProps, getItemProps }) => {
        return (
          <div>
            <button
              {...getToggleButtonProps()}
              className={cn(
                'flex justify-between items-center h-12 px-3 appearance-none w-full bg-white border rounded focus:outline-none text-left',
                {
                  'bg-gray-200': disabled,
                  'border-outline-primary-900 hover:border-fill-primary-900': !disabled,
                },
                className
              )}
              data-testid={testId}
              disabled={disabled}
            >
              {(selectedItems.size && (
                <div className="flex" data-testid="items-selected">
                  {renderItems()}
                </div>
              )) || <span className="text-gray-500">{placeHolder}</span>}
              <Icon width={24} height={24} className="fill-current">
                <ExpandMore type="filled" />
              </Icon>
            </button>
            <ul
              {...getMenuProps()}
              className={cn('border rounded-b border-outline-primary-900', {
                hidden: !isOpen,
              })}
            >
              {isOpen &&
                options.map((item, index) => (
                  <li
                    className="p-3 hover:bg-gray-100"
                    key={`${index}${item.value}`}
                    {...getItemProps({ key: item.value, index, item })}
                  >
                    {item.label}
                  </li>
                ))}
            </ul>
          </div>
        );
      }}
    </Downshift>
  );
};
