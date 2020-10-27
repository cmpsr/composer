import { ReactNode } from 'react';
import { Target } from 'components/primitives/Link/Link.types';

export type Props = {
  className?: string;
  icon?: ReactNode;
  url?: string;
  route?: { slug: string };
  title?: string;
  subTitle?: string;
  target?: Target;
  testId?: string;
};
