import {
  TabsProps as ChakraTabsProps,
  TabListProps,
  TabPanelsProps,
  TabProps,
  TabPanelProps,
} from '@chakra-ui/react';
import { FC } from 'react';

export const tabsVariants = ['line', 'rounded'] as const;
export type TabsVariant = typeof tabsVariants[number];

export interface TabsProps extends ChakraTabsProps {
  variant?: TabsVariant;
}

export interface TabsStaticMembers {
  Item: FC<TabProps>;
  List: FC<TabListProps>;
  Panels: FC<TabPanelsProps>;
  Panel: FC<TabPanelProps>;
}
