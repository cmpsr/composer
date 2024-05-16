import React, { FC } from 'react';
import { Box, Text } from '@cmpsr/components';
import { SectionIntroProps } from './types';

export const SectionIntro: FC<SectionIntroProps> = ({ data, renderSectionIntroProps }) => {
  const { question, description, orderNumber } = data;

  if (renderSectionIntroProps) return renderSectionIntroProps(question, description, orderNumber);

  return (
    <Box height="100%" textAlign="center">
      <Text variant="text-body-regular" mb="spacer-6">
        SECTION {String(orderNumber)}
      </Text>
      <Text variant="text-header-4XL" mb={{ base: '0', lg: 'spacer-3' }}>
        {question}
      </Text>
      <Text variant="text-body-meta-regular">{description}</Text>
    </Box>
  );
};
