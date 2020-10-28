import { BaseProps } from 'components/Components.types';
import { ReactNode } from 'react';

export type Props = BaseProps & {
  tag?: Tags;
  type?: Types;
  intensity?: Intensities;
  children: ReactNode;
  mode?: Modes;
  htmlFor?: string;
};

export enum Types {
  Headline1 = 'headline1',
  Headline2 = 'headline2',
  Headline3 = 'headline3',
  Headline4 = 'headline4',
  Headline5 = 'headline5',
  Headline6 = 'headline6',
  Body = 'body',
  Detail = 'detail',
  Eyebrow = 'eyebrow',
  Form = 'form',
  FormError = 'formError',
  FormLabel = 'formLabel',
  Button = 'button',
  Link = 'linkSmall',
}

export enum Modes {
  Dark100 = 'dark100',
  Dark50 = 'dark50',
  Dark25 = 'dark25',
  Light100 = 'light100',
  Light50 = 'light50',
  Light25 = 'light25',
  Accent100 = 'accent100',
  Accent50 = 'accent50',
  Accent25 = 'accent25',
}

export enum Intensities {
  Light = 'light',
  Regular = 'regular',
  Medium = 'medium',
  Bold = 'bold',
}

export enum Tags {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  Paragraph = 'p',
  Span = 'span',
  Label = 'label',
}
