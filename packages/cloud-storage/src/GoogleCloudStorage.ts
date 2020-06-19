import {
  GoogleCloudStorageConfig,
  IFileStorage,
  UploadFileOptions,
} from "types";
import { Storage } from "@google-cloud/storage";

class GoogleCloudStorage implements IFileStorage {
  private storage: Storage;

  constructor(config: GoogleCloudStorageConfig) {
    this.storage = new Storage(config);
  }

  async upload(fileAtPath: string, to: string, options?: UploadFileOptions) {
    const [file, metadata] = await this.storage
      .bucket(to)
      .upload(fileAtPath, options);
    return {
      name: file.name,
      selfLink: metadata.selfLink,
      mediaLink: metadata.mediaLink,
      md5Hash: metadata.md5Hash,
    };
  }

  async download(file: string, from: string, to: string, kmsKeyName?: string) {
    const options = kmsKeyName ? { kmsKeyName } : undefined;
    await this.storage
      .bucket(from)
      .file(file, options)
      .download({ destination: to });
    return to;
  }

  async delete(file: string, from: string) {
    await this.storage
      .bucket(from)
      .file(file)
      .delete();
  }
}

export { GoogleCloudStorage };
