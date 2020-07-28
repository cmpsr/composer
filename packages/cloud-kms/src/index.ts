import { Kms } from './Kms';

const useKMS = ({
  projectId = process.env.GCP_PROJECT_ID,
  email = process.env.GCP_EMAIL,
  privateKey = process.env.GCP_PRIVATE_KEY,
  keyRingId,
  cryptoKeyId = 'default',
  cryptoKeyVersionId = '1',
  locationId = undefined,
}): Kms =>
  new Kms({
    projectId,
    credentials: {
      client_email: email,
      private_key: privateKey,
    },
    key: {
      keyRingId,
      cryptoKeyId,
      cryptoKeyVersionId,
      locationId,
    },
  });

export default useKMS;
export * from './Kms';
export * from './types';
