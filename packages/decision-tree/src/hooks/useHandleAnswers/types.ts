import { AnswerType, AnswersType } from '@components/Question';
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
  state: { answer: AnswerType; previousAnswers: AnswersType };
  submitAnswer: SubmitAnswerFn;
  iDontKnowAnswer: SubmitAnswerFn;
};

type singleChoiceAnswer = {
  type: 'singleChoice';
  value: string;
};

type multipleChoiceAnswer = {
  type: 'multipleChoice';
  values: Array<string>;
};

type numericAnswer = {
  type: 'numeric';
  value: number;
};

type heightAnswer = {
  type: 'height';
  feet: number;
  inches: number;
};

type iDontKnowAnswer = {
  type: 'singleChoice';
};

export type AnswerModel = singleChoiceAnswer | multipleChoiceAnswer | numericAnswer | heightAnswer | iDontKnowAnswer;

const answerMap = {
  numeric: (type, value) => ({ type, value }),
  singleChoice: (type, value) => ({ type, value }),
  multipleChoice: (type, value) => ({ type, values: value }),
  height: (type, { feet, inches }) => ({ type, feet, inches }),
  iDontKnow: (type) => ({ type }),
};

export const createAnswer = (type: string, value: AnswerType = null): AnswerModel => {
  return answerMap[type](type, value);
};
