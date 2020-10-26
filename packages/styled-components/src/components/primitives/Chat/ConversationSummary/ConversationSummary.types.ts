export type Props = {
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
  className?: string;
  messageCss?: string;
  testId?: string;
  onClick?: (id: string) => void;
};
