"use strict";

var _ = require(".");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const mockCryptoKeyVersionPath = jest.fn().mockImplementation(() => "crypto_key_version_path");
const mockGetPublicKey = jest.fn().mockImplementation(() => [{
  publicKey: "public_key"
}]);
const mockAsymmetricDecrypt = jest.fn().mockImplementation(() => [{
  plaintext: Buffer.from("plaintext")
}]);
jest.mock("@google-cloud/kms", () => {
  return {
    v1: {},
    KeyManagementServiceClient: jest.fn().mockImplementation(() => {
      return {
        cryptoKeyVersionPath: mockCryptoKeyVersionPath,
        getPublicKey: mockGetPublicKey,
        asymmetricDecrypt: mockAsymmetricDecrypt
      };
    })
  };
});
jest.mock("crypto", () => {
  return {
    publicEncrypt: jest.fn().mockImplementation(() => Buffer.from("encrypted string")),
    constants: {
      RSA_PKCS1_OAEP_PADDING: 1
    }
  };
});
describe("Kms", () => {
  const config = {
    projectId: "project_id",
    keyRingId: "key_ring_id",
    cryptoKeyId: "crypto_key",
    cryptoKeyVersionId: "1",
    locationId: "locationId"
  };
  beforeEach(() => {
    mockCryptoKeyVersionPath.mockClear();
    mockGetPublicKey.mockClear();
    mockAsymmetricDecrypt.mockClear();
  });
  describe("string encryption", () => {
    test("should encrypt string", async () => {
      const kms = new _.Kms(config);
      const encrypted = await kms.encrypt("plaintext");
      expect(encrypted).toBe(Buffer.from("encrypted string").toString("base64"));
    });
    test("should use global as locationId if not location is provided", () => {
      const kms = new _.Kms(_objectSpread(_objectSpread({}, config), {}, {
        locationId: undefined
      }));
      kms.encrypt("plaintext");
      expect(mockCryptoKeyVersionPath).toBeCalledWith(expect.anything(), "global", expect.anything(), expect.anything(), expect.anything());
    });
  });
  describe("string decryption", () => {
    test("should decrypt string", async () => {
      const kms = new _.Kms(config);
      const encrypted = await kms.decrypt("encrypted text");
      expect(encrypted).toBe("plaintext");
    });
    test("should use global as locationId if not location is provided", () => {
      const kms = new _.Kms(_objectSpread(_objectSpread({}, config), {}, {
        locationId: undefined
      }));
      kms.decrypt("encrypted text");
      expect(mockCryptoKeyVersionPath).toBeCalledWith(expect.anything(), "global", expect.anything(), expect.anything(), expect.anything());
    });
  });
  describe("object encryption", () => {
    test("should encrypt object", async () => {
      const kms = new _.Kms(config);
      const encrypted = await kms.encrypt({
        p: "plaintext"
      });
      expect(encrypted).toStrictEqual({
        p: Buffer.from("encrypted string").toString("base64")
      });
    });
    test("should skip excluded properties", async () => {
      const kms = new _.Kms(config);
      const encrypted = await kms.encrypt({
        p: "plaintext"
      }, ["p"]);
      expect(encrypted).toStrictEqual({
        p: "plaintext"
      });
    });
    test("should encrypt nested object", async () => {
      const kms = new _.Kms(config);
      const encrypted = await kms.encrypt({
        o: {
          p: "plaintext"
        }
      });
      expect(encrypted).toStrictEqual({
        o: {
          p: Buffer.from("encrypted string").toString("base64")
        }
      });
    });
  });
  describe("object decryption", () => {
    test("should decrypt object", async () => {
      const kms = new _.Kms(config);
      const encrypted = await kms.decrypt({
        p: "encrypted text"
      });
      expect(encrypted).toStrictEqual({
        p: "plaintext"
      });
    });
    test("should skip excluded properties", async () => {
      const kms = new _.Kms(config);
      const encrypted = await kms.decrypt({
        p: "encrypted text"
      }, ["p"]);
      expect(encrypted).toStrictEqual({
        p: "encrypted text"
      });
    });
    test("should decrypt nested object", async () => {
      const kms = new _.Kms(config);
      const encrypted = await kms.decrypt({
        o: {
          p: "encrypted text"
        }
      });
      expect(encrypted).toStrictEqual({
        o: {
          p: "plaintext"
        }
      });
    });
  });
});