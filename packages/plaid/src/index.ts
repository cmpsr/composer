import { Plaid, PlaidOptions } from './client';
import { Environment } from 'types';
import { plaidEnvironments } from './constants';

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

export const getPlaidInstance = ({
  publicToken,
  env = 'production',
  options = undefined,
  clientId = process.env.PLAID_CLIENT_ID,
  secret = process.env.PLAID_SECRET,
  publicKey = process.env.PLAID_PUBLIC_KEY,
}: Params): Plaid => {
  return new Plaid({
    clientId,
    secret,
    publicKey,
    env: plaidEnvironments[env],
    publicToken,
    options,
  });
};
