import React, { FC, useState } from 'react';
import { type QuestionTitleProps } from './types';
import { InfoButton } from './components/InfoButton';
import { Text, Flex } from '@cmpsr/components';
import { QuestionTitleModal } from './components/Modal';

export const QuestionTitle: FC<QuestionTitleProps> = ({ question, whyWeAskExplanation, description }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Flex justifyContent="center" mb="spacer-8">
        <Text variant="text-header-L" mb="spacer-8" my="auto">
          {question}
        </Text>
        <InfoButton onClick={() => setModalIsOpen(true)} />
      </Flex>
      {description ?? <Text mt="spacer-3">{description}</Text>}
      <QuestionTitleModal
        modalIsOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        content={whyWeAskExplanation}
      />
    </>
  );
};
