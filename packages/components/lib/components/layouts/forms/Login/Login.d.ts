import React from "react";
import { Asset as AssetType } from "types";
declare type Props = {
    className?: string;
    asset?: AssetType;
    title?: string;
    remember?: string;
    forgot?: {
        title?: string;
        url?: string;
        route?: {
            slug: string;
        };
    };
    signIn?: {
        icon?: React.ReactNode;
        title?: string;
    };
    onSubmit?: (credentials: {
        name: string;
        password?: string;
        remember?: boolean;
    }) => void;
};
export declare const Login: ({ className, asset, title, remember, forgot, signIn, onSubmit, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Login.d.ts.map