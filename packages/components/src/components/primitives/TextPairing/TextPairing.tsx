import React, { FC } from 'react';
import { Stack } from '@chakra-ui/layout';
import { Text } from '../Text';
import { TextPairingProps, TextPairingStyles } from '.';
import { useStyleConfig } from '@chakra-ui/system';
import { useBreakpointValue } from '@chakra-ui/react';

export const TextPairing: FC<TextPairingProps> = ({
  variant,
  label,
  subLabel,
}) => {
  const responsiveVariant = variant
    ? typeof variant === 'string'
      ? variant
      : useBreakpointValue(variant)
    : undefined;
  const styles = useStyleConfig('TextPairing', {
    variant: responsiveVariant,
  }) as TextPairingStyles;
  return (
    <Stack spacing={styles.columnGap}>
      <Text variant={styles.label.variant}>{label}</Text>
      <Text variant={styles.subLabel.variant}>{subLabel}</Text>
    </Stack>
  );
};
