import React, { FC } from 'react';
import {
  Menu,
  MenuProps,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
} from '@chakra-ui/react';
import { DropdownStaticMembers } from './types';

export const Dropdown: FC<MenuProps> & DropdownStaticMembers = (props) => {
  return <Menu {...props} />;
};

Dropdown.Button = MenuButton;
Dropdown.List = MenuList;
Dropdown.Item = MenuItem;
Dropdown.Group = MenuGroup;
Dropdown.Divider = MenuDivider;
Dropdown.OptionGroup = MenuOptionGroup;
Dropdown.ItemOption = MenuItemOption;
