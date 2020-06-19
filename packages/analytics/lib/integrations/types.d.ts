import { Track, Page, Identify, Group } from '../types';
export interface IIntegration {
    identify: Identify;
    group: Group;
    page: Page;
    track: Track;
    reset: () => void;
}
//# sourceMappingURL=types.d.ts.map