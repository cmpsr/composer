import { AnswerModel, HandleAnswersAction, SubmitAnswerFn } from '@hooks';
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
  answers: AnsweredQuestionsType;
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
  goToNextQuestion: () => Promise<void>;
};

export type PaginationProps = {
  steps: Steps;
  initialState: nextQuestionType;
  answersDispatch: Dispatch<HandleAnswersAction>;
  submitAnswer: SubmitAnswerFn;
  backOnFirstQuestion: () => void;
};

export type AnsweredQuestionsType = Array<AnsweredQuestion>;

type AnsweredQuestion = AnswerModel & {
  questionId: string;
  sectionId: string;
};
