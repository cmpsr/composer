import React, { FC } from 'react';
import {
  Tabs as ChakraTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

import { TabsProps, TabsStaticMembers } from './types';

export const Tabs: FC<TabsProps> & TabsStaticMembers = (props) => (
  <ChakraTabs {...props} />
);

Tabs.List = TabList;
Tabs.Item = Tab;
Tabs.Panels = TabPanels;
Tabs.Panel = TabPanel;
