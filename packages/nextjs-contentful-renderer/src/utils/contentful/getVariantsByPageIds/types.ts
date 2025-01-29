export interface Page {
  sys: { id: string };
  linkedFrom: { variantCollection: { items: Variant[] } };
}

export interface Variant {
  sys: { id: string };
  linkedFrom: { routeCollection: { items: Route[] } };
}

export interface Route {
  slug: string;
}
