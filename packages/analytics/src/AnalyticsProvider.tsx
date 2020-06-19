/* eslint-disable prefer-rest-params */
import React from 'react';
import { AnalyticsContext } from './AnalyticsContext';
import {
  Segment,
  ISegmentConfig,
  GA,
  IGAConfig,
  IIntegration,
} from './integrations';
import { v1 as uuidv1 } from 'uuid'; // v1 is timestamp based + random
import Cookies from 'js-cookie';

const supportedIntegrations = {
  ga: GA,
  segment: Segment,
};

export interface IAnalyticsProvider {
  segment?: ISegmentConfig;
  ga?: IGAConfig;
}

const ssr = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

const COOKIE_NAME = 'composer_anonymous_id';

const proxyToIntegrations = (
  integrations: IIntegration[],
  func: string,
  args: any[],
) => {
  integrations.forEach((integration) =>
    // eslint-disable-next-line prefer-spread
    integration[func].apply(integration, args),
  );
};

// export for testing
export const _AnalyticsProvider: React.FC<IAnalyticsProvider> = ({
  children,
  ...props
}) => {
  const anonymousId = React.useMemo(() => {
    const id = Cookies.get(COOKIE_NAME) || uuidv1();
    Cookies.set(COOKIE_NAME, id, { expires: 365 });
    return id;
  }, []);

  const integrations = React.useMemo(() => {
    const enabledIntegrations = Object.keys(supportedIntegrations).filter(
      (integration) => {
        if (props[integration]) {
          return true;
        }
        return false;
      },
    );

    return enabledIntegrations.map((integration) => {
      return new supportedIntegrations[integration](props[integration]);
    });
  }, []);

  const context = React.useMemo(() => {
    return {
      identify: function () {
        proxyToIntegrations(integrations, 'identify', Array.from(arguments));
      },
      group: function () {
        proxyToIntegrations(integrations, 'group', Array.from(arguments));
      },
      page: function () {
        proxyToIntegrations(integrations, 'page', Array.from(arguments));
      },
      track: function () {
        proxyToIntegrations(integrations, 'track', Array.from(arguments));
      },
      user: () => ({
        anonymousId,
      }),
      reset: function () {
        proxyToIntegrations(integrations, 'reset', Array.from(arguments));
      },
    };
  }, [anonymousId]);

  return (
    <AnalyticsContext.Provider value={context}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const AnalyticsProvider: React.FC<IAnalyticsProvider> = (props) => {
  // Analytics is browser only. Just render what's in it.
  if (ssr) {
    return <>{props.children}</>;
  }

  return <_AnalyticsProvider {...props} />;
};
