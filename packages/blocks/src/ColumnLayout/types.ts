import { FC } from 'react';
import { FlexProps, Link, Flex, TextPairing } from '@cmpsr/components';
import { MediaBlock } from '../';

export interface ColumnLayoutStaticMembers {
  Title: typeof TextPairing;
  Action: typeof Link;
  Actions: typeof Flex;
  Column: typeof MediaBlock;
  ColumnContainer: typeof Flex;
}

export type ColumnLayoutType = FC<FlexProps> & ColumnLayoutStaticMembers;
