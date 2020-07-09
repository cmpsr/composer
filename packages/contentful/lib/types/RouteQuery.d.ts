export interface RouteQuery_routeCollection_items {
    id: string | null;
    slug: string | null;
    variants: any | null;
}
export interface RouteQuery_routeCollection {
    items: (RouteQuery_routeCollection_items | null)[];
}
export interface RouteQuery {
    routeCollection: RouteQuery_routeCollection | null;
}
export interface RouteQueryVariables {
    slug: string;
    siteId?: string;
}
//# sourceMappingURL=RouteQuery.d.ts.map