import { LinkShortenerConfig, ShortLink } from './types';
export declare class LinkShortener {
    private config;
    constructor(config: LinkShortenerConfig);
    short(url: string): Promise<ShortLink>;
}
//# sourceMappingURL=LinkShortener.d.ts.map