export interface IIdentifyTraits {
    email?: string;
    name?: string;
    [trait: string]: string | number;
}
export declare type Identify = (userId: string, traits?: IIdentifyTraits) => void;
export interface IGroupTraits {
    [trait: string]: string | number;
}
export declare type Group = (groupId: string, traits?: IGroupTraits) => void;
export interface IPageTraits {
    category?: string;
    path?: string;
    [trait: string]: string | number;
}
export declare type Page = (pageName: string, traits?: IPageTraits) => void;
export interface ITrackTraits {
    category?: string;
    [trait: string]: string | number;
}
export declare type Track = (eventName: string, traits?: ITrackTraits) => void;
export interface IUser {
    anonymousId: string;
}
//# sourceMappingURL=types.d.ts.map