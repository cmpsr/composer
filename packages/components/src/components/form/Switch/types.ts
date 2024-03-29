import { SwitchProps as ChakraSwitchProps, ResponsiveValue } from '@chakra-ui/react';

export const switchSizes = ['s', 'm', 'l'] as const;
export const switchLabelPositions = ['left', 'right'] as const;

type SwitchSize = (typeof switchSizes)[number];
type SwitchLabelPosition = (typeof switchLabelPositions)[number];

export interface SwitchProps extends ChakraSwitchProps {
  size?: ResponsiveValue<SwitchSize>;
  labelPosition?: SwitchLabelPosition;
  label?: string;
}
