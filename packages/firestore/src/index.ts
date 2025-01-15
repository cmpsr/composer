import { FirestoreDb } from './db';

const getFirestoreDb = (
  projectId: string = process.env.GCP_PROJECT_ID,
  email: string = process.env.GCP_EMAIL,
  privateKey: string = process.env.GCP_PRIVATE_KEY,
): FirestoreDb => {
  return new FirestoreDb({
    projectId,
    credentials: {
      client_email: email,
      private_key: privateKey,
    },
  });
};

export default getFirestoreDb;
