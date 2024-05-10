import React, { FC } from 'react';
import { Box, BoxProps, Text, TextProps } from '@cmpsr/components';
import { SectionIntroQuestion } from './types';
import { type QuestionProps } from '@components/Question/types';

export const SectionIntro: FC<QuestionProps & { textProps: TextProps; boxProps: BoxProps }> = ({
  data,
  textProps,
  boxProps,
}) => {
  const { question, description, orderNumber } = data as SectionIntroQuestion;

  return (
    <Box height="100%" textAlign="center" {...boxProps}>
      <Text variant="text-body-regular" mb="spacer-6">
        SECTION {orderNumber}
      </Text>
      <Text variant="text-header-4XL" mb={{ base: '0', lg: 'spacer-3' }} {...textProps}>
        {question}
      </Text>
      <Text variant="text-body-meta-regular">{description}</Text>
    </Box>
  );
};
