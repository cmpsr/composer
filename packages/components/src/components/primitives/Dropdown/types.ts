import { FC } from "react";
import { MenuButtonProps, MenuGroupProps, MenuItemProps, MenuListProps, MenuProps } from "@chakra-ui/react";

export {
    MenuProps as DropdownProps,
    MenuButtonProps as DropdownButtonProps,
    MenuItemProps as DropdownItemProps,
    MenuListProps as DropdownListProps,
    MenuGroupProps as DropdownGroupProps,
} from '@chakra-ui/react';
export interface DropdownStaticMembers {
    Menu: FC<MenuProps>;
    Group: FC<MenuGroupProps>;
    Button: FC<MenuButtonProps>;
    List: FC<MenuListProps>;
    Item: FC<MenuItemProps>;
}
