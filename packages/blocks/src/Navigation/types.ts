import { ReactNode } from 'react';

export interface NavigationProps {
  actions: ReactNode;
  anchors: Array<{ label: string; href: string }>;
  logoUrl: string;
  sticky?: boolean;
}
