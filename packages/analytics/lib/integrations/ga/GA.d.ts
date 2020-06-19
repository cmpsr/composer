import { IIntegration } from '../types';
import { IGAConfig } from './types';
import { Identify, Track, Page, Group } from '../../types';
export declare class GA implements IIntegration {
    constructor(config: IGAConfig);
    identify: Identify;
    group: Group;
    page: Page;
    track: Track;
    reset: () => void;
}
//# sourceMappingURL=GA.d.ts.map