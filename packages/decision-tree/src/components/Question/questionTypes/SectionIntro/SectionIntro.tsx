import React, { FC } from 'react';
import { Box, Text } from '@cmpsr/components';
import { SectionIntroProps } from './types';

export const SectionIntro: FC<SectionIntroProps> = ({ data, textProps, boxProps }) => {
  const { question, description, orderNumber } = data;

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
