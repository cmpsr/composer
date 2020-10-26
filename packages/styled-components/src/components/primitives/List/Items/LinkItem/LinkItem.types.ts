import { ReactNode } from 'react';
import { Link } from 'components/primitives/Link';

export type Props = {
  className?: string;
  icon?: ReactNode;
  url?: string;
  route?: { slug: string };
  title?: string;
  subTitle?: string;
  target?: Link.Target;
  testId?: string;
};
