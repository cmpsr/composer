import { Plaid, PlaidOptions } from './client';
import { Environment } from 'types';
export * from 'types';
export * from './client';
export interface Params {
    publicToken: string;
    env?: Environment;
    options?: PlaidOptions;
    clientId?: string;
    secret?: string;
    publicKey?: string;
}
export declare const getPlaidInstance: ({ publicToken, env, options, clientId, secret, publicKey, }: Params) => Plaid;
//# sourceMappingURL=index.d.ts.map