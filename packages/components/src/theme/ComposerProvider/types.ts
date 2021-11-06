import React from 'react';
import { Theme } from '../../theme';

export interface ComposerProviderProps {
  theme?: Theme;
  children: React.ReactNode;
}
