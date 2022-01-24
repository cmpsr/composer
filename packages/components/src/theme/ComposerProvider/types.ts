import React from 'react';
import { Theme } from '../../theme';

export interface ComposerProviderProps {
  theme?: Partial<Theme>;
  children: React.ReactNode;
  resetCSS?: boolean;
}
