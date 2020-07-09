export interface HeaderByIdQuery_header_sys {
    id: string;
}
export interface HeaderByIdQuery_header_logo_sys {
    id: string;
}
export interface HeaderByIdQuery_header_logo_asset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface HeaderByIdQuery_header_logo_route {
    slug: string | null;
}
export interface HeaderByIdQuery_header_logo {
    sys: HeaderByIdQuery_header_logo_sys;
    asset: HeaderByIdQuery_header_logo_asset | null;
    title: string | null;
    type: string | null;
    embeddedType: string | null;
    route: HeaderByIdQuery_header_logo_route | null;
    style: any | null;
    url: string | null;
}
export interface HeaderByIdQuery_header_contentCollection_items_Link_sys {
    id: string;
}
export interface HeaderByIdQuery_header_contentCollection_items_Link_asset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface HeaderByIdQuery_header_contentCollection_items_Link_route {
    slug: string | null;
}
export interface HeaderByIdQuery_header_contentCollection_items_Link {
    sys: HeaderByIdQuery_header_contentCollection_items_Link_sys;
    asset: HeaderByIdQuery_header_contentCollection_items_Link_asset | null;
    title: string | null;
    type: string | null;
    embeddedType: string | null;
    route: HeaderByIdQuery_header_contentCollection_items_Link_route | null;
    style: any | null;
    url: string | null;
}
export interface HeaderByIdQuery_header_contentCollection_items_Grid_sys {
    id: string;
}
export interface HeaderByIdQuery_header_contentCollection_items_Grid {
    sys: HeaderByIdQuery_header_contentCollection_items_Grid_sys;
    style: any | null;
    type: string | null;
}
export declare type HeaderByIdQuery_header_contentCollection_items = HeaderByIdQuery_header_contentCollection_items_Link | HeaderByIdQuery_header_contentCollection_items_Grid;
export interface HeaderByIdQuery_header_contentCollection {
    items: (HeaderByIdQuery_header_contentCollection_items | null)[];
}
export interface HeaderByIdQuery_header_secondaryContentCollection_items_Section {
}
export interface HeaderByIdQuery_header_secondaryContentCollection_items_Link_sys {
    id: string;
}
export interface HeaderByIdQuery_header_secondaryContentCollection_items_Link_asset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface HeaderByIdQuery_header_secondaryContentCollection_items_Link_route {
    slug: string | null;
}
export interface HeaderByIdQuery_header_secondaryContentCollection_items_Link {
    sys: HeaderByIdQuery_header_secondaryContentCollection_items_Link_sys;
    asset: HeaderByIdQuery_header_secondaryContentCollection_items_Link_asset | null;
    title: string | null;
    type: string | null;
    embeddedType: string | null;
    route: HeaderByIdQuery_header_secondaryContentCollection_items_Link_route | null;
    style: any | null;
    url: string | null;
}
export declare type HeaderByIdQuery_header_secondaryContentCollection_items = HeaderByIdQuery_header_secondaryContentCollection_items_Section | HeaderByIdQuery_header_secondaryContentCollection_items_Link;
export interface HeaderByIdQuery_header_secondaryContentCollection {
    items: (HeaderByIdQuery_header_secondaryContentCollection_items | null)[];
}
export interface HeaderByIdQuery_header {
    sys: HeaderByIdQuery_header_sys;
    style: any | null;
    type: string | null;
    logo: HeaderByIdQuery_header_logo | null;
    contentCollection: HeaderByIdQuery_header_contentCollection | null;
    secondaryContentCollection: HeaderByIdQuery_header_secondaryContentCollection | null;
}
export interface HeaderByIdQuery {
    header: HeaderByIdQuery_header | null;
}
export interface HeaderByIdQueryVariables {
    id: string;
}
//# sourceMappingURL=HeaderByIdQuery.d.ts.map