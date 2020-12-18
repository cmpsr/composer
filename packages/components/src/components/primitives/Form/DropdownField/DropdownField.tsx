import React, { forwardRef, useState } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';
import Downshift from 'downshift';
import {
  StyledWrapperMobile,
  StyledIconWrapperMobile,
  StyledIconMobile,
  StyledSelectMobile,
  StyledUnorderedListDesktop,
  StyledListItemDesktop,
  StyledIconDesktop,
  StyledButtonDesktop,
  StyledWrapper,
} from './DropdownField.styled';
import { Props } from './DropdownField.types';
import {
  Icon,
  expand_more as ExpandMore,
  expand_less as ExpandLess,
} from 'components/primitives/Icon';
import { Typography } from 'components/primitives';

export const DropdownField = forwardRef<HTMLSelectElement, Props>(
  (props: Props, ref) =>
    isMobile ? (
      <DropdownMobile {...props} ref={ref} />
    ) : (
      <DropdownDesktop {...props} ref={ref} />
    )
);

const DropdownMobile = forwardRef<HTMLSelectElement, Props>(
  (
    {
      className,
      options,
      placeholder = 'Select an item',
      initialSelectedOption,
      onItemChange,
      testId = 'dropdownMobile',
      disabled = false,
      name = 'dropdown',
      invalid,
      customCss,
    }: Props,
    ref
  ) => {
    const defaultValue = initialSelectedOption?.value;
    const [itemSelected, setItemSelected] = useState(defaultValue || '');

    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const index = event.target.selectedIndex;
      const value = event.target.value;
      setItemSelected(value);
      onItemChange(options[index - 1]);
    };

    return (
      <StyledWrapperMobile>
        <StyledSelectMobile
          css={customCss}
          value={itemSelected}
          className={cn(className, { invalid, itemSelected })}
          onChange={handleOnChange}
          name={name}
          disabled={disabled}
          data-testid={testId}
          ref={ref}
        >
          <option value="">{placeholder}</option>
          {options.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </StyledSelectMobile>
        <StyledIconWrapperMobile>
          <StyledIconMobile>
            <ExpandMore type={Icon.Types.Filled} />
          </StyledIconMobile>
        </StyledIconWrapperMobile>
      </StyledWrapperMobile>
    );
  }
);

const DropdownDesktop = forwardRef<HTMLSelectElement, Props>(
  (
    {
      className,
      options,
      placeholder = 'Select an item',
      initialSelectedOption,
      onItemChange,
      testId = 'dropdownDesktop',
      disabled = false,
      name = 'dropdown',
      invalid,
      customCss,
    }: Props,
    ref
  ) => {
    const defaultValue = initialSelectedOption?.value;
    const [itemSelected, setItemSelected] = useState(defaultValue || null);

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
          getRootProps,
        }) => (
          <StyledWrapper {...getRootProps({ refKey: 'innerRef' })}>
            <StyledButtonDesktop
              css={customCss}
              {...getToggleButtonProps()}
              name={name}
              ref={ref}
              className={cn(className, { invalid, itemSelected })}
              data-testid={testId}
              disabled={disabled}
            >
              <Typography
                type={Typography.Types.Form}
                tag={Typography.Tags.Span}
              >
                {selectedItem ? selectedItem.label : placeholder}
              </Typography>
              <StyledIconDesktop>
                {!isOpen ? (
                  <ExpandMore type={Icon.Types.Filled} />
                ) : (
                  <ExpandLess type={Icon.Types.Filled} />
                )}
              </StyledIconDesktop>
            </StyledButtonDesktop>
            {isOpen && (
              <StyledUnorderedListDesktop {...getMenuProps()}>
                {options.map((item, index) => (
                  <StyledListItemDesktop
                    key={index}
                    {...getItemProps({ key: item.value, index, item })}
                  >
                    <Typography
                      type={Typography.Types.Form}
                      tag={Typography.Tags.Span}
                    >
                      {item.label}
                    </Typography>
                  </StyledListItemDesktop>
                ))}
              </StyledUnorderedListDesktop>
            )}
          </StyledWrapper>
        )}
      </Downshift>
    );
  }
);
