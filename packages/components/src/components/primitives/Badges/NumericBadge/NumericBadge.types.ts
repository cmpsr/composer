import { BaseProps } from 'components/Components.types';
import { Color } from '../Badges.types';

export type Props = BaseProps & {
  number: number;
  color?: Color;
  maximumNumber?: number;
};
