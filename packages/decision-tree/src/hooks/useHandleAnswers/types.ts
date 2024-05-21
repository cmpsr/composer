import {
  HeightAnswer,
  MultipleChoiceAnswer,
  NumericAnswer,
  SingleChoiceAnswer,
  DateAnswer,
} from '@components/Question/questionTypes';
import { AnsweredQuestionsType } from '@hooks';
import { UserQuestionnaireType } from '@types';
import { type Dispatch } from 'react';

export enum HandleAnswersActions {
  SaveAnswer = 'saveAnswer',
  ResetAnswer = 'resetAnswer',
  GetPreviousAnswer = 'getPreviousAnswer',
  SetPreviousAnswers = 'setPreviousAnswers',
}

export type HandleAnswersAction = {
  type: HandleAnswersActions;
  payload?: AnswerModel | string | AnsweredQuestionsType;
};

export type SubmitAnswerFn = (currentPage: string) => Promise<UserQuestionnaireType>;

export type HandleAnswersState = {
  answer: AnswerModel | null;
  previousAnswers: AnsweredQuestionsType;
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
  | DateAnswer
  | iDontKnowAnswerType;

export const iDontKnowAnswer: iDontKnowAnswerType = { type: 'iDontKnow' };
