import { LinkProps, TextProps } from '@cmpsr/components';
import { ListItemProps, StyleProps } from '@chakra-ui/react';

export interface MarkdownContextProps {
  paragraph?: StyleProps;
  link?: LinkProps;
  h1?: TextProps;
  h2?: TextProps;
  h3?: TextProps;
  h4?: TextProps;
  h5?: TextProps;
  h6?: TextProps;
  p?: TextProps;
  li?: ListItemProps;
}
