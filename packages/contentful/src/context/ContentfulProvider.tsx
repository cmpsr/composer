import React, { useMemo } from 'react';

import { ContentfulContext } from './ContentfulContext';

import { componentMap as defaultComponentMap, queryMap as defaultQueryMap } from 'config';

export const ContentfulProvider = ({ children, locale = 'en-US', componentMap = {}, queryMap = {} }) => {
  const value = useMemo(() => {
    return {
      locale,
      componentMap: { ...defaultComponentMap, ...componentMap },
      queryMap: { ...defaultQueryMap, ...queryMap },
    }
  }, [componentMap, queryMap]);

  return (
    <ContentfulContext.Provider value={value}>
      {children}
    </ContentfulContext.Provider>
  );
};
