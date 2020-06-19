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
export declare const AnalyticsContext: React.Context<IAnalyticsContext>;
//# sourceMappingURL=AnalyticsContext.d.ts.map