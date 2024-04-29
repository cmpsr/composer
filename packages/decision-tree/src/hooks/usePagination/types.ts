import { HandleAnswersAction } from '@hooks';
import { Steps } from '@types';
import { type Dispatch } from 'react';

export enum PaginationActions {
  NextQuestion = 'NextQuestion',
  PreviousQuestion = 'PreviousQuestion',
}

export type PaginationAction = {
  type: PaginationActions;
  payload?: {
    nextSectionId: string;
    nextQuestionId: string;
  };
};

export type PaginationState = {
  currentQuestion: string;
  currentSection: string;
  step?: number;
};

export type PaginationResponse = {
  state: PaginationState;
  activeStep: number;
  paginationDispatch: Dispatch<PaginationAction>;
  isBackDisabled: boolean;
};

export type PaginationProps = {
  steps: Steps;
  initialState: PaginationState;
  answersDispatch: Dispatch<HandleAnswersAction>;
};
