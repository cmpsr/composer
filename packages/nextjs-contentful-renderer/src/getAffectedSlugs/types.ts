export enum ContentType {
    Model = 'model',
    Block = 'block',
    Page = 'page',
    Variant = 'variant',
    Route = 'route',
    Replica = 'replica'
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
