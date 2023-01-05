import { ComponentMap } from 'mdx-bundler/client';
import { Model } from '@cmpsr/cml';

export interface MdxRendererProps {
  content: Model;
  componentMap?: ComponentMap;
}
