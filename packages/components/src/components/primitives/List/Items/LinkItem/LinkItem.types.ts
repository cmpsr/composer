import { ReactNode } from 'react';
import { Target } from 'components/primitives/Link/Link.types';
import { BaseProps } from 'components/Components.types';

export type Props = BaseProps & {
  icon?: ReactNode;
  url?: string;
  route?: { slug: string };
  title?: string;
  subTitle?: string;
  target?: Target;
};
