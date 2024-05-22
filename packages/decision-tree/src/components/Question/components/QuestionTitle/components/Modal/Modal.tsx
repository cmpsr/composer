import React, { FC } from 'react';
import { type QuestionTitleModalProps } from './types';
import { Text, Flex, Button, Modal, IconX } from '@cmpsr/components';

export const QuestionTitleModal: FC<QuestionTitleModalProps> = ({ modalIsOpen, onClose, content }) => {
  return (
    <Modal isOpen={modalIsOpen} onClose={onClose}>
      <Modal.Content borderBottomRadius="0" borderTopRadius="radii-6" alignSelf="end" mb="93px">
        <Modal.Header>
          <Flex justifyContent="center">
            <Text variant="text-body-large-medium">Why we ask?</Text>
          </Flex>
        </Modal.Header>
        <Modal.Body>
          <Text variant="text-body-regular" color="text-secondary">
            {content}
          </Text>
        </Modal.Body>
        <Modal.Footer justifyContent="center">
          <Button
            variant="ghost"
            onClick={onClose}
            borderColor="primary-default"
            borderRadius="50%"
            borderStyle="solid"
            borderWidth="1px"
            p="spacer-2"
          >
            <IconX />
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
