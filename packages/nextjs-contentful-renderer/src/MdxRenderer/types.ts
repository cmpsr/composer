import { Model } from '@cmpsr/cml';

export type ComponentMap = Record<string, unknown>;

export interface MdxRendererProps {
  content: Model;
  componentMap?: ComponentMap;
}
