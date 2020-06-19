import React from 'react';
import { AnalyticsContext } from './AnalyticsContext';

export const useAnalytics = () => {
  return React.useContext(AnalyticsContext);
};
