import { AnswersType } from '@components/Question';
import { HandleAnswersAction, SubmitAnswerFn } from '@hooks';
import { Steps } from '@types';
import { type Dispatch } from 'react';

export enum PaginationActions {
  NextQuestion = 'NextQuestion',
  PreviousQuestion = 'PreviousQuestion',
}

export type PaginationPayload = {
  nextQuestion: {
    sectionId: string;
    questionId: string;
  };
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
  goToNextQuestion: () => Promise<void>;
};

export type PaginationProps = {
  steps: Steps;
  initialState: PaginationState;
  answersDispatch: Dispatch<HandleAnswersAction>;
  submitAnswer: SubmitAnswerFn;
};
