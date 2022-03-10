import { FC } from 'react';
import {
  MenuButtonProps,
  MenuDividerProps,
  MenuGroupProps,
  MenuItemOptionProps,
  MenuItemProps,
  MenuListProps,
  MenuOptionGroupProps,
} from '@chakra-ui/react';

export {
  MenuProps as DropdownProps,
  MenuButtonProps as DropdownButtonProps,
  MenuItemProps as DropdownItemProps,
  MenuListProps as DropdownListProps,
  MenuGroupProps as DropdownGroupProps,
} from '@chakra-ui/react';

export interface DropdownStaticMembers {
  Group: FC<MenuGroupProps>;
  Divider: FC<MenuDividerProps>;
  OptionGroup: FC<MenuOptionGroupProps>;
  ItemOption: FC<MenuItemOptionProps>;
  Button: FC<MenuButtonProps>;
  List: FC<MenuListProps>;
  Item: FC<MenuItemProps>;
}
