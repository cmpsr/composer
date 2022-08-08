import { FC } from 'react';
import { FlexProps, TextPairingType, Link, Flex } from '@cmpsr/components';
import { MediaBlock } from '../';

export interface ColumnLayoutStaticMembers {
  TextPairing: TextPairingType;
  Link: typeof Link;
  LinkGroup: typeof Flex;
  Column: typeof MediaBlock;
  ColumnGroup: typeof Flex;
}

export type ColumnLayoutType = FC<FlexProps> & ColumnLayoutStaticMembers;
