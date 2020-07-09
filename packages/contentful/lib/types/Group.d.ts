export interface Group_sys {
    id: string;
}
export interface Group_contentCollection_items_Section {
}
export interface Group_contentCollection_items_Link_sys {
    id: string;
}
export interface Group_contentCollection_items_Link_asset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface Group_contentCollection_items_Link_route {
    slug: string | null;
}
export interface Group_contentCollection_items_Link {
    sys: Group_contentCollection_items_Link_sys;
    asset: Group_contentCollection_items_Link_asset | null;
    title: string | null;
    type: string | null;
    embeddedType: string | null;
    route: Group_contentCollection_items_Link_route | null;
    style: any | null;
    url: string | null;
}
export declare type Group_contentCollection_items = Group_contentCollection_items_Section | Group_contentCollection_items_Link;
export interface Group_contentCollection {
    items: (Group_contentCollection_items | null)[];
}
export interface Group {
    sys: Group_sys;
    style: any | null;
    type: string | null;
    contentCollection: Group_contentCollection | null;
}
//# sourceMappingURL=Group.d.ts.map