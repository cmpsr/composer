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

export const DropdownFieldMulti = ({
  className,
  options,
  placeholder = 'Select an item',
  onItemChange,
  testId = 'dropdownFieldMulti',
  disabled = false,
  customCss,
  initialSelectedOptions = [],
}: Props) => {
  const initialOptions = initialSelectedOptions;
  const [selectedItems, setSelectedItems] = useState(initialOptions);

  const addItem = (selectedItem: Option) => {
    if (!selectedItems.includes(selectedItem)) {
      const newItems = [...selectedItems, selectedItem];
      setSelectedItems(newItems);
      onItemChange && onItemChange(newItems);
    }
  };

  const removeItem = (itemToRemove: Option) => {
    if (selectedItems.includes(itemToRemove)) {
      let newItems = selectedItems;
      newItems = newItems.filter((item) => item !== itemToRemove);
      setSelectedItems(newItems);
      onItemChange && onItemChange(newItems);
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
            {(selectedItems.length > 0 && (
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
