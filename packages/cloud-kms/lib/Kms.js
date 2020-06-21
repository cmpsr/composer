"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Kms = void 0;

var _kms = _interopRequireDefault(require("@google-cloud/kms"));

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Kms {
  constructor(config) {
    this.config = config;
  }

  async encrypt(data, excludingKeys = []) {
    if (typeof data === "string") {
      return this.encryptString(data);
    }

    const result = _objectSpread({}, data);

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

  async decrypt(data, excludingKeys = []) {
    if (typeof data === "string") {
      return this.decryptString(data);
    }

    const result = _objectSpread({}, data);

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

  async encryptString(data) {
    const client = new _kms.default.KeyManagementServiceClient(); // Construct the crypto key version ID

    const locationId = this.config.locationId || "global";
    const name = client.cryptoKeyVersionPath(this.config.projectId, locationId, this.config.keyRingId, this.config.cryptoKeyId, this.config.cryptoKeyVersionId); // Get public key from Cloud KMS

    const [publicKey] = await client.getPublicKey({
      name
    }); // Encrypt data using the public key

    const dataBuffer = Buffer.from(data);

    const encryptedBuffer = _crypto.default.publicEncrypt({
      key: publicKey.pem,
      oaepHash: "sha256",
      padding: _crypto.default.constants.RSA_PKCS1_OAEP_PADDING
    }, dataBuffer); // Return the buffer base64 encoded


    return encryptedBuffer.toString("base64");
  }

  async decryptString(data) {
    const client = new _kms.default.KeyManagementServiceClient(); // Construct the crypto key version ID

    const locationId = this.config.locationId || "global";
    const name = client.cryptoKeyVersionPath(this.config.projectId, locationId, this.config.keyRingId, this.config.cryptoKeyId, this.config.cryptoKeyVersionId); // Decrypt plaintext using Cloud KMS

    const [result] = await client.asymmetricDecrypt({
      name: name,
      ciphertext: data
    });
    return result.plaintext.toString();
  }

}

exports.Kms = Kms;