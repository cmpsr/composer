export interface FooterByIdQuery_footer_sys {
    id: string;
}
export interface FooterByIdQuery_footer_logo_sys {
    id: string;
}
export interface FooterByIdQuery_footer_logo_asset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface FooterByIdQuery_footer_logo_route {
    slug: string | null;
}
export interface FooterByIdQuery_footer_logo {
    sys: FooterByIdQuery_footer_logo_sys;
    asset: FooterByIdQuery_footer_logo_asset | null;
    title: string | null;
    type: string | null;
    embeddedType: string | null;
    route: FooterByIdQuery_footer_logo_route | null;
    style: any | null;
    url: string | null;
}
export interface FooterByIdQuery_footer_contentCollection_items_Link_sys {
    id: string;
}
export interface FooterByIdQuery_footer_contentCollection_items_Link_asset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface FooterByIdQuery_footer_contentCollection_items_Link_route {
    slug: string | null;
}
export interface FooterByIdQuery_footer_contentCollection_items_Link {
    sys: FooterByIdQuery_footer_contentCollection_items_Link_sys;
    asset: FooterByIdQuery_footer_contentCollection_items_Link_asset | null;
    title: string | null;
    type: string | null;
    embeddedType: string | null;
    route: FooterByIdQuery_footer_contentCollection_items_Link_route | null;
    style: any | null;
    url: string | null;
}
export interface FooterByIdQuery_footer_contentCollection_items_Grid_sys {
    id: string;
}
export interface FooterByIdQuery_footer_contentCollection_items_Grid {
    sys: FooterByIdQuery_footer_contentCollection_items_Grid_sys;
    style: any | null;
    type: string | null;
}
export declare type FooterByIdQuery_footer_contentCollection_items = FooterByIdQuery_footer_contentCollection_items_Link | FooterByIdQuery_footer_contentCollection_items_Grid;
export interface FooterByIdQuery_footer_contentCollection {
    items: (FooterByIdQuery_footer_contentCollection_items | null)[];
}
export interface FooterByIdQuery_footer_secondaryContentCollection_items_Section {
}
export interface FooterByIdQuery_footer_secondaryContentCollection_items_Link_sys {
    id: string;
}
export interface FooterByIdQuery_footer_secondaryContentCollection_items_Link_asset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface FooterByIdQuery_footer_secondaryContentCollection_items_Link_route {
    slug: string | null;
}
export interface FooterByIdQuery_footer_secondaryContentCollection_items_Link {
    sys: FooterByIdQuery_footer_secondaryContentCollection_items_Link_sys;
    asset: FooterByIdQuery_footer_secondaryContentCollection_items_Link_asset | null;
    title: string | null;
    type: string | null;
    embeddedType: string | null;
    route: FooterByIdQuery_footer_secondaryContentCollection_items_Link_route | null;
    style: any | null;
    url: string | null;
}
export declare type FooterByIdQuery_footer_secondaryContentCollection_items = FooterByIdQuery_footer_secondaryContentCollection_items_Section | FooterByIdQuery_footer_secondaryContentCollection_items_Link;
export interface FooterByIdQuery_footer_secondaryContentCollection {
    items: (FooterByIdQuery_footer_secondaryContentCollection_items | null)[];
}
export interface FooterByIdQuery_footer {
    sys: FooterByIdQuery_footer_sys;
    copy: string | null;
    style: any | null;
    type: string | null;
    logo: FooterByIdQuery_footer_logo | null;
    contentCollection: FooterByIdQuery_footer_contentCollection | null;
    secondaryContentCollection: FooterByIdQuery_footer_secondaryContentCollection | null;
}
export interface FooterByIdQuery {
    footer: FooterByIdQuery_footer | null;
}
export interface FooterByIdQueryVariables {
    id: string;
}
//# sourceMappingURL=FooterByIdQuery.d.ts.map