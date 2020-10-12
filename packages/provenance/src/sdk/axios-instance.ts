import axios from 'axios';
import curlirize from 'axios-curlirize';

// For easy debugging to send out.
if (['development', 'test'].includes(process.env.NODE_ENV)) {
  curlirize(axios);
}

// if (!process.env.PROVENANCE_ENDPOINT) {
//   throw new Error('PROVENANCE_ENDPOINT environment variable missing');
// }

// if (!process.env.PROVENANCE_API_KEY) {
//   throw new Error('PROVENANCE_API_KEY environment variable missing');
// }

const instance = axios.create({
  baseURL: process.env.PROVENANCE_ENDPOINT,
  headers: {
    apikey: process.env.PROVENANCE_API_KEY,
    'Content-Type': 'application/json',
  },
});

export default instance;
