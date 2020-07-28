import { IEncryptor, KmsConfig } from 'types';
declare class Kms implements IEncryptor {
    private config;
    private client;
    private name;
    constructor(config: KmsConfig);
    encrypt(data: object | string, excludingKeys?: string[]): Promise<{}>;
    decrypt(data: string | object, excludingKeys?: string[]): Promise<any>;
    private encryptString;
    private decryptString;
    private createClient;
    private createName;
}
export { Kms };
//# sourceMappingURL=Kms.d.ts.map