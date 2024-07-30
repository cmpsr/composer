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

  export interface ContentfulWebhookPayload {
    sys: {
      id: string;
      contentType: {
        sys: {
          id: ContentType;
        }
      };
    };
    fields: {
      slug?: {
        'en-US': string;
      };
    };
  }
