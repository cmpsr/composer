import { GoogleCloudStorage } from './GoogleCloudStorage';

const useCloudStorage = (
  projectId: string = process.env.GCP_PROJECT_ID,
  email: string = process.env.GCP_EMAIL,
  privateKey: string = process.env.GCP_PRIVATE_KEY,
): GoogleCloudStorage => {
  return new GoogleCloudStorage({
    projectId,
    credentials: {
      client_email: email,
      private_key: privateKey,
    },
  });
};

export * from './GoogleCloudStorage';
export default useCloudStorage;
