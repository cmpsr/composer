import React, { FC } from 'react';
import {
  Menu,
  MenuProps,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
} from '@chakra-ui/react';
import { DropdownStaticMembers } from './types';

export const Dropdown: FC<MenuProps> & DropdownStaticMembers = (props) => {
  return <Dropdown.Menu {...props} />;
};

Dropdown.Menu = Menu;
Dropdown.Button = MenuButton;
Dropdown.List = MenuList;
Dropdown.Item = MenuItem;
Dropdown.Group = MenuGroup;
