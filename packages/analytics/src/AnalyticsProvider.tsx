/* eslint-disable prefer-rest-params */
import React, { FC, ReactNode, useMemo } from 'react';
import { AnalyticsContext } from './AnalyticsContext';
import {
  Segment,
  ISegmentConfig,
  GA,
  IGAConfig,
  GTag,
  IGTagConfig,
  IIntegration,
  Meta,
  MetaConfig,
} from './integrations';
import { v1 as uuidv1 } from 'uuid'; // v1 is timestamp based + random
import Cookies from 'js-cookie';
import { Amplitude, AmplitudeConfig } from './integrations/amplitude';

const supportedIntegrations = {
  ga: GA,
  gtag: GTag,
  segment: Segment,
  amplitude: Amplitude,
  meta: Meta,
};

export interface IAnalyticsProvider {
  segment?: ISegmentConfig;
  gtag?: IGTagConfig;
  ga?: IGAConfig;
  amplitude?: AmplitudeConfig;
  meta?: MetaConfig;
  disabledFunctions?: Record<string, string[]>;
  children: ReactNode;
}

const ssr = !(typeof window !== 'undefined' && window.document && window.document.createElement);

const COOKIE_NAME = 'composer_anonymous_id';

const proxyToIntegrations = (integrations: IIntegration[], func: string, args: any[], disabledFunctions) => {
  integrations.forEach((integration) => {
    if (disabledFunctions && disabledFunctions[integration.constructor.name].includes(func)) {
      integration[func] = () => null;
      return;
    }
    // eslint-disable-next-line prefer-spread
    integration[func].apply(integration, args);
  });
};

// export for testing
export const _AnalyticsProvider: FC<IAnalyticsProvider> = ({ children, disabledFunctions = null, ...props }) => {
  const anonymousId = useMemo(() => {
    const id = Cookies.get(COOKIE_NAME) || uuidv1();
    Cookies.set(COOKIE_NAME, id, { expires: 365 });
    return id;
  }, []);

  const integrations = useMemo(() => {
    const enabledIntegrations = Object.keys(supportedIntegrations).filter((integration) => {
      if (props[integration]) {
        return true;
      }
      return false;
    });

    return enabledIntegrations.map((integration) => {
      return new supportedIntegrations[integration](props[integration]);
    });
  }, []);

  const context = useMemo(() => {
    return {
      identify: function () {
        proxyToIntegrations(integrations, 'identify', Array.from(arguments), disabledFunctions);
      },
      group: function () {
        proxyToIntegrations(integrations, 'group', Array.from(arguments), disabledFunctions);
      },
      page: function () {
        proxyToIntegrations(integrations, 'page', Array.from(arguments), disabledFunctions);
      },
      track: function () {
        proxyToIntegrations(integrations, 'track', Array.from(arguments), disabledFunctions);
      },
      user: () => ({
        anonymousId,
      }),
      reset: function () {
        proxyToIntegrations(integrations, 'reset', Array.from(arguments), disabledFunctions);
      },
      revenue: function () {
        proxyToIntegrations(integrations, 'revenue', Array.from(arguments), disabledFunctions);
      },
    };
  }, [anonymousId]);

  return <AnalyticsContext.Provider value={context}>{children}</AnalyticsContext.Provider>;
};

export const AnalyticsProvider: FC<IAnalyticsProvider> = (props) => {
  // Analytics is browser only. Just render what's in it.
  if (ssr) {
    return <>{props.children}</>;
  }

  return <_AnalyticsProvider {...props} />;
};
