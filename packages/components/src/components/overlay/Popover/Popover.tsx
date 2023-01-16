import React, { MouseEvent } from 'react'
import {
  Popover as ChakraPopover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverAnchor,
  CloseButtonProps,
  CloseButton,
  usePopoverContext,
  forwardRef,
} from '@chakra-ui/react'
import { callAllHandlers } from '@chakra-ui/utils';
import { PopoverProps } from './types'

const PopoverCloseButton = forwardRef<CloseButtonProps, typeof CloseButton>((props, ref?: React.RefObject<HTMLButtonElement>) => {
  const { onClick, ...rest } = props;
  const { onClose } = usePopoverContext();
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [buttonPositionTop, setButtonPositionTop] = React.useState(0);
  const isButtonTopZero = buttonPositionTop === 0;
  const pxToRem = (px: number) => px / 16;
  React.useEffect(() => {
    let buttonRect: DOMRect;
    if (ref && ref.current) {
      buttonRect = ref.current.getBoundingClientRect();
    } else if (buttonRef.current) {
      buttonRect = buttonRef.current.getBoundingClientRect();
    }
    if (buttonRect) {
      const { height: buttonHeight } = buttonRect;
      const header = document.querySelector(".chakra-popover__header");
      if (header) {
        const { height: headerHeight } = header.getBoundingClientRect();
        setButtonPositionTop(pxToRem((headerHeight - buttonHeight) / 2));
      }
    }
  }, [ref])
  return (
    <CloseButton
      position="absolute"
      right="0.2rem"
      top={isButtonTopZero ? "0.2rem" : `${buttonPositionTop}rem`}
      size="s"
      ref={ref || buttonRef}
      onClick={callAllHandlers(onClick, (event: MouseEvent) => {
        event.stopPropagation();
        onClose();
      })}
      {...rest}
    />
  );
});

export const Popover = (props: PopoverProps) => <ChakraPopover {...props} />

Popover.Trigger = PopoverTrigger
Popover.Content = PopoverContent
Popover.Header = PopoverHeader
Popover.Body = PopoverBody
Popover.Footer = PopoverFooter
Popover.Arrow = PopoverArrow
Popover.CloseButton = PopoverCloseButton
Popover.Anchor = PopoverAnchor
