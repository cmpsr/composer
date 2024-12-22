import { CloudLogger } from './integration/CloudLogger';

const useCloudLogger = (
  logName: string,
  projectId: string = process.env.GCP_PROJECT_ID,
  email: string = process.env.GCP_EMAIL,
  privateKey: string = process.env.GCP_PRIVATE_KEY,
): CloudLogger => {
  return new CloudLogger({
    projectId,
    credentials: {
      client_email: email,
      private_key: privateKey,
    },
    logName,
  });
};

export * from './integration/types';
export { CloudLogger };
export default useCloudLogger;
