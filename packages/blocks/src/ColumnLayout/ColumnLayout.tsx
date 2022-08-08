import React from 'react';
import { Flex, Link, TextPairing } from '@cmpsr/components';
import { ColumnLayoutType } from './types';
import { MediaBlock } from '../';

export const ColumnLayout: ColumnLayoutType = (props) => <Flex flexDirection="column" {...props} />;

ColumnLayout.ColumnGroup = Flex;
ColumnLayout.Column = MediaBlock;
ColumnLayout.TextPairing = TextPairing;
ColumnLayout.Link = Link;
ColumnLayout.LinkGroup = Flex;
