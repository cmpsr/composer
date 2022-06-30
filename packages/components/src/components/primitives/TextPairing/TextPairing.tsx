import React, { createContext, FC, useContext } from 'react';
import { useStyleConfig } from '@chakra-ui/system';
import { useResponsiveValue } from '@hooks';
import { Flex, Text, TextProps, TextVariant } from '@components';

import { TextPairingStyles, TextPairingType } from '.';

export const TextPairingContext = createContext<{
  labelVariant: TextVariant;
  subLabelVariant: TextVariant;
}>({
  labelVariant: null,
  subLabelVariant: null,
});

export const TextPairing: TextPairingType = ({ variant, ...props }) => {
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
      <Flex flexDirection="column" {...styles.container} {...props} />
    </TextPairingContext.Provider>
  );
};

const TextPairingText: FC<TextProps & { variantProp: string }> = ({ variantProp, ...props }) => {
  const context = useContext(TextPairingContext);
  return <Text variant={context[variantProp]} {...props} />;
};

TextPairing.Label = (props) => <TextPairingText {...props} variantProp="labelVariant" />;
TextPairing.SubLabel = (props) => <TextPairingText {...props} variantProp="subLabelVariant" />;
