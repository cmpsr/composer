import { type Dispatch } from 'react';

export enum HandleAnswersActions {
  SaveAnswer = 'saveAnswer',
  ResetAnswer = 'resetAnswer',
}

export type HandleAnswersAction = {
  type: HandleAnswersActions;
  payload?: string | object;
};

export type SubmitAnswerFn = (currentPage: string) => Promise<any>;

export type useHandleActionResponse = {
  answersDispatch: Dispatch<HandleAnswersAction>;
  state: { answer: string | object };
  submitAnswer: SubmitAnswerFn;
};
