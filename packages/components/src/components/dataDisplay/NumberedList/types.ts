import { FC } from 'react';
import { TextVariant } from '@components';
import { FlexProps } from '../../layouts/Flex';

export interface NumberedListProps extends FlexProps {
  number?: number;
}

export interface NumberedListItemProps extends NumberedListProps {
  indexTextVariants?: TextVariant;
}

export interface NumberedListStaticMembers {
  Item: FC<NumberedListItemProps>;
}
