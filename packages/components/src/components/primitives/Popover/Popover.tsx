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
  useMultiStyleConfig,
  CSSObject,
} from '@chakra-ui/react';
import { PopoverProps, PopoverHeaderProps, PopoverFooterProps } from './types';
import { TextPairing, Button } from 'components';

export const Popover: FC<PopoverProps> = ({
  children,
  headerProps: { showCloseButton, ...ownHeaderProps } = {},
  footerProps,
  body,
  positioning,
  ...props
}) => {
  const {
    body: { withFooter },
  } = useMultiStyleConfig('Popover', {}) as { body: { withFooter: CSSObject } };

  let conditionalBodyStyle = {};

  if (footerProps) {
    conditionalBodyStyle = withFooter;
  }

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
        <ChakraPopoverBody {...conditionalBodyStyle}>{body}</ChakraPopoverBody>
        {footerProps && <PopoverFooter data-testid="cmpsr.popover.footer" {...footerProps} />}
      </ChakraPopoverContent>
    </ChakraPopover>
  );
};

const PopoverHeader: FC<PopoverHeaderProps> = ({ label, subtitle, ...props }) => {
  return (
    <ChakraPopoverHeader data-testid="cmpsr.popover.label" {...props}>
      <TextPairing label={label} subLabel={subtitle} variant="textpairing-popover-title" />
    </ChakraPopoverHeader>
  );
};

const PopoverFooter: FC<PopoverFooterProps> = ({ primaryAction, secondaryAction, ...props }) => {
  return (
    <ChakraPopoverFooter {...props}>
      {primaryAction && (
        <Button
          data-testid="cmpsr.popover.primary.action"
          flex="1"
          variant={primaryAction.variant || 'primary'}
          onClick={primaryAction.onClick}
        >
          {primaryAction.label}
        </Button>
      )}
      {secondaryAction && (
        <Button
          flex="1"
          data-testid="cmpsr.popover.secondary.action"
          variant={secondaryAction.variant || 'primary-alt'}
          onClick={secondaryAction.onClick}
        >
          {secondaryAction.label}
        </Button>
      )}
    </ChakraPopoverFooter>
  );
};
