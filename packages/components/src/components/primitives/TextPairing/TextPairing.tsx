import React, { FC } from 'react';
import { Stack } from '@chakra-ui/layout';
import { Text } from '../Text';
import { TextPairingProps, TextPairingStyles } from '.';
import { useStyleConfig } from '@chakra-ui/system';
import { useResponsiveValue } from '@hooks';

export const TextPairing: FC<TextPairingProps> = ({ variant, label, subLabel, labelColor, subLabelColor }) => {
  const responsiveVariant = useResponsiveValue(variant);
  const styles = useStyleConfig('TextPairing', {
    variant: responsiveVariant,
  }) as TextPairingStyles;
  return (
    <Stack spacing={styles.columnGap}>
      <Text variant={styles.label.variant} color={labelColor}>
        {label}
      </Text>
      <Text variant={styles.subLabel.variant} color={subLabelColor}>
        {subLabel}
      </Text>
    </Stack>
  );
};
