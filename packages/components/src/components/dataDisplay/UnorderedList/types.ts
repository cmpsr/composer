import { ListProps as ChakraUnorderedListProps, ListItemProps } from '@chakra-ui/react';
import { FC } from 'react';

export type UnorderedListProps = ChakraUnorderedListProps;

export interface UnorderedListStaticMembers {
  Item: FC<ListItemProps>;
}

export { ListItemProps };
