import {
  ListProps as ChakraUnorderedListProps,
  ListItemProps,
} from "@chakra-ui/react";
import { FC } from "react";

export type UnorderedListProps = ChakraUnorderedListProps

export interface UnorderedListStaticMembers {
  ListItem: FC<ListItemProps>;
}
