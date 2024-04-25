import { type Dispatch } from 'react';
import { PaginationAction } from '@hooks';

export type NavigationBarProps = {
  isBackDisabled: boolean;
  isNextDisabled: boolean;
  dispatch: Dispatch<PaginationAction>;
  submitAnswer: () => Promise<any>;
};
