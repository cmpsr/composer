export interface GridByIdQuery_grid_sys {
    id: string;
}
export interface GridByIdQuery_grid_contentCollection_items_Person {
}
export interface GridByIdQuery_grid_contentCollection_items_Group_sys {
    id: string;
}
export interface GridByIdQuery_grid_contentCollection_items_Group_contentCollection_items_Section {
}
export interface GridByIdQuery_grid_contentCollection_items_Group_contentCollection_items_Link_sys {
    id: string;
}
export interface GridByIdQuery_grid_contentCollection_items_Group_contentCollection_items_Link_asset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface GridByIdQuery_grid_contentCollection_items_Group_contentCollection_items_Link_route {
    slug: string | null;
}
export interface GridByIdQuery_grid_contentCollection_items_Group_contentCollection_items_Link {
    sys: GridByIdQuery_grid_contentCollection_items_Group_contentCollection_items_Link_sys;
    asset: GridByIdQuery_grid_contentCollection_items_Group_contentCollection_items_Link_asset | null;
    title: string | null;
    type: string | null;
    embeddedType: string | null;
    route: GridByIdQuery_grid_contentCollection_items_Group_contentCollection_items_Link_route | null;
    style: any | null;
    url: string | null;
}
export declare type GridByIdQuery_grid_contentCollection_items_Group_contentCollection_items = GridByIdQuery_grid_contentCollection_items_Group_contentCollection_items_Section | GridByIdQuery_grid_contentCollection_items_Group_contentCollection_items_Link;
export interface GridByIdQuery_grid_contentCollection_items_Group_contentCollection {
    items: (GridByIdQuery_grid_contentCollection_items_Group_contentCollection_items | null)[];
}
export interface GridByIdQuery_grid_contentCollection_items_Group {
    sys: GridByIdQuery_grid_contentCollection_items_Group_sys;
    style: any | null;
    type: string | null;
    contentCollection: GridByIdQuery_grid_contentCollection_items_Group_contentCollection | null;
}
export interface GridByIdQuery_grid_contentCollection_items_Feature_sys {
    id: string;
}
export interface GridByIdQuery_grid_contentCollection_items_Feature_desktopAsset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface GridByIdQuery_grid_contentCollection_items_Feature_mobileAsset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface GridByIdQuery_grid_contentCollection_items_Feature_embeddedAsset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface GridByIdQuery_grid_contentCollection_items_Feature_contentCollection_items_sys {
    id: string;
}
export interface GridByIdQuery_grid_contentCollection_items_Feature_contentCollection_items_asset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface GridByIdQuery_grid_contentCollection_items_Feature_contentCollection_items_route {
    slug: string | null;
}
export interface GridByIdQuery_grid_contentCollection_items_Feature_contentCollection_items {
    sys: GridByIdQuery_grid_contentCollection_items_Feature_contentCollection_items_sys;
    asset: GridByIdQuery_grid_contentCollection_items_Feature_contentCollection_items_asset | null;
    title: string | null;
    type: string | null;
    embeddedType: string | null;
    route: GridByIdQuery_grid_contentCollection_items_Feature_contentCollection_items_route | null;
    style: any | null;
    url: string | null;
}
export interface GridByIdQuery_grid_contentCollection_items_Feature_contentCollection {
    items: (GridByIdQuery_grid_contentCollection_items_Feature_contentCollection_items | null)[];
}
export interface GridByIdQuery_grid_contentCollection_items_Feature {
    sys: GridByIdQuery_grid_contentCollection_items_Feature_sys;
    title: string | null;
    type: string | null;
    embeddedType: string | null;
    eyebrow: string | null;
    subtitle: string | null;
    desktopAsset: GridByIdQuery_grid_contentCollection_items_Feature_desktopAsset | null;
    mobileAsset: GridByIdQuery_grid_contentCollection_items_Feature_mobileAsset | null;
    embeddedAsset: GridByIdQuery_grid_contentCollection_items_Feature_embeddedAsset | null;
    style: any | null;
    contentCollection: GridByIdQuery_grid_contentCollection_items_Feature_contentCollection | null;
}
export interface GridByIdQuery_grid_contentCollection_items_Link_sys {
    id: string;
}
export interface GridByIdQuery_grid_contentCollection_items_Link_asset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface GridByIdQuery_grid_contentCollection_items_Link_route {
    slug: string | null;
}
export interface GridByIdQuery_grid_contentCollection_items_Link {
    sys: GridByIdQuery_grid_contentCollection_items_Link_sys;
    asset: GridByIdQuery_grid_contentCollection_items_Link_asset | null;
    title: string | null;
    type: string | null;
    embeddedType: string | null;
    route: GridByIdQuery_grid_contentCollection_items_Link_route | null;
    style: any | null;
    url: string | null;
}
export declare type GridByIdQuery_grid_contentCollection_items = GridByIdQuery_grid_contentCollection_items_Person | GridByIdQuery_grid_contentCollection_items_Group | GridByIdQuery_grid_contentCollection_items_Feature | GridByIdQuery_grid_contentCollection_items_Link;
export interface GridByIdQuery_grid_contentCollection {
    items: (GridByIdQuery_grid_contentCollection_items | null)[];
}
export interface GridByIdQuery_grid {
    sys: GridByIdQuery_grid_sys;
    style: any | null;
    type: string | null;
    contentCollection: GridByIdQuery_grid_contentCollection | null;
}
export interface GridByIdQuery {
    grid: GridByIdQuery_grid | null;
}
export interface GridByIdQueryVariables {
    id: string;
}
//# sourceMappingURL=GridByIdQuery.d.ts.map