import { BaseProps } from 'components/Components.types';
import { ReactNode } from 'react';
import { Color } from '../Badges.types';

export type Props = BaseProps & {
  icon: ReactNode;
  color?: Color;
};
