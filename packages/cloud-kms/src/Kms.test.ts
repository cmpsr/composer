import { Kms } from ".";
import { KmsConfig } from "./types";

const mockCryptoKeyVersionPath = jest
  .fn()
  .mockImplementation(() => "crypto_key_version_path");
const mockGetPublicKey = jest
  .fn()
  .mockImplementation(() => [{ publicKey: "public_key" }]);
const mockAsymmetricDecrypt = jest
  .fn()
  .mockImplementation(() => [{ plaintext: Buffer.from("plaintext") }]);
jest.mock("@google-cloud/kms", () => {
  return {
    v1: {},
    KeyManagementServiceClient: jest.fn().mockImplementation(() => {
      return {
        cryptoKeyVersionPath: mockCryptoKeyVersionPath,
        getPublicKey: mockGetPublicKey,
        asymmetricDecrypt: mockAsymmetricDecrypt,
      };
    }),
  };
});

jest.mock("crypto", () => {
  return {
    publicEncrypt: jest
      .fn()
      .mockImplementation(() => Buffer.from("encrypted string")),
    constants: {
      RSA_PKCS1_OAEP_PADDING: 1,
    },
  };
});

describe("Kms", () => {
  const config: KmsConfig = {
    projectId: "project_id",
    keyRingId: "key_ring_id",
    cryptoKeyId: "crypto_key",
    cryptoKeyVersionId: "1",
    locationId: "locationId",
  };

  beforeEach(() => {
    mockCryptoKeyVersionPath.mockClear();
    mockGetPublicKey.mockClear();
    mockAsymmetricDecrypt.mockClear();
  });

  describe("string encryption", () => {
    test("should encrypt string", async () => {
      const kms = new Kms(config);
      const encrypted = await kms.encrypt("plaintext");
      expect(encrypted).toBe(
        Buffer.from("encrypted string").toString("base64")
      );
    });
    test("should use global as locationId if not location is provided", () => {
      const kms = new Kms({ ...config, locationId: undefined });
      kms.encrypt("plaintext");
      expect(mockCryptoKeyVersionPath).toBeCalledWith(
        expect.anything(),
        "global",
        expect.anything(),
        expect.anything(),
        expect.anything()
      );
    });
  });

  describe("string decryption", () => {
    test("should decrypt string", async () => {
      const kms = new Kms(config);
      const encrypted = await kms.decrypt("encrypted text");
      expect(encrypted).toBe("plaintext");
    });
    test("should use global as locationId if not location is provided", () => {
      const kms = new Kms({ ...config, locationId: undefined });
      kms.decrypt("encrypted text");
      expect(mockCryptoKeyVersionPath).toBeCalledWith(
        expect.anything(),
        "global",
        expect.anything(),
        expect.anything(),
        expect.anything()
      );
    });
  });

  describe("object encryption", () => {
    test("should encrypt object", async () => {
      const kms = new Kms(config);
      const encrypted = await kms.encrypt({ p: "plaintext" });
      expect(encrypted).toStrictEqual({
        p: Buffer.from("encrypted string").toString("base64"),
      });
    });
    test("should skip excluded properties", async () => {
      const kms = new Kms(config);
      const encrypted = await kms.encrypt({ p: "plaintext" }, ["p"]);
      expect(encrypted).toStrictEqual({ p: "plaintext" });
    });
    test("should encrypt nested object", async () => {
      const kms = new Kms(config);
      const encrypted = await kms.encrypt({ o: { p: "plaintext" } });
      expect(encrypted).toStrictEqual({
        o: { p: Buffer.from("encrypted string").toString("base64") },
      });
    });
  });

  describe("object decryption", () => {
    test("should decrypt object", async () => {
      const kms = new Kms(config);
      const encrypted = await kms.decrypt({ p: "encrypted text" });
      expect(encrypted).toStrictEqual({
        p: "plaintext",
      });
    });
    test("should skip excluded properties", async () => {
      const kms = new Kms(config);
      const encrypted = await kms.decrypt({ p: "encrypted text" }, ["p"]);
      expect(encrypted).toStrictEqual({ p: "encrypted text" });
    });
    test("should decrypt nested object", async () => {
      const kms = new Kms(config);
      const encrypted = await kms.decrypt({ o: { p: "encrypted text" } });
      expect(encrypted).toStrictEqual({
        o: { p: "plaintext" },
      });
    });
  });
});
