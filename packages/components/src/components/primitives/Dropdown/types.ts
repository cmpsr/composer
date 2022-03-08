import { FC } from "react";
import { MenuButtonProps, MenuItemProps, MenuListProps } from "@chakra-ui/react";

export interface DropdownStaticMembers {
    Button: FC<MenuButtonProps>;
    List: FC<MenuListProps>;
    Item: FC<MenuItemProps>;
}
