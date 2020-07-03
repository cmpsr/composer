import React, { useEffect, useMemo } from 'react';
import invariant from 'invariant';

import { ContentfulContext } from './ContentfulContext';

export const ContentfulProvider = ({
  accessToken,
  children,
  componentMap = {},
  environment = 'master',
  locale = 'en-US',
  space,
  queryMap = {},
}) => {
  useEffect(() => {
    // invariant(accessToken, '`accessToken` props required on `ContentfulProvider`.');
    // invariant(space, '`space` required on `ContentfulProvider`.');

    if (!Object.keys(componentMap).length) {
      console.warn('`componentMap` supplied to `ContentfulProvider` is empty.');
    }

    if (!Object.keys(queryMap).length) {
      console.warn('`queryMap` supplied to `ContentfulProvider` is empty.');
    }
  }, [accessToken, componentMap, queryMap, space]);

  const value = useMemo(() => {
    return {
      accessToken,
      componentMap,
      environment,
      locale,
      queryMap,
      space,
    };
  }, [accessToken, componentMap, environment, locale, queryMap, space]);

  return (
    <ContentfulContext.Provider value={value}>
      {children}
    </ContentfulContext.Provider>
  );
};
