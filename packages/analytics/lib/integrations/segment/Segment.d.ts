import { IIntegration } from '../types';
import { ISegmentConfig } from './types';
import { Identify, Track, Page, Group } from '../../types';
export declare class Segment implements IIntegration {
    constructor(config: ISegmentConfig);
    identify: Identify;
    group: Group;
    page: Page;
    track: Track;
    reset: () => void;
}
//# sourceMappingURL=Segment.d.ts.map