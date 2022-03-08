import React, { FC } from 'react';
import {
  Menu,
  MenuButtonProps,
  MenuProps,
  MenuButton,
  MenuListProps,
  MenuList,
  MenuItem,
  MenuItemProps,
  forwardRef,
} from '@chakra-ui/react';
import { DropdownStaticMembers } from './types';

export const Dropdown: FC<MenuProps> & DropdownStaticMembers = (props) => {
  return <Menu {...props} />;
};

const Button = forwardRef<MenuButtonProps, typeof MenuButton>((props, ref) => (
  <MenuButton ref={ref} data-testid="cmpsr.dropdown.button" {...props} />
));
const List = forwardRef<MenuListProps, typeof MenuList>((props, ref) => (
  <MenuList ref={ref} data-testid="cmpsr.dropdown.list" {...props} />
));
const Item = forwardRef<MenuItemProps, typeof MenuItem>((props, ref) => (
  <MenuItem ref={ref} data-testid="cmpsr.dropdown.item" {...props} />
));

Dropdown.Button = Button;
Dropdown.List = List;
Dropdown.Item = Item;
