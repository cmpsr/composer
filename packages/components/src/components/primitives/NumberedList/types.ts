import { FC } from 'react';
import { FlexProps, TextVariant } from '@components';

export interface NumberedListProps extends FlexProps {
  number?: number;
}

export interface NumberedListItemProps extends NumberedListProps {
  indexTextVariants?: TextVariant;
}

export interface NumberedListStaticMembers {
  Item: FC<NumberedListItemProps>;
}
