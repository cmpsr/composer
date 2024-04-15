import { ButtonProps as ChakraButtonProps, ResponsiveValue, StyleProps } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

export const segmentedButtonVariants = ['primary', 'primary-alt', 'secondary', 'secondary-alt'] as const;
export type SegmentedButtonVariant = (typeof segmentedButtonVariants)[number];
export const segmentedButtonSizes = ['xs', 's', 'm', 'l'] as const;
export type SegmentedButtonSize = (typeof segmentedButtonSizes)[number];

export type OptionValue = string | number;

export type Option = {
  value: OptionValue;
  segment: ReactElement;
};

export interface SegmentedButtonProps {
  options: Option[];
  onChange: (value: OptionValue) => void;
  variant?: SegmentedButtonVariant;
  size?: ResponsiveValue<SegmentedButtonSize>;
  defaultOption?: OptionValue;
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
