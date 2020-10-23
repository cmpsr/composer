import { ReactNode } from 'react';
import { Color } from '../Badges.types';

export type Props = {
  icon: ReactNode;
  className?: string;
  testId?: string;
  color?: Color;
};
