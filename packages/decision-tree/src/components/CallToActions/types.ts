import { type Dispatch } from 'react';
import { NextQuestionType, PaginationAction } from '@hooks';

export type CallToActionsProps = {
  isBackDisabled: boolean;
  isNextDisabled: boolean;
  dispatch: Dispatch<PaginationAction>;
  nextQuestion: NextQuestionType;
};
