import React, { FC } from 'react';
import { type QuestionTitleModalProps } from './types';
import { Text, Flex, Button, Modal, TextPairing, IconX } from '@cmpsr/components';

export const QuestionTitleModal: FC<QuestionTitleModalProps> = ({ modalIsOpen, onClose, content }) => {
  return (
    <Modal isOpen={modalIsOpen} onClose={onClose}>
      <Modal.Content borderBottomRadius="0" borderTopRadius="radii-6" alignSelf="end" mb="93px">
        <Modal.Header>
          <Flex justifyContent="center">
            <TextPairing variant="textpairing-header-M">
              <TextPairing.Label children="Why we ask?" />
            </TextPairing>
          </Flex>
        </Modal.Header>
        <Modal.Body>
          <Text variant="text-body-large-medium">{content}</Text>
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
