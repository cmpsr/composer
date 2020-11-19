import { BaseProps } from 'components/Components.types';

export type Props = BaseProps & {
  id: string;
  title: string;
  description: string;
  message: string;
  unreadMessages?: number;
  avatarText?: string;
  isHighlighted?: boolean;
  isActive?: boolean;
  isError?: boolean;
  time: string;
  customCss?: string;
  messageClassName?: string;
  messageCustomCss?: string;
  onClick?: (id: string) => void;
};
