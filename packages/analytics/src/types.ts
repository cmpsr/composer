export interface IIdentifyTraits {
  email?: string;
  name?: string;
  [trait: string]: string | number;
}

export type Identify = (userId: string, traits?: IIdentifyTraits) => void;

export interface IGroupTraits {
  [trait: string]: string | number;
}

export type Group = (groupId: string, traits?: IGroupTraits) => void;

export interface IPageTraits {
  category?: string; // page category
  path?: string; // Used to override page path
  [trait: string]: string | number;
}
export type Page = (pageName: string, traits?: IPageTraits) => void;

export interface ITrackTraits {
  category?: string; // action category
  [trait: string]: string | number;
}
export type Track = (eventName: string, traits?: ITrackTraits) => void;

export type Revenue = (
  price: number,
  quantity: number,
  type: string,
  productId?: string | number,
  currency?: string
) => void;

export interface IUser {
  anonymousId: string;
}
