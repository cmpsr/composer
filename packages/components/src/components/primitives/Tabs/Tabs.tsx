import React, { FC } from 'react';
import {
  Tabs as ChakraTabs,
  TabList as ChakraTabList,
  TabPanels as ChakraTabPanels,
  Tab as ChakraTab,
  TabPanel as ChakraTabPanel,
} from '@chakra-ui/react';

import {
  TabsProps,
  TabsStaticMembers,
  TabListProps,
  TabProps,
  TabPanelsProps,
  TabPanelProps,
} from './types';

export const Tabs: FC<TabsProps> & TabsStaticMembers = (props) => (
  <ChakraTabs {...props} />
);
const TabList: FC<TabListProps> = (props) => <ChakraTabList {...props} />;
const Tab: FC<TabProps> = (props) => <ChakraTab {...props} />;
const TabPanels: FC<TabPanelsProps> = (props) => <ChakraTabPanels {...props} />;
const TabPanel: FC<TabPanelProps> = (props) => <ChakraTabPanel {...props} />;

Tabs.List = TabList;
Tabs.Item = Tab;
Tabs.Panels = TabPanels;
Tabs.Panel = TabPanel;
