import React, { FC } from 'react';
import { Box, Text } from '@cmpsr/components';
import { SectionIntroQuestion } from './types';
import { type QuestionProps } from '@components/Question/types';

export const SectionIntro: FC<QuestionProps> = ({ data }) => {
  const { question, description, orderNumber } = data as SectionIntroQuestion;

  return (
    <Box height="100%" textAlign="center">
      <Text variant="text-body-regular" mb="spacer-6">
        SECTION {orderNumber}
      </Text>
      <Text variant="text-header-4XL" mb={{ base: '0', lg: 'spacer-3' }}>
        {question}
      </Text>
      <Text variant="text-body-meta-regular">{description}</Text>
    </Box>
  );
};
