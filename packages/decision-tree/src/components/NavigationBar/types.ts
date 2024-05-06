import { type Dispatch } from 'react';
import { PaginationAction } from '@hooks';
import { QuestionnaireType } from '@types';

export type NavigationBarProps = {
  isBackDisabled: boolean;
  isNextDisabled: boolean;
  dispatch: Dispatch<PaginationAction>;
  submitAnswer: () => Promise<QuestionnaireType>;
};
