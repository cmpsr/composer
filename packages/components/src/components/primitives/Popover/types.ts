import {
  PopoverProps as ChakraPopoverProps,
  PopoverHeaderProps as ChakraPopoverHeaderProps,
  PopoverFooterProps as ChakraPopoverFooterProps,
} from '@chakra-ui/react';

export const popoverPositionings = ['bottom', 'top', 'left', 'right'] as const;

export type PopoverPositioning = typeof popoverPositionings[number];

export type PopoverAction = {
  label?: string;
  onClick?: () => void;
};

export interface PopoverProps extends Omit<ChakraPopoverProps, 'headerProps' | 'footerProps'> {
  positioning?: PopoverPositioning;
  showFooter?: boolean;
  headerProps?: PopoverHeaderProps;
  footerProps?: PopoverFooterProps;
  content?: React.ReactNode;
}

export interface PopoverHeaderProps extends ChakraPopoverHeaderProps {
  label?: string;
  subtitle?: string;
  showCloseButton?: boolean;
}

export interface PopoverFooterProps extends ChakraPopoverFooterProps {
  primaryAction?: PopoverAction;
  secondaryAction?: PopoverAction;
}
