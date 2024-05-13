import React, { FC } from 'react';
import { Box, Text } from '@cmpsr/components';
import { SectionIntroProps } from './types';

export const SectionIntro: FC<SectionIntroProps> = ({ data, renderSectionIntro }) => {
  const { label, description, orderNumber } = data;

  if (renderSectionIntro) return renderSectionIntro(label, description, orderNumber);

  return (
    <Box
      height="100%"
      textAlign="center"
      flexGrow="1"
      pt={{ base: 'spacer-8', lg: 'spacer-16' }}
      px={{ base: 'spacer-5', md: 'spacer-20', lg: 'spacer-16', xl: 'spacer-24', xxl: 'spacer-32' }}
    >
      <Text variant="text-body-regular" mb="spacer-6">
        SECTION {orderNumber}
      </Text>
      <Text variant="text-header-4XL" mb={{ base: '0', lg: 'spacer-3' }}>
        {label}
      </Text>
      <Text variant="text-body-meta-regular">{description}</Text>
    </Box>
  );
};
