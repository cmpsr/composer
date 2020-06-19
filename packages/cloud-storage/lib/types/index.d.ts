import { UploadOptions } from "@google-cloud/storage";
export interface GoogleCloudStorageConfig {
    projectId?: string;
    keyFilename?: string;
    credentials?: {
        client_email?: string;
        private_key?: string;
    };
}
export interface IFileStorage {
    upload: (fileAtPath: string, to: string, options?: UploadFileOptions) => Promise<UploadFileResult>;
    download: (file: string, from: string, to: string, kmsKeyName?: string) => Promise<string>;
    delete: (file: string, from: string) => Promise<void>;
}
export declare type UploadFileOptions = UploadOptions;
export interface UploadFileResult {
    name: string;
    selfLink: string;
    mediaLink: string;
    md5Hash: string;
}
//# sourceMappingURL=index.d.ts.map