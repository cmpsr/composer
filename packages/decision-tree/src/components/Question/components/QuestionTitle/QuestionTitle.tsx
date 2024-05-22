import React, { FC } from 'react';
import { type QuestionTitleProps } from './types';
import { InfoButton } from './components/InfoButton';
import { Text, Flex, useDisclosure } from '@cmpsr/components';
import { QuestionTitleModal } from './components/Modal';

export const QuestionTitle: FC<QuestionTitleProps> = ({ question, whyWeAskExplanation, description }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex justifyContent="center" mb="spacer-8">
        <Text variant="text-header-L" mb="spacer-8" my="auto">
          {question}
        </Text>
        <InfoButton onClick={onOpen} />
      </Flex>
      {description ?? <Text mt="spacer-3">{description}</Text>}
      <QuestionTitleModal modalIsOpen={isOpen} onClose={onClose} content={whyWeAskExplanation} />
    </>
  );
};
