import {
  TabsProps as ChakraTabsProps,
  TabListProps as ChakraTabListProps,
  TabPanelsProps as ChakraTabPanelsProps,
  TabProps as ChakraTabProps,
  TabPanelProps as ChakraTabPanelProps,
} from '@chakra-ui/react';
import { FC } from 'react';

export const tabsVariants = ['line', 'rounded'] as const;
export type TabsVariant = typeof tabsVariants[number];

export interface TabsProps extends ChakraTabsProps {
  variant?: TabsVariant;
}
export interface TabListProps extends ChakraTabListProps {}
export interface TabPanelsProps extends ChakraTabPanelsProps {}
export interface TabPanelProps extends ChakraTabPanelProps {}
export interface TabProps extends ChakraTabProps {}

export interface TabsStaticMembers {
  Item: FC<TabProps>;
  List: FC<TabListProps>;
  Panels: FC<TabPanelsProps>;
  Panel: FC<TabPanelProps>;
}
