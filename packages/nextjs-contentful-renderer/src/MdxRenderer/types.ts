import { ComponentMap } from 'mdx-bundler/client';
import { Model } from '../utils/contentful/getPageById/types';

export interface MdxRendererProps {
  content: Model;
  componentMap?: ComponentMap;
}
