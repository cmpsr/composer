import { Kms } from './Kms';
declare const useKMS: ({ projectId, email, privateKey, keyRingId, cryptoKeyId, cryptoKeyVersionId, locationId, }: {
    projectId?: string;
    email?: string;
    privateKey?: string;
    keyRingId: any;
    cryptoKeyId?: string;
    cryptoKeyVersionId?: string;
    locationId?: any;
}) => Kms;
export default useKMS;
export * from './Kms';
export * from './types';
//# sourceMappingURL=index.d.ts.map