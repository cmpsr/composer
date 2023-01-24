import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'x-authorization': process.env.API_AUTH_TOKEN as string,
  },
});
