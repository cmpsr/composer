import { ReactNode } from 'react';

export type Props = {
  children?: ReactNode;
  className?: string;
  textClassName?: string;
  route?: { slug: string };
  url?: string;
  type?: Types;
  testId?: string;
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
