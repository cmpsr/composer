import { IEncryptor, KmsConfig } from 'types';
import kms from '@google-cloud/kms';
import crypto from 'crypto';

class Kms implements IEncryptor {
  private config: KmsConfig;
  private client: any;
  private name: any;

  constructor(config: KmsConfig) {
    this.config = config;
  }

  async encrypt(data: object | string, excludingKeys: string[] = []) {
    if (typeof data === 'string') {
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
      } else if (value && typeof value === 'string') {
        result[key] = await this.encryptString(value);
      } else if (typeof value === 'object') {
        // recursive encrypt object
        result[key] = await this.encrypt(value);
      }
    }
    return result;
  }

  async decrypt(data: string | object, excludingKeys: string[] = []) {
    if (typeof data === 'string') {
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
      } else if (value && typeof value === 'string') {
        // recursive decrypt object
        result[key] = await this.decryptString(value);
      } else if (typeof value === 'object') {
        result[key] = await this.decrypt(value);
      }
    }
    return result;
  }

  private async encryptString(data: string) {
    const client = this.createClient();

    // Get public key from Cloud KMS
    const [publicKey] = await client.getPublicKey({ name: this.createName() });

    // Encrypt data using the public key
    const dataBuffer = Buffer.from(data);
    const encryptedBuffer = crypto.publicEncrypt(
      {
        key: publicKey.pem,
        oaepHash: 'sha256',
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      },
      dataBuffer,
    );

    // Return the buffer base64 encoded
    return encryptedBuffer.toString('base64');
  }

  private async decryptString(data: string) {
    const client = this.createClient();

    // Construct the crypto key version ID
    // Decrypt plaintext using Cloud KMS
    const [result] = await client.asymmetricDecrypt({
      name: this.createName(),
      ciphertext: data,
    });

    return result.plaintext.toString();
  }

  private createClient() {
    if (this.client) return this.client;
    const { projectId, keyFilename, credentials } = this.config;
    this.client = new kms.KeyManagementServiceClient({
      projectId,
      keyFilename,
      credentials,
    });
    return this.client;
  }

  private createName() {
    if (this.name) return this.name;
    const client = this.createClient();

    // Construct the crypto key version ID
    const locationId = this.config.key.locationId || 'global';
    this.name = client.cryptoKeyVersionPath(
      this.config.projectId,
      locationId,
      this.config.key.keyRingId,
      this.config.key.cryptoKeyId,
      this.config.key.cryptoKeyVersionId,
    );
    return this.name;
  }
}

export { Kms };
