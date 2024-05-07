import { AnswersType } from '@components/Question';
import { HandleAnswersAction, SubmitAnswerFn } from '@hooks';
import { Steps } from '@types';
import { type Dispatch } from 'react';

export enum PaginationActions {
  NextQuestion = 'NextQuestion',
  PreviousQuestion = 'PreviousQuestion',
}

type nextQuestionType = {
  sectionId: string;
  questionId: string;
};

export type PaginationPayload = {
  nextQuestion: nextQuestionType;
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

export type NextQuestionType = () => Promise<void>;

export type PaginationResponse = {
  state: PaginationState;
  activeStep: number;
  paginationDispatch: Dispatch<PaginationAction>;
  isBackDisabled: boolean;
  nextQuestion: NextQuestionType;
};

export type PaginationProps = {
  steps: Steps;
  initialState: nextQuestionType;
  answersDispatch: Dispatch<HandleAnswersAction>;
  submitAnswer: SubmitAnswerFn;
};
