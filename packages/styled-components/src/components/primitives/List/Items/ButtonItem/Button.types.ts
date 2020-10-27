import { ReactNode } from 'react';

export type Props = {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  testId?: string;
};
