import { IEncryptor, KmsConfig } from "types";
import kms from "@google-cloud/kms";
import crypto from "crypto";

class Kms implements IEncryptor {
  private config: KmsConfig;

  constructor(config: KmsConfig) {
    this.config = config;
  }

  async encrypt(data: object | string, excludingKeys: string[] = []) {
    if (typeof data === "string") {
      return this.encryptString(data);
    }
    const result = { ...data };
    const excludingKeysSet = new Set(excludingKeys);
    const keys = Object.keys(data);
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      const value = data[key];
      if (excludingKeysSet.has(key)) {
        // excluded from encryption
        continue;
      } else if (value && typeof value === "string") {
        result[key] = await this.encryptString(value);
      } else if (typeof value === "object") {
        // recursive encrypt object
        result[key] = await this.encrypt(value);
      }
    }
    return result;
  }

  async decrypt(data: string | object, excludingKeys: string[] = []) {
    if (typeof data === "string") {
      return this.decryptString(data);
    }
    const result = { ...data };
    const excludingKeysSet = new Set(excludingKeys);
    const keys = Object.keys(data);
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      const value = Reflect.get(data, key);
      if (excludingKeysSet.has(key)) {
        // excluded from decryption
        continue;
      } else if (value && typeof value === "string") {
        // recursive decrypt object
        result[key] = await this.decryptString(value);
      } else if (typeof value === "object") {
        result[key] = await this.decrypt(value);
      }
    }
    return result;
  }

  private async encryptString(data: string) {
    const client = new kms.KeyManagementServiceClient();

    // Construct the crypto key version ID
    const locationId = this.config.locationId || "global";
    const name = client.cryptoKeyVersionPath(
      this.config.projectId,
      locationId,
      this.config.keyRingId,
      this.config.cryptoKeyId,
      this.config.cryptoKeyVersionId
    );

    // Get public key from Cloud KMS
    const [publicKey] = await client.getPublicKey({ name });

    // Encrypt data using the public key
    const dataBuffer = Buffer.from(data);
    const encryptedBuffer = crypto.publicEncrypt(
      {
        key: publicKey.pem,
        oaepHash: "sha256",
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      },
      dataBuffer
    );

    // Return the buffer base64 encoded
    return encryptedBuffer.toString("base64");
  }

  private async decryptString(data: string) {
    const client = new kms.KeyManagementServiceClient();

    // Construct the crypto key version ID
    const locationId = this.config.locationId || "global";
    const name = client.cryptoKeyVersionPath(
      this.config.projectId,
      locationId,
      this.config.keyRingId,
      this.config.cryptoKeyId,
      this.config.cryptoKeyVersionId
    );

    // Decrypt plaintext using Cloud KMS
    const [result] = await client.asymmetricDecrypt({
      name: name,
      ciphertext: data,
    });

    return result.plaintext.toString();
  }
}

export { Kms };
