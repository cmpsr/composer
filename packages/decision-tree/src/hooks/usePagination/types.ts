import { AnswersType } from '@components/Question';
import { HandleAnswersAction } from '@hooks';
import { Steps } from '@types';
import { type Dispatch } from 'react';

export enum PaginationActions {
  NextQuestion = 'NextQuestion',
  PreviousQuestion = 'PreviousQuestion',
}

export type PaginationPayload = {
  nextSectionId: string;
  nextQuestionId: string;
  answers: AnswersType;
};

export type PaginationAction = {
  type: PaginationActions;
  payload?: PaginationPayload;
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
