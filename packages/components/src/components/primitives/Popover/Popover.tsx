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
  chakra,
  useStyles,
} from '@chakra-ui/react';
import { PopoverProps, PopoverHeaderProps, PopoverFooterProps } from './types';
import { Button } from 'components/primitives/Button';
import { Text, TextProps } from 'components';

export const Popover: FC<PopoverProps> = ({
  children,
  headerProps: { showCloseButton, ...ownHeaderProps } = {},
  footerProps,
  showFooter,
  content,
  positioning,
  ...props
}) => {
  return (
    <ChakraPopover placement={positioning} {...props}>
      <ChakraPopoverTrigger>
        <chakra.span h="full" display="inline-block">
          {children}
        </chakra.span>
      </ChakraPopoverTrigger>
      <ChakraPopoverContent data-testid="cmpsr.popover.content">
        <ChakraPopoverArrow />
        {showCloseButton && <ChakraPopoverCloseButton data-testid="cmpsr.popover.close.button" />}
        <PopoverHeader {...ownHeaderProps} />
        <ChakraPopoverBody>{content}</ChakraPopoverBody>
        {showFooter && <PopoverFooter data-testid="cmpsr.popover.footer" {...footerProps} />}
      </ChakraPopoverContent>
    </ChakraPopover>
  );
};

const PopoverHeader: FC<PopoverHeaderProps> = ({ label, subtitle, ...props }) => {
  const {
    header: { subtitle: subtitleStyles },
  } = useStyles() as { header: { subtitle: TextProps } };

  return (
    <ChakraPopoverHeader data-testid="cmpsr.popover.label" {...props}>
      {label}
      <Text {...subtitleStyles}>{subtitle}</Text>
    </ChakraPopoverHeader>
  );
};

const PopoverFooter: FC<PopoverFooterProps> = ({ primaryAction, secondaryAction, ...props }) => {
  return (
    <ChakraPopoverFooter {...props}>
      {primaryAction && (
        <Button data-testid="cmpsr.popover.primary.action" flex="1" variant="primary" onClick={primaryAction.onClick}>
          {primaryAction.label}
        </Button>
      )}
      {secondaryAction && (
        <Button
          flex="1"
          data-testid="cmpsr.popover.secondary.action"
          variant="primary-alt"
          onClick={secondaryAction.onClick}
        >
          {secondaryAction.label}
        </Button>
      )}
    </ChakraPopoverFooter>
  );
};
