import {
  HeightAnswer,
  MultipleChoiceAnswer,
  NumericAnswer,
  SingleChoiceAnswer,
} from '@components/Question/questionTypes';
import { UserQuestionnaireType } from '@types';
import { type Dispatch } from 'react';

export enum HandleAnswersActions {
  SaveAnswer = 'saveAnswer',
  ResetAnswer = 'resetAnswer',
  GetPreviousAnswer = 'getPreviousAnswer',
  SetPreviousAnswers = 'setPreviousAnswers',
}

export type PreviousAnswersType = {
  [key: string]: AnswerModel;
};

export type HandleAnswersAction = {
  type: HandleAnswersActions;
  payload?: AnswerModel | string | PreviousAnswersType;
};

export type SubmitAnswerFn = (currentPage: string) => Promise<UserQuestionnaireType>;

export type HandleAnswersState = {
  answer: AnswerModel | null;
  previousAnswers: PreviousAnswersType;
  isAnswered: boolean;
};

export type useHandleActionResponse = {
  answersDispatch: Dispatch<HandleAnswersAction>;
  state: HandleAnswersState;
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
