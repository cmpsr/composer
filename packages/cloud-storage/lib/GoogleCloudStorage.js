"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleCloudStorage = void 0;

var _storage = require("@google-cloud/storage");

class GoogleCloudStorage {
  constructor(config) {
    this.storage = new _storage.Storage(config);
  }

  async upload(fileAtPath, to, options) {
    const [file, metadata] = await this.storage.bucket(to).upload(fileAtPath, options);
    return {
      name: file.name,
      selfLink: metadata.selfLink,
      mediaLink: metadata.mediaLink,
      md5Hash: metadata.md5Hash
    };
  }

  async download(file, from, to, kmsKeyName) {
    const options = kmsKeyName ? {
      kmsKeyName
    } : undefined;
    await this.storage.bucket(from).file(file, options).download({
      destination: to
    });
    return to;
  }

  async delete(file, from) {
    await this.storage.bucket(from).file(file).delete();
  }

}

exports.GoogleCloudStorage = GoogleCloudStorage;