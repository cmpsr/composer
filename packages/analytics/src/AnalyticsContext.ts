import React from 'react';
import { IUser, Track, Page, Identify, Group } from './types';

export interface IAnalyticsContext {
  identify: Identify;
  group: Group;
  page: Page;
  track: Track;
  user: () => IUser;
  reset: () => void;
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
});
