import { ListProps as ChakraOrderedListProps, ListItemProps } from '@chakra-ui/react';
import { FC } from 'react';

export type OrderedListProps = ChakraOrderedListProps;

export interface OrderedListStaticMembers {
  Item: FC<ListItemProps>;
}
