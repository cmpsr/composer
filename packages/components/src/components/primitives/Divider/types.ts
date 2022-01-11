import { DividerProps as ChakraDividerProps } from '@chakra-ui/react';

export const DividerOrientations = ['horizontal', 'vertical'] as const;
export type DividerOrientation = typeof DividerOrientations[number];

export interface DividerProps extends ChakraDividerProps {
  orientation?: DividerOrientation;
}
