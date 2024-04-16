import { ButtonProps as ChakraButtonProps, ResponsiveValue, StyleProps } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

export const segmentedButtonVariants = ['primary', 'primary-alt', 'secondary', 'secondary-alt'] as const;
export type SegmentedButtonVariant = (typeof segmentedButtonVariants)[number];
export const segmentedButtonSizes = ['xs', 's', 'm', 'l'] as const;
export type SegmentedButtonSize = (typeof segmentedButtonSizes)[number];

export type Value = string | number;

export interface SegmentedButtonProps {
  onChange: (value: Value) => void;
  variant?: SegmentedButtonVariant;
  size?: ResponsiveValue<SegmentedButtonSize>;
  defaultValue?: Value;
  isDisabled?: boolean;
}

export interface SegmentedButtonStaticMembers {
  Button: FC<SegmentedButtonButtonProps>;
  Icon: FC<SegmentedIconButtonProps>;
}

export interface SegmentedButtonButtonProps extends ChakraButtonProps {
  isActive?: boolean;
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
  size?: ResponsiveValue<SegmentedButtonSize>;
  value: Value;
}

export interface SegmentedIconButtonProps extends ChakraButtonProps {
  isActive?: boolean;
  icon?: ReactElement;
  size?: ResponsiveValue<SegmentedButtonSize>;
}

export type SegmentedButtonStyles = {
  container: StyleProps;
  button: StyleProps;
  icon: StyleProps;
};
