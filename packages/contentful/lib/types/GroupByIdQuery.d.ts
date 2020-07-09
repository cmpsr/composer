export interface GroupByIdQuery_group_sys {
    id: string;
}
export interface GroupByIdQuery_group_contentCollection_items_Section {
}
export interface GroupByIdQuery_group_contentCollection_items_Link_sys {
    id: string;
}
export interface GroupByIdQuery_group_contentCollection_items_Link_asset {
    contentType: string | null;
    title: string | null;
    url: string | null;
}
export interface GroupByIdQuery_group_contentCollection_items_Link_route {
    slug: string | null;
}
export interface GroupByIdQuery_group_contentCollection_items_Link {
    sys: GroupByIdQuery_group_contentCollection_items_Link_sys;
    asset: GroupByIdQuery_group_contentCollection_items_Link_asset | null;
    title: string | null;
    type: string | null;
    embeddedType: string | null;
    route: GroupByIdQuery_group_contentCollection_items_Link_route | null;
    style: any | null;
    url: string | null;
}
export declare type GroupByIdQuery_group_contentCollection_items = GroupByIdQuery_group_contentCollection_items_Section | GroupByIdQuery_group_contentCollection_items_Link;
export interface GroupByIdQuery_group_contentCollection {
    items: (GroupByIdQuery_group_contentCollection_items | null)[];
}
export interface GroupByIdQuery_group {
    sys: GroupByIdQuery_group_sys;
    style: any | null;
    type: string | null;
    contentCollection: GroupByIdQuery_group_contentCollection | null;
}
export interface GroupByIdQuery {
    group: GroupByIdQuery_group | null;
}
export interface GroupByIdQueryVariables {
    id: string;
}
//# sourceMappingURL=GroupByIdQuery.d.ts.map