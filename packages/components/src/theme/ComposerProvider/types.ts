import React from 'react';
import { Theme } from '../../theme';

export interface ComposerContextProps {
  theme: Theme;
}

export interface ComposerProviderProps extends ComposerContextProps {
  children: React.ReactNode;
}
