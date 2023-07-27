import {
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/react';

export {
  MenuProps as DropdownProps,
  MenuButtonProps as DropdownButtonProps,
  MenuItemProps as DropdownItemProps,
  MenuListProps as DropdownListProps,
  MenuGroupProps as DropdownGroupProps,
  MenuOptionGroupProps as DropdownOptionGroupProps,
  MenuItemOptionProps as DropdownItemOptionProps,
  MenuDividerProps as DropdownDividerProps,
} from '@chakra-ui/react';

export interface DropdownStaticMembers {
  Group: typeof MenuGroup;
  Divider: typeof MenuDivider;
  OptionGroup: typeof MenuOptionGroup;
  ItemOption: typeof MenuItemOption;
  Button: typeof MenuButton;
  List: typeof MenuList;
  Item: typeof MenuItem;
}
