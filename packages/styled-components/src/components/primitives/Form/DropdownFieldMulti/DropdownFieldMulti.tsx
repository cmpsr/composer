import React, { useState } from 'react';
import cn from 'classnames';
import Downshift from 'downshift';
import {
  Icon,
  expand_more as ExpandMore,
  cancel as Cancel,
} from 'components/primitives/Icon';
import { Props, Option } from './DropdownFieldMulti.types';
import {
  StyledButton,
  StyledFlex,
  StyledIcon,
  StyledItemIcon,
  StyledListItem,
  StyledSpan,
  StyledUnorderedList,
  StyledIconWrapper,
} from './DropdownFieldMulti.styled';
import { Typography } from 'components/primitives/Typography';

export const DropdownMultiSelect = ({
  className,
  options,
  placeholder = 'Select an item',
  onItemChange,
  testId = 'dropdownFieldMulti',
  disabled = false,
  customCss,
}: Props) => {
  const [selectedItems, setSelectedItems] = useState(new Set<Option>());

  const addItem = (selectedItem: Option) => {
    if (!selectedItems.has(selectedItem)) {
      const newSet = new Set(selectedItems);
      newSet.add(selectedItem);
      setSelectedItems(newSet);
      onItemChange && onItemChange(Array.from(newSet.values()));
    }
  };

  const removeItem = (itemToRemove: Option) => {
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
        <StyledSpan key={`${value}`}>
          <Typography
            mode={Typography.Modes.Light100}
            tag={Typography.Tags.Span}
          >
            {label}
          </Typography>
          <StyledIconWrapper
            onClick={(e) => {
              e.stopPropagation();
              removeItem(item);
            }}
          >
            <StyledItemIcon width={18} height={18}>
              <Cancel type={Icon.Types.Filled} />
            </StyledItemIcon>
          </StyledIconWrapper>
        </StyledSpan>
      );
    });

    return items;
  };

  return (
    <Downshift
      onChange={(selectedItem) => addItem(selectedItem)}
      itemToString={(item) => item.value}
    >
      {({ isOpen, getToggleButtonProps, getMenuProps, getItemProps }) => (
        <div>
          <StyledButton
            {...getToggleButtonProps()}
            className={className}
            css={customCss}
            data-testid={testId}
            disabled={disabled}
          >
            {(selectedItems.size && (
              <StyledFlex data-testid="items-selected">
                {renderItems()}
              </StyledFlex>
            )) || (
              <Typography
                type={Typography.Types.Form}
                tag={Typography.Tags.Span}
              >
                {placeholder}
              </Typography>
            )}
            <StyledIcon width={24} height={24}>
              <ExpandMore type={Icon.Types.Filled} />
            </StyledIcon>
          </StyledButton>
          <StyledUnorderedList
            {...getMenuProps()}
            className={cn({
              hidden: !isOpen,
            })}
          >
            {isOpen &&
              options.map((item, index) => (
                <StyledListItem
                  key={`${index}${item.value}`}
                  {...getItemProps({ key: item.value, index, item })}
                >
                  <Typography
                    type={Typography.Types.Form}
                    tag={Typography.Tags.Span}
                  >
                    {item.label}
                  </Typography>
                </StyledListItem>
              ))}
          </StyledUnorderedList>
        </div>
      )}
    </Downshift>
  );
};
