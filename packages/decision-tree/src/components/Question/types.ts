import { type Dispatch } from 'react';
import {
  HeightQuestion,
  NumericQuestion,
  SingleChoiceQuestion,
  MultipleChoiceQuestion,
  HeightAnswer,
} from './questionTypes';
import { HandleAnswersAction, PaginationAction, SubmitAnswerFn } from '@hooks';

export interface QuestionBase {
  id: string;
  type: 'numeric' | 'singleChoice' | 'multipleChoice' | 'height';
  skippable?: boolean;
  question: string;
  tooltip: string;
}

export type QuestionType = HeightQuestion | NumericQuestion | SingleChoiceQuestion | MultipleChoiceQuestion;

export type AnswerType = string | Array<string> | HeightAnswer | null;

export type AnswersType = {
  [key: string]: AnswerType;
};

export type QuestionProps = {
  data: QuestionType;
  answersDispatch: Dispatch<HandleAnswersAction>;
  defaultValue?: AnswerType | null;
  iDontKnowAnswer: SubmitAnswerFn;
  paginationDispatch: Dispatch<PaginationAction>;
};
