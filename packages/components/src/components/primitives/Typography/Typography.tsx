import { ReactNode, createElement } from 'react';
import cn from 'classnames';

import { getClassesFromStyle } from 'utils';
import { Style } from 'types';

export const TYPOGRAPHY_DEFAULT_TEST_ID = 'typography';
export enum TypographyTypes {
  Headline1 = 'typo-headline-1',
  Headline2 = 'typo-headline-2',
  Headline3 = 'typo-headline-3',
  Headline4 = 'typo-headline-4',
  Headline5 = 'typo-headline-5',
  Headline6 = 'typo-headline-6',
  Body = 'typo-body',
  Detail = 'typo-detail',
  Eyebrow = 'typo-eyebrow',
  Form = 'typo-form',
  FormError = 'typo-form-error',
  FormLabel = 'typo-form-label',
  Button = 'typo-button',
  Link = 'typo-link',
}

export enum TypographyMode {
  Dark100 = 'dark-100',
  Dark50 = 'dark-50',
  Dark25 = 'dark-25',
  Light100 = 'light-100',
  Light50 = 'light-50',
  Light25 = 'light-25',
  Accent100 = 'accent-100',
  Accent50 = 'accent-50',
  Accent25 = 'accent-25',
}

type Props = {
  className?: string;
  style?: Style;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label';
  type: TypographyTypes;
  children: ReactNode;
  mode?: TypographyMode;
  testId?: string;
  htmlFor?: string;
};

export const Typography = ({
  className,
  children,
  style = {},
  type,
  tag,
  mode,
  htmlFor,
  testId = TYPOGRAPHY_DEFAULT_TEST_ID,
}: Props) => {
  const colorClasses = getClassesFromStyle(style);

  return createElement(
    tag,
    {
      className: cn(type, colorClasses, className, mode),
      'data-testid': testId,
      htmlFor,
    },
    children
  );
};
