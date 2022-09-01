import React from 'react';
import { Flex, Link, TextPairing } from '@cmpsr/components';
import { ColumnLayoutType } from './types';
import { MediaBlock } from '../';

export const ColumnLayout: ColumnLayoutType = (props) => <Flex flexDirection="column" {...props} />;

ColumnLayout.ColumnContainer = Flex;
ColumnLayout.Column = MediaBlock;
ColumnLayout.Title = TextPairing;
ColumnLayout.Action = Link;
ColumnLayout.Actions = Flex;
