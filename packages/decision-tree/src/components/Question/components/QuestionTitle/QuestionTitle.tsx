import React, { FC, useState } from 'react';
import { type QuestionTitleProps } from './types';
import { InfoButton } from './components/InfoButton';
import { Text, Flex, Tooltip } from '@cmpsr/components';
import { QuestionTitleModal } from './components/Modal';

export const QuestionTitle: FC<QuestionTitleProps> = ({ question, whyWeAskExplanation, tooltip, description }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Flex justifyContent="center" mb="spacer-8">
        <Text variant="text-header-L" mb="spacer-8" my="auto">
          {question}
        </Text>
        {tooltip ? (
          <Tooltip label={tooltip} placement="bottom">
            <InfoButton onClick={() => setModalIsOpen(true)} />
          </Tooltip>
        ) : (
          <InfoButton onClick={() => setModalIsOpen(true)} />
        )}
      </Flex>
      <QuestionTitleModal
        modalIsOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        content={whyWeAskExplanation}
      />
    </>
  );
};
