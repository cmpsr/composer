import React from 'react';
import { IUser, Track, Page, Identify, Group, Revenue } from './types';

export interface IAnalyticsContext {
  identify: Identify;
  group: Group;
  page: Page;
  track: Track;
  user: () => IUser;
  reset: () => void;
  revenue: Revenue;
}

export const AnalyticsContext = React.createContext<IAnalyticsContext>({
  identify: () => null,
  group: () => null,
  page: () => null,
  track: () => null,
  user: () => ({
    anonymousId: '',
  }),
  reset: () => null,
  revenue: () => null,
});
