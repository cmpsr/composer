export enum ContentType {
  Model = 'model',
  Block = 'block',
  Page = 'page',
  Variant = 'variant',
  Route = 'route',
  Replica = 'replica',
  Theme = 'theme',
  Navbar = 'navbar',
  Footer = 'footer',
}

export interface ContentTypeEntry {
  contentType: ContentType;
  entryId: string;
  slug?: string;
}
