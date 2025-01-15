import React, { useState, cloneElement } from 'react';
import {
  forwardRef,
  Input as ChakraInput,
  InputGroup as ChakraInputGroup,
  InputLeftElement as ChakraInputLeftElement,
  InputRightElement as ChakraInputRightElement,
  InputLeftAddon as ChakraInputLeftAddon,
  InputRightAddon as ChakraInputRightAddon,
  useMultiStyleConfig,
  InputElementProps,
  InputAddonProps,
  InputGroupProps,
} from '@chakra-ui/react';
import { InputProps } from './types';

export const Input = forwardRef<InputProps, typeof ChakraInput>(
  ({ leadingIcon: LeadingIcon, trailingIcon: TrailingIcon, leftLabel, rightLabel, ...props }, ref) => {
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
    const showTrailingIcon = TrailingIcon && !rightLabel;

    return (
      <ChakraInputGroup {...inputGroupStyles} data-testid="cmpsr.input-group">
        {showLeadingIcon && (
          <ChakraInputLeftElement
            {...elementContainer}
            pointerEvents="none"
            children={cloneElement(LeadingIcon, {
              'data-testid': 'cmpsr.input-icon',
              size: props.size === 'l' ? 'l' : 'm',
              ...element,
            })}
          />
        )}
        {leftLabel && <ChakraInputLeftAddon {...leftLabelStyle} children={leftLabel} />}
        <ChakraInput
          ref={ref}
          {...{ ...(showLeadingIcon && { ...fieldWithIconStyles }) }}
          data-testid="cmpsr.input"
          {...props}
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
        {showTrailingIcon && (
          <ChakraInputRightElement
            {...elementContainer}
            children={cloneElement(TrailingIcon, {
              size: props.size === 'l' ? 'l' : 'm',
              ...element,
            })}
          />
        )}
      </ChakraInputGroup>
    );
  },
);
