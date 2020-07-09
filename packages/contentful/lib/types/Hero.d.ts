export interface Hero_sys {
    id: string;
}
export interface Hero_desktopAsset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface Hero_mobileAsset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface Hero_contentCollection_items_sys {
    id: string;
}
export interface Hero_contentCollection_items_asset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface Hero_contentCollection_items_route {
    slug: string | null;
}
export interface Hero_contentCollection_items {
    sys: Hero_contentCollection_items_sys;
    asset: Hero_contentCollection_items_asset | null;
    title: string | null;
    type: string | null;
    embeddedType: string | null;
    route: Hero_contentCollection_items_route | null;
    style: any | null;
    url: string | null;
}
export interface Hero_contentCollection {
    items: (Hero_contentCollection_items | null)[];
}
export interface Hero {
    sys: Hero_sys;
    title: string | null;
    type: string | null;
    eyebrow: string | null;
    subtitle: string | null;
    desktopAsset: Hero_desktopAsset | null;
    mobileAsset: Hero_mobileAsset | null;
    style: any | null;
    contentCollection: Hero_contentCollection | null;
}
//# sourceMappingURL=Hero.d.ts.map