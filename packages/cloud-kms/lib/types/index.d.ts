export interface KmsConfig {
    projectId: string;
    keyRingId: string;
    cryptoKeyId: string;
    cryptoKeyVersionId: string;
    locationId?: string;
}
export interface IEncryptor {
    encrypt: (data: string | object, excludedKeys?: string[]) => Promise<string | object>;
    decrypt: (data: string | object, excludedKeys?: string[]) => Promise<string | object>;
}
//# sourceMappingURL=index.d.ts.map