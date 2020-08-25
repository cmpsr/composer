import { createContext } from 'react';
export const ContentfulContext = createContext({
  locale: 'en-US',
  preview: false,
  componentMap: {},
  queryMap: {},
});
