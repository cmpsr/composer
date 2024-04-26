import { AnswerType, AnswersType } from '@components/Question';
import { type Dispatch } from 'react';

export enum HandleAnswersActions {
  SaveAnswer = 'saveAnswer',
  ResetAnswer = 'resetAnswer',
  GetPreviousAnswer = 'getPreviousAnswer',
  SetPreviousAnswers = 'setPreviousAnswers',
}

export type HandleAnswersAction = {
  type: HandleAnswersActions;
  payload?: string | object;
};

export type SubmitAnswerFn = (currentPage: string) => Promise<any>;

export type useHandleActionResponse = {
  answersDispatch: Dispatch<HandleAnswersAction>;
  state: { answer: AnswerType; previousAnswers: AnswersType };
  submitAnswer: SubmitAnswerFn;
};
