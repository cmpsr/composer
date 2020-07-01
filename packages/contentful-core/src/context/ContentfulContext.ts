import { createContext } from 'react';
export const ContentfulContext = createContext({
  locale: 'en-US',
  componentMap: {},
  queryMap: {},
});
