export interface KmsConfig {
  projectId: string;
  keyFilename?: string;
  credentials?: { client_email?: string; private_key?: string };
  key: {
    keyRingId: string;
    cryptoKeyId: string;
    cryptoKeyVersionId: string;
    locationId?: string;
  };
}

export interface IEncryptor {
  encrypt: (
    data: string | object,
    excludedKeys?: string[]
  ) => Promise<string | object>;
  decrypt: (
    data: string | object,
    excludedKeys?: string[]
  ) => Promise<string | object>;
}
