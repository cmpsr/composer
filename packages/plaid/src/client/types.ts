import plaid from 'plaid';

export type PlaidOptions = plaid.ClientOptions;

export interface PlaidConfig {
  clientId: string;
  secret: string;
  publicKey: string;
  env: string;
  publicToken: string;
  options?: PlaidOptions;
}

export interface GetTransactionOptions {
  count?: number;
  offset?: number;
}

export interface CreateAssetsReportOptions {
  webhook: string;
  user: any;
}
