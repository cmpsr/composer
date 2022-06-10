import React, { FC } from 'react';
import { Stack } from '@chakra-ui/layout';
import { Text } from '../Text';
import { TextPairingProps, TextPairingStyles } from '.';
import { useStyleConfig } from '@chakra-ui/system';
import { useResponsiveValue } from '@hooks';

export const TextPairing: FC<TextPairingProps> = ({ variant, labelProps, subLabelProps, textAlign }) => {
  const responsiveVariant = useResponsiveValue(variant);
  const styles = useStyleConfig('TextPairing', {
    variant: responsiveVariant,
  }) as TextPairingStyles;
  return (
    <Stack spacing={styles.columnGap} textAlign={textAlign}>
      <Text {...labelProps} variant={styles.label.variant} />
      <Text {...subLabelProps} variant={styles.subLabel.variant} />
    </Stack>
  );
};
