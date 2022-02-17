import React, { useState, FC, cloneElement } from 'react';
import {
  Input as ChakraInput,
  InputGroup as ChakraInputGroup,
  InputLeftElement as ChakraInputLeftElement,
  InputLeftAddon as ChakraInputLeftAddon,
  InputRightAddon as ChakraInputRightAddon,
  useMultiStyleConfig,
  InputElementProps,
  InputAddonProps,
  InputGroupProps,
} from '@chakra-ui/react';
import { InputProps } from './types';

export const Input: FC<InputProps> = ({ leadingIcon: LeadingIcon, leftLabel, rightLabel, ...props }) => {
  const [isFocused, setFocused] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const [hasContent, setHasContent] = useState(false);

  const {
    element,
    elementContainer,
    inputGroup: inputGroupStyles,
    field: { withIcon: fieldWithIconStyles },
    leftLabel: leftLabelStyle,
    rightLabel: rightLabelStyle,
  } = useMultiStyleConfig('Input', {
    variant: props.variant,
    size: props.size,
    isFocused,
    isHovered,
    isInvalid: props.isInvalid,
    isDisabled: props.isDisabled,
    hasContent,
  }) as {
    element: InputElementProps;
    elementContainer: InputElementProps;
    inputGroup: { _focus: InputGroupProps };
    field: { withIcon: { paddingLeft: string } };
    leftLabel: InputAddonProps;
    rightLabel: InputAddonProps;
  };
  const showLeadingIcon = LeadingIcon && !leftLabel;

  return (
    <ChakraInputGroup {...inputGroupStyles} data-testid="cmpsr.input-group">
      {showLeadingIcon && (
        <ChakraInputLeftElement
          {...elementContainer}
          pointerEvents="none"
          children={cloneElement(LeadingIcon, {
            'data-testid': 'cmpsr.input-icon',
            ...element,
          })}
        />
      )}
      {leftLabel && <ChakraInputLeftAddon {...leftLabelStyle} children={leftLabel} />}
      <ChakraInput
        {...{ ...(showLeadingIcon && { ...fieldWithIconStyles }) }}
        {...props}
        data-testid="cmpsr.input"
        onFocus={(evt) => {
          props?.onFocus?.(evt);
          setFocused(true);
        }}
        onBlur={(evt) => {
          props?.onBlur?.(evt);
          setFocused(false);
        }}
        onMouseEnter={(evt) => {
          props?.onMouseEnter?.(evt);
          setHovered(true);
        }}
        onMouseLeave={(evt) => {
          props?.onMouseLeave?.(evt);
          setHovered(false);
        }}
        onChange={(evt) => {
          setHasContent?.(evt.target.value.length > 0);
          props?.onChange?.(evt);
        }}
      />
      {rightLabel && <ChakraInputRightAddon {...rightLabelStyle} children={rightLabel} />}
    </ChakraInputGroup>
  );
};
