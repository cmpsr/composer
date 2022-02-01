import {
  ModalProps as ChakraModalProps,
  ModalOverlayProps,
  ModalContentProps,
  ModalHeaderProps as ChakraModalHeaderProps,
  ModalFooterProps as ChakraModalFooterProps,
  ModalBodyProps,
  CloseButtonProps,
} from '@chakra-ui/react';
import { FC } from 'react';
import { LinkProps } from 'components/primitives/Link/types';

export const ModalSizes = [
  '20rem',
  '24rem',
  '28rem',
  '32rem',
  '36rem',
  'full-width',
] as const;
export const FooterAlignments = [
  'stacked',
  'right-aligned',
  'full-width',
] as const;
export type ModalSize = typeof ModalSizes[number];
export type FooterAlignment = typeof FooterAlignments[number];

export interface ModalProps extends ChakraModalProps {
  size?: ModalSize;
}

type ButtonActions = {
  title: string;
  action?: () => void;
};

interface LinkActionProps extends LinkProps {
  label?: string;
}

export interface ModalFooterProps extends ChakraModalFooterProps {
  variant?: string;
  primaryAction?: ButtonActions;
  secondaryAction?: ButtonActions;
  linkAction?: LinkActionProps;
  alignment?: FooterAlignment;
}

export interface ModalHeaderProps extends ChakraModalHeaderProps {
  label?: string;
  subLabel?: string;
  avatarUrl?: string;
}

export interface ModalStaticMembers {
  Overlay: FC<ModalOverlayProps>;
  Content: FC<ModalContentProps>;
  Header: FC<ModalHeaderProps>;
  Footer: FC<ModalFooterProps>;
  Body: FC<ModalBodyProps>;
  CloseButton: FC<CloseButtonProps>;
}
