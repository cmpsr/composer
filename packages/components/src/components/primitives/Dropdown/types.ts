import { FC } from "react";
import { MenuButtonProps, MenuItemProps, MenuListProps, MenuProps } from "@chakra-ui/react";

export {
    MenuProps as DropdownProps,
    MenuButtonProps as DropdownButtonProps,
    MenuItemProps as DropdownItemProps,
    MenuListProps as DropdownListProps,
}
export interface DropdownStaticMembers {
    Menu: FC<MenuProps>;
    Button: FC<MenuButtonProps>;
    List: FC<MenuListProps>;
    Item: FC<MenuItemProps>;
}
