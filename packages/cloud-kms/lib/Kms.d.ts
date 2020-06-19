import { IEncryptor, KmsConfig } from "types";
declare class Kms implements IEncryptor {
    private config;
    constructor(config: KmsConfig);
    encrypt(data: object | string, excludingKeys?: string[]): Promise<{}>;
    decrypt(data: string | object, excludingKeys?: string[]): Promise<{}>;
    private encryptString;
    private decryptString;
}
export { Kms };
//# sourceMappingURL=Kms.d.ts.map