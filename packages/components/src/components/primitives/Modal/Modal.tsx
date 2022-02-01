import React, { FC } from 'react';

import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader as ChakraModalHeader,
  ModalFooter as ChakraModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Flex, Grid, Box } from '../../layouts';
import { Button, Link, TextPairing, Avatar } from '..';
import { ModalProps, ModalFooterProps, ModalStaticMembers, ModalHeaderProps } from './types';

export const Modal: FC<ModalProps> & ModalStaticMembers = (props) => {
  return <ChakraModal {...props} />;
};

export const ModalHeader: FC<ModalHeaderProps> = ({ avatarUrl, label, subLabel, ...props }) => {
  return (
    <ChakraModalHeader {...props}>
      <Flex flex="1" textAlign="left" alignItems="center">
        <Avatar name="Composer Logo" src={avatarUrl} size="s" mr={2} />
        <TextPairing label={label} subLabel={subLabel} variant="textpairing-header-M" />
      </Flex>
    </ChakraModalHeader>
  );
};

export const ModalFooter: FC<ModalFooterProps> = ({
  primaryAction,
  secondaryAction,
  linkAction,
  alignment = 'stacked',
  ...props
}) => {
  const isStacked = alignment === 'stacked';
  const isFullWidth = alignment === 'full-width';
  const isRightAligned = alignment === 'right-aligned';

  const renderFullWidthFooter = () => {
    return (
      <Grid w="full" justifyContent="space-between" templateColumns="repeat(2, 1fr)" gap={2}>
        <Box>
          <Button variant="primary-alt" w="full" onClick={secondaryAction.action}>
            {secondaryAction.title}
          </Button>
        </Box>
        <Box>
          <Button variant="primary" w="full" onClick={primaryAction.action}>
            {primaryAction.title}
          </Button>
        </Box>
      </Grid>
    );
  };

  const renderStackedFooter = () => {
    return (
      <Flex w="full" flexDir="column" alignItems="center">
        <Button variant="primary" w="full" onClick={primaryAction.action}>
          {primaryAction.title}
        </Button>
        <Button variant="primary-alt" mt="1rem" w="full" onClick={secondaryAction.action}>
          {secondaryAction.title}
        </Button>
        {linkAction && <Link textAlign="center" role="link" mt="1rem" {...linkAction} />}
      </Flex>
    );
  };

  const renderRightAlignedFooter = () => {
    return (
      <Flex w="full" justifyContent="flex-end">
        {linkAction && (
          <Flex alignItems="center">
            <Link textAlign="center" {...linkAction} />
          </Flex>
        )}
        <Flex justifyContent="flex-end">
          {secondaryAction && (
            <Button variant="primary-alt" mr={!isStacked && '1rem'} onClick={secondaryAction.action}>
              {secondaryAction.title}
            </Button>
          )}
          {primaryAction && (
            <Button variant="primary" onClick={primaryAction.action}>
              {primaryAction.title}
            </Button>
          )}
        </Flex>
      </Flex>
    );
  };

  return (
    <ChakraModalFooter {...props}>
      {isFullWidth && renderFullWidthFooter()}
      {isStacked && renderStackedFooter()}
      {isRightAligned && renderRightAlignedFooter()}
    </ChakraModalFooter>
  );
};

Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.Body = ModalBody;
Modal.CloseButton = ModalCloseButton;
