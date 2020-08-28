import { GoogleCloudStorageConfig, IFileStorage, UploadFileOptions } from "types";
declare class GoogleCloudStorage implements IFileStorage {
    private storage;
    constructor(config: GoogleCloudStorageConfig);
    upload(fileAtPath: string, to: string, options?: UploadFileOptions): Promise<{
        name: string;
        selfLink: any;
        mediaLink: any;
        md5Hash: any;
    }>;
    download(file: string, from: string, to: string, kmsKeyName?: string): Promise<string>;
    delete(file: string, from: string): Promise<void>;
}
export { GoogleCloudStorage };
//# sourceMappingURL=GoogleCloudStorage.d.ts.map