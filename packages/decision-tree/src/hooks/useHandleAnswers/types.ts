import { QuestionnaireType } from '@types';
import { type Dispatch } from 'react';

export enum HandleAnswersActions {
  SaveAnswer = 'saveAnswer',
  ResetAnswer = 'resetAnswer',
}

export type HandleAnswersAction = {
  type: HandleAnswersActions;
  payload?: string | object;
};

export type SubmitAnswerFn = (currentPage: string) => Promise<QuestionnaireType>;

export type useHandleActionResponse = {
  answersDispatch: Dispatch<HandleAnswersAction>;
  state: { answer: string | object };
  submitAnswer: SubmitAnswerFn;
};
