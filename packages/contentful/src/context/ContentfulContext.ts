import { createContext } from 'react';
import { componentMap, queryMap } from 'config';
export const ContentfulContext = createContext({ locale: 'en-US', componentMap, queryMap });
