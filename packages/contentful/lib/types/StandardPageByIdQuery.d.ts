export interface StandardPageByIdQuery_standardPage_header_sys {
    id: string;
}
export interface StandardPageByIdQuery_standardPage_header_logo_sys {
    id: string;
}
export interface StandardPageByIdQuery_standardPage_header_logo_asset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface StandardPageByIdQuery_standardPage_header_logo_route {
    slug: string | null;
}
export interface StandardPageByIdQuery_standardPage_header_logo {
    sys: StandardPageByIdQuery_standardPage_header_logo_sys;
    asset: StandardPageByIdQuery_standardPage_header_logo_asset | null;
    title: string | null;
    type: string | null;
    embeddedType: string | null;
    route: StandardPageByIdQuery_standardPage_header_logo_route | null;
    style: any | null;
    url: string | null;
}
export interface StandardPageByIdQuery_standardPage_header_contentCollection_items_Link_sys {
    id: string;
}
export interface StandardPageByIdQuery_standardPage_header_contentCollection_items_Link_asset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface StandardPageByIdQuery_standardPage_header_contentCollection_items_Link_route {
    slug: string | null;
}
export interface StandardPageByIdQuery_standardPage_header_contentCollection_items_Link {
    sys: StandardPageByIdQuery_standardPage_header_contentCollection_items_Link_sys;
    asset: StandardPageByIdQuery_standardPage_header_contentCollection_items_Link_asset | null;
    title: string | null;
    type: string | null;
    embeddedType: string | null;
    route: StandardPageByIdQuery_standardPage_header_contentCollection_items_Link_route | null;
    style: any | null;
    url: string | null;
}
export interface StandardPageByIdQuery_standardPage_header_contentCollection_items_Grid_sys {
    id: string;
}
export interface StandardPageByIdQuery_standardPage_header_contentCollection_items_Grid {
    sys: StandardPageByIdQuery_standardPage_header_contentCollection_items_Grid_sys;
    style: any | null;
    type: string | null;
}
export declare type StandardPageByIdQuery_standardPage_header_contentCollection_items = StandardPageByIdQuery_standardPage_header_contentCollection_items_Link | StandardPageByIdQuery_standardPage_header_contentCollection_items_Grid;
export interface StandardPageByIdQuery_standardPage_header_contentCollection {
    items: (StandardPageByIdQuery_standardPage_header_contentCollection_items | null)[];
}
export interface StandardPageByIdQuery_standardPage_header_secondaryContentCollection_items_Section {
}
export interface StandardPageByIdQuery_standardPage_header_secondaryContentCollection_items_Link_sys {
    id: string;
}
export interface StandardPageByIdQuery_standardPage_header_secondaryContentCollection_items_Link_asset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface StandardPageByIdQuery_standardPage_header_secondaryContentCollection_items_Link_route {
    slug: string | null;
}
export interface StandardPageByIdQuery_standardPage_header_secondaryContentCollection_items_Link {
    sys: StandardPageByIdQuery_standardPage_header_secondaryContentCollection_items_Link_sys;
    asset: StandardPageByIdQuery_standardPage_header_secondaryContentCollection_items_Link_asset | null;
    title: string | null;
    type: string | null;
    embeddedType: string | null;
    route: StandardPageByIdQuery_standardPage_header_secondaryContentCollection_items_Link_route | null;
    style: any | null;
    url: string | null;
}
export declare type StandardPageByIdQuery_standardPage_header_secondaryContentCollection_items = StandardPageByIdQuery_standardPage_header_secondaryContentCollection_items_Section | StandardPageByIdQuery_standardPage_header_secondaryContentCollection_items_Link;
export interface StandardPageByIdQuery_standardPage_header_secondaryContentCollection {
    items: (StandardPageByIdQuery_standardPage_header_secondaryContentCollection_items | null)[];
}
export interface StandardPageByIdQuery_standardPage_header {
    sys: StandardPageByIdQuery_standardPage_header_sys;
    style: any | null;
    type: string | null;
    logo: StandardPageByIdQuery_standardPage_header_logo | null;
    contentCollection: StandardPageByIdQuery_standardPage_header_contentCollection | null;
    secondaryContentCollection: StandardPageByIdQuery_standardPage_header_secondaryContentCollection | null;
}
export interface StandardPageByIdQuery_standardPage_contentCollection_items_Experiment_sys {
    id: string;
}
export interface StandardPageByIdQuery_standardPage_contentCollection_items_Experiment {
    sys: StandardPageByIdQuery_standardPage_contentCollection_items_Experiment_sys;
    variants: any | null;
}
export interface StandardPageByIdQuery_standardPage_contentCollection_items_Hero_sys {
    id: string;
}
export interface StandardPageByIdQuery_standardPage_contentCollection_items_Hero_desktopAsset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface StandardPageByIdQuery_standardPage_contentCollection_items_Hero_mobileAsset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface StandardPageByIdQuery_standardPage_contentCollection_items_Hero_contentCollection_items_sys {
    id: string;
}
export interface StandardPageByIdQuery_standardPage_contentCollection_items_Hero_contentCollection_items_asset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface StandardPageByIdQuery_standardPage_contentCollection_items_Hero_contentCollection_items_route {
    slug: string | null;
}
export interface StandardPageByIdQuery_standardPage_contentCollection_items_Hero_contentCollection_items {
    sys: StandardPageByIdQuery_standardPage_contentCollection_items_Hero_contentCollection_items_sys;
    asset: StandardPageByIdQuery_standardPage_contentCollection_items_Hero_contentCollection_items_asset | null;
    title: string | null;
    type: string | null;
    embeddedType: string | null;
    route: StandardPageByIdQuery_standardPage_contentCollection_items_Hero_contentCollection_items_route | null;
    style: any | null;
    url: string | null;
}
export interface StandardPageByIdQuery_standardPage_contentCollection_items_Hero_contentCollection {
    items: (StandardPageByIdQuery_standardPage_contentCollection_items_Hero_contentCollection_items | null)[];
}
export interface StandardPageByIdQuery_standardPage_contentCollection_items_Hero {
    sys: StandardPageByIdQuery_standardPage_contentCollection_items_Hero_sys;
    title: string | null;
    type: string | null;
    eyebrow: string | null;
    subtitle: string | null;
    desktopAsset: StandardPageByIdQuery_standardPage_contentCollection_items_Hero_desktopAsset | null;
    mobileAsset: StandardPageByIdQuery_standardPage_contentCollection_items_Hero_mobileAsset | null;
    style: any | null;
    contentCollection: StandardPageByIdQuery_standardPage_contentCollection_items_Hero_contentCollection | null;
}
export interface StandardPageByIdQuery_standardPage_contentCollection_items_Section_sys {
    id: string;
}
export interface StandardPageByIdQuery_standardPage_contentCollection_items_Section {
    sys: StandardPageByIdQuery_standardPage_contentCollection_items_Section_sys;
    title: string | null;
    subtitle: string | null;
    style: any | null;
    type: string | null;
}
export declare type StandardPageByIdQuery_standardPage_contentCollection_items = StandardPageByIdQuery_standardPage_contentCollection_items_Experiment | StandardPageByIdQuery_standardPage_contentCollection_items_Hero | StandardPageByIdQuery_standardPage_contentCollection_items_Section;
export interface StandardPageByIdQuery_standardPage_contentCollection {
    items: (StandardPageByIdQuery_standardPage_contentCollection_items | null)[];
}
export interface StandardPageByIdQuery_standardPage_footer_sys {
    id: string;
}
export interface StandardPageByIdQuery_standardPage_footer_logo_sys {
    id: string;
}
export interface StandardPageByIdQuery_standardPage_footer_logo_asset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface StandardPageByIdQuery_standardPage_footer_logo_route {
    slug: string | null;
}
export interface StandardPageByIdQuery_standardPage_footer_logo {
    sys: StandardPageByIdQuery_standardPage_footer_logo_sys;
    asset: StandardPageByIdQuery_standardPage_footer_logo_asset | null;
    title: string | null;
    type: string | null;
    embeddedType: string | null;
    route: StandardPageByIdQuery_standardPage_footer_logo_route | null;
    style: any | null;
    url: string | null;
}
export interface StandardPageByIdQuery_standardPage_footer_contentCollection_items_Link_sys {
    id: string;
}
export interface StandardPageByIdQuery_standardPage_footer_contentCollection_items_Link_asset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface StandardPageByIdQuery_standardPage_footer_contentCollection_items_Link_route {
    slug: string | null;
}
export interface StandardPageByIdQuery_standardPage_footer_contentCollection_items_Link {
    sys: StandardPageByIdQuery_standardPage_footer_contentCollection_items_Link_sys;
    asset: StandardPageByIdQuery_standardPage_footer_contentCollection_items_Link_asset | null;
    title: string | null;
    type: string | null;
    embeddedType: string | null;
    route: StandardPageByIdQuery_standardPage_footer_contentCollection_items_Link_route | null;
    style: any | null;
    url: string | null;
}
export interface StandardPageByIdQuery_standardPage_footer_contentCollection_items_Grid_sys {
    id: string;
}
export interface StandardPageByIdQuery_standardPage_footer_contentCollection_items_Grid {
    sys: StandardPageByIdQuery_standardPage_footer_contentCollection_items_Grid_sys;
    style: any | null;
    type: string | null;
}
export declare type StandardPageByIdQuery_standardPage_footer_contentCollection_items = StandardPageByIdQuery_standardPage_footer_contentCollection_items_Link | StandardPageByIdQuery_standardPage_footer_contentCollection_items_Grid;
export interface StandardPageByIdQuery_standardPage_footer_contentCollection {
    items: (StandardPageByIdQuery_standardPage_footer_contentCollection_items | null)[];
}
export interface StandardPageByIdQuery_standardPage_footer_secondaryContentCollection_items_Section {
}
export interface StandardPageByIdQuery_standardPage_footer_secondaryContentCollection_items_Link_sys {
    id: string;
}
export interface StandardPageByIdQuery_standardPage_footer_secondaryContentCollection_items_Link_asset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface StandardPageByIdQuery_standardPage_footer_secondaryContentCollection_items_Link_route {
    slug: string | null;
}
export interface StandardPageByIdQuery_standardPage_footer_secondaryContentCollection_items_Link {
    sys: StandardPageByIdQuery_standardPage_footer_secondaryContentCollection_items_Link_sys;
    asset: StandardPageByIdQuery_standardPage_footer_secondaryContentCollection_items_Link_asset | null;
    title: string | null;
    type: string | null;
    embeddedType: string | null;
    route: StandardPageByIdQuery_standardPage_footer_secondaryContentCollection_items_Link_route | null;
    style: any | null;
    url: string | null;
}
export declare type StandardPageByIdQuery_standardPage_footer_secondaryContentCollection_items = StandardPageByIdQuery_standardPage_footer_secondaryContentCollection_items_Section | StandardPageByIdQuery_standardPage_footer_secondaryContentCollection_items_Link;
export interface StandardPageByIdQuery_standardPage_footer_secondaryContentCollection {
    items: (StandardPageByIdQuery_standardPage_footer_secondaryContentCollection_items | null)[];
}
export interface StandardPageByIdQuery_standardPage_footer {
    sys: StandardPageByIdQuery_standardPage_footer_sys;
    copy: string | null;
    style: any | null;
    type: string | null;
    logo: StandardPageByIdQuery_standardPage_footer_logo | null;
    contentCollection: StandardPageByIdQuery_standardPage_footer_contentCollection | null;
    secondaryContentCollection: StandardPageByIdQuery_standardPage_footer_secondaryContentCollection | null;
}
export interface StandardPageByIdQuery_standardPage {
    id: string | null;
    header: StandardPageByIdQuery_standardPage_header | null;
    contentCollection: StandardPageByIdQuery_standardPage_contentCollection | null;
    footer: StandardPageByIdQuery_standardPage_footer | null;
}
export interface StandardPageByIdQuery {
    standardPage: StandardPageByIdQuery_standardPage | null;
}
export interface StandardPageByIdQueryVariables {
    id: string;
    preview: boolean;
}
//# sourceMappingURL=StandardPageByIdQuery.d.ts.map