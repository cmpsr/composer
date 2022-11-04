import React, { FC } from 'react';
import { Flex, Link, Text, TextPairing, TextProps } from '@cmpsr/components';
import { ColumnLayoutType } from './types';
import { MediaBlock } from '../';

export const ColumnLayout: ColumnLayoutType = (props) => <Flex flexDirection="column" {...props} />;

const ColumnLayoutOverline: FC<TextProps> = (props) => (
  <Text color="text-secondary" variant="text-body-display-S" textTransform="uppercase" {...props} />
);

ColumnLayout.ColumnsContainer = Flex;
ColumnLayout.Column = MediaBlock;
ColumnLayout.Title = TextPairing;
ColumnLayout.Action = Link;
ColumnLayout.Actions = Flex;
ColumnLayout.Overline = ColumnLayoutOverline;
