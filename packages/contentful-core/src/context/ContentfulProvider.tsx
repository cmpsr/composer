import React, { useEffect, useMemo, ReactFragment } from 'react';
// import invariant from 'invariant';

import { ContentfulContext } from './ContentfulContext';

type Props = {
  accessToken?: string;
  children?: ReactFragment;
  componentMap?: any;
  environment?: string;
  locale?: string;
  preview?: boolean;
  space?: string;
  queryMap?: any;
}

export const ContentfulProvider = ({
  accessToken,
  children,
  componentMap = {},
  environment = 'master',
  locale = 'en-US',
  preview = false,
  space,
  queryMap = {},
}: Props) => {
  useEffect(() => {
    // invariant(accessToken, '`accessToken` props required on `ContentfulProvider`.');
    // invariant(space, '`space` required on `ContentfulProvider`.');

    if (!Object.keys(componentMap).length) {
      console.warn('`componentMap` supplied to `ContentfulProvider` is empty.');
    }

    // if (!Object.keys(queryMap).length) {
    //   console.warn('`queryMap` supplied to `ContentfulProvider` is empty.');
    // }
  }, [accessToken, componentMap, queryMap, space]);

  const value = useMemo(() => {
    return {
      accessToken,
      componentMap,
      environment,
      locale,
      preview,
      queryMap,
      space,
    };
  }, [accessToken, componentMap, environment, locale, preview, queryMap, space]);

  return (
    <ContentfulContext.Provider value={value}>
      {children}
    </ContentfulContext.Provider>
  );
};
