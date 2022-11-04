import { FC } from 'react';
import { FlexProps, Link, Flex, Text, TextPairing } from '@cmpsr/components';
import { MediaBlock } from '../';

export interface ColumnLayoutStaticMembers {
  Title: typeof TextPairing;
  Action: typeof Link;
  Actions: typeof Flex;
  Column: typeof MediaBlock;
  ColumnsContainer: typeof Flex;
  Overline: typeof Text;
}

export type ColumnLayoutType = FC<FlexProps> & ColumnLayoutStaticMembers;
