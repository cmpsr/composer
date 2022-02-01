import React, { FC } from 'react';
import {
  Popover as ChakraPopover,
  PopoverHeader as ChakraPopoverHeader,
  PopoverBody as ChakraPopoverBody,
  PopoverFooter as ChakraPopoverFooter,
  PopoverTrigger as ChakraPopoverTrigger,
  PopoverArrow as ChakraPopoverArrow,
  PopoverContent as ChakraPopoverContent,
  PopoverCloseButton as ChakraPopoverCloseButton,
} from '@chakra-ui/react';
import { PopoverProps, PopoverHeaderProps, PopoverFooterProps } from './types';
import { Button } from 'components/primitives/Button';
import { Text } from '..';

export const Popover: FC<PopoverProps> = ({ children, headerProps, footerProps, showFooter, content, positioning }) => {
  return (
    <ChakraPopover placement={positioning}>
      <ChakraPopoverTrigger>{children}</ChakraPopoverTrigger>
      <ChakraPopoverContent>
        <ChakraPopoverArrow />
        {headerProps.showCloseButton && <ChakraPopoverCloseButton />}
        <PopoverHeader {...headerProps} />
        <ChakraPopoverBody>{content}</ChakraPopoverBody>
        {showFooter && <PopoverFooter {...footerProps} />}
      </ChakraPopoverContent>
    </ChakraPopover>
  );
};

const PopoverHeader: FC<PopoverHeaderProps> = ({ label, subtitle, ...props }) => {
  return (
    <ChakraPopoverHeader {...props}>
      {label}
      <Text>{subtitle}</Text>
    </ChakraPopoverHeader>
  );
};

const PopoverFooter: FC<PopoverFooterProps> = ({ primaryAction, secondaryAction, ...props }) => {
  return (
    <ChakraPopoverFooter {...props}>
      {primaryAction && (
        <Button variant="primary" onClick={primaryAction.onClick}>
          {primaryAction.label}
        </Button>
      )}
      {secondaryAction && (
        <Button variant="secondary" onClick={secondaryAction.onClick}>
          {secondaryAction.label}
        </Button>
      )}
    </ChakraPopoverFooter>
  );
};
