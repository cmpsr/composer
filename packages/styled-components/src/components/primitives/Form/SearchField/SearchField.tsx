import React, { forwardRef } from 'react';
import cn from 'classnames';
import { Icon } from 'components/primitives';
import { search as Search } from 'components/primitives/Icon/icons/action';
import { Props, Type } from './SearchField.types';
import { Shapes, IconPositions } from 'components/Components.types';
import {
  StyledWrapper,
  StyledIconWrapper,
  StyledIcon,
  StyledTextField,
} from './SearchField.styled';

export const SearchField: Type = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      shape = Shapes.SemiRounded,
      iconPosition = IconPositions.Left,
      ariaLabel,
      name,
      placeholder,
      onChange,
      type = 'search',
      disabled = false,
      required = false,
      customCss,
      testId = 'searchField',
    }: Props,
    ref
  ) => (
    <StyledWrapper data-testid={testId}>
      <StyledTextField
        css={customCss}
        ariaLabel={ariaLabel}
        className={cn(className, iconPosition)}
        name={name}
        placeholder={placeholder}
        shape={shape}
        onChange={onChange}
        type={type}
        disabled={disabled}
        required={required}
        ref={ref}
      />
      <StyledIconWrapper className={iconPosition}>
        <StyledIcon>
          <Search type={Icon.Types.Filled} />
        </StyledIcon>
      </StyledIconWrapper>
    </StyledWrapper>
  )
);

SearchField.IconPositions = IconPositions;
SearchField.Shapes = Shapes;
