import React, { createContext, FC, useContext } from 'react';
import { useStyleConfig } from '@chakra-ui/system';
import { useResponsiveValue } from '@hooks';
import { Flex, Text, TextVariant, TextProps } from '@components';

import { TextPairingProps, TextPairingStyles, TextPairingStaticMembers } from '.';

export const TextPairingContext = createContext<{
  labelVariant: TextVariant;
  subLabelVariant: TextVariant;
}>({
  labelVariant: null,
  subLabelVariant: null,
});

export const TextPairing: FC<TextPairingProps> & TextPairingStaticMembers = ({ variant, ...props }) => {
  const responsiveVariant = useResponsiveValue(variant);
  const styles = useStyleConfig('TextPairing', {
    variant: responsiveVariant,
  }) as TextPairingStyles;

  return (
    <TextPairingContext.Provider
      value={{
        labelVariant: styles.label.variant,
        subLabelVariant: styles.subLabel.variant,
      }}
    >
      <Flex flexDirection="column" gap={styles.columnGap} {...props} />
    </TextPairingContext.Provider>
  );
};

const TextPairingLabel: FC<TextProps> = (props) => {
  const { labelVariant } = useContext(TextPairingContext);
  return <Text variant={labelVariant} {...props} />;
};

const TextPairingSubLabel: FC<TextProps> = (props) => {
  const { subLabelVariant } = useContext(TextPairingContext);
  return <Text variant={subLabelVariant} {...props} />;
};

TextPairing.Label = TextPairingLabel;
TextPairing.SubLabel = TextPairingSubLabel;
