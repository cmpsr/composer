import React, { forwardRef, useState } from 'react';
import cn from 'classnames';
import { Icon } from 'components/primitives';
import { expand_more as ExpandMore } from 'components/primitives/Icon/icons/navigation';
import { Props } from 'components/primitives/Form/DropdownField/DropdownField.types';
import {
  StyledWrapper,
  StyledIconWrapper,
  StyledIcon,
  StyledSelect,
} from './DropdownNativeSelect.styled';

export const DropdownNativeSelect = forwardRef<HTMLSelectElement, Props>(
  (
    {
      className,
      options,
      placeholder = 'Select an item',
      initialSelectedOption,
      onItemChange,
      testId = 'dropdownNativeSelect',
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
      <StyledWrapper>
        <StyledSelect
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
        </StyledSelect>
        <StyledIconWrapper>
          <StyledIcon>
            <ExpandMore type={Icon.Types.Filled} />
          </StyledIcon>
        </StyledIconWrapper>
      </StyledWrapper>
    );
  }
);
