import { usePlaidLink } from 'react-plaid-link';
import { Environment } from 'types';

export interface Params {
  clientName: string;
  product: string[];
  onSuccess: (publicToken: string, metadata: any) => void;
  env?: Environment;
  countryCodes?: string[];
  publicKey?: string;
  onEvent?: (event: string, metadata: any) => void;
  onExit?: (error: any, metadata: any) => void;
}

export const usePlaid = ({
  clientName,
  product,
  onSuccess,
  env = 'production',
  countryCodes = undefined,
  publicKey = process.env.PLAID_PUBLIC_KEY,
  onEvent = undefined,
  onExit = undefined,
}: Params) => {
  const { open, exit, ready, error } = usePlaidLink({
    clientName,
    product,
    env,
    publicKey,
    onSuccess,
    onEvent,
    onExit,
    countryCodes,
  });

  return { open, exit, ready, error };
};
