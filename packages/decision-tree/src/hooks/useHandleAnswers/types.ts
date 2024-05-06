import { AnswerType, AnswersType } from '@components/Question';
import {
  HeightAnswer,
  MultipleChoiceAnswer,
  NumericAnswer,
  SingleChoiceAnswer,
} from '@components/Question/questionTypes';
import { type Dispatch } from 'react';

export enum HandleAnswersActions {
  SaveAnswer = 'saveAnswer',
  ResetAnswer = 'resetAnswer',
  GetPreviousAnswer = 'getPreviousAnswer',
  SetPreviousAnswers = 'setPreviousAnswers',
}

type PreviousAnswersType = {
  [key: string]: AnswerModel;
};

export type HandleAnswersAction = {
  type: HandleAnswersActions;
  payload?: AnswerModel | string | PreviousAnswersType;
};

export type SubmitAnswerFn = (currentPage: string) => Promise<any>;

export type useHandleActionResponse = {
  answersDispatch: Dispatch<HandleAnswersAction>;
  state: { answer: AnswerType; previousAnswers: AnswersType; isAnswered: boolean };
  submitAnswer: SubmitAnswerFn;
  submitIDKAnswer: SubmitAnswerFn;
};

type iDontKnowAnswerType = {
  type: 'iDontKnow';
};

export type AnswerModel =
  | SingleChoiceAnswer
  | MultipleChoiceAnswer
  | NumericAnswer
  | HeightAnswer
  | iDontKnowAnswerType;

export const iDontKnowAnswer: iDontKnowAnswerType = { type: 'iDontKnow' };
