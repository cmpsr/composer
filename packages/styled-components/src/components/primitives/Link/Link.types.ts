import { BaseProps } from 'components/Components.types';
import { ReactNode } from 'react';

export type Props = BaseProps & {
  children?: ReactNode;
  textClassName?: string;
  route?: { slug: string };
  url?: string;
  type?: Types;
  target?: Target;
};

export enum Types {
  Image = 'image',
  Text = 'text',
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum Target {
  Blank = '_blank',
  Parent = '_parent',
  Top = '_top',
  FrameName = 'framename',
}
