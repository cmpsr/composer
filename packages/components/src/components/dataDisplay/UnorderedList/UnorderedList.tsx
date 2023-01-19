import React, { FC } from 'react';
import {
  ListItem,
  UnorderedList as ChakraUnorderedList,
} from "@chakra-ui/react";
import { UnorderedListProps, UnorderedListStaticMembers } from './types';

export const UnorderedList: FC<UnorderedListProps> & UnorderedListStaticMembers = (props) => <ChakraUnorderedList listStylePosition="inside" {...props} />;

UnorderedList.ListItem = ListItem;
