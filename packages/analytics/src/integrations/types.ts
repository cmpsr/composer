import { Track, Page, Identify, Group, Revenue } from '../types';
export interface IIntegration {
  identify: Identify;
  group: Group;
  page: Page;
  track: Track;
  reset: () => void;
  revenue: Revenue;
}
