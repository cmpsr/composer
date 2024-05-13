import { type Dispatch } from 'react';
import {
  HeightQuestion,
  NumericQuestion,
  SingleChoiceQuestion,
  MultipleChoiceQuestion,
  HeightAnswer,
  SingleChoiceAnswer,
  NumericAnswer,
  MultipleChoiceAnswer,
} from './questionTypes';
import { HandleAnswersAction, PaginationAction } from '@hooks';
import { QuestionnaireType } from '@types';

export interface QuestionBase {
  id: string;
  type: 'numeric' | 'singleChoice' | 'multipleChoice' | 'height';
  skippable?: boolean;
  question: string;
  tooltip: string;
}

export type QuestionType = HeightQuestion | NumericQuestion | SingleChoiceQuestion | MultipleChoiceQuestion;

export type AnswerType = SingleChoiceAnswer | NumericAnswer | MultipleChoiceAnswer | HeightAnswer;

export type AnswersType = {
  [key: string]: AnswerType;
};

export interface QuestionProps {
  data: QuestionType;
  answersDispatch: Dispatch<HandleAnswersAction>;
  defaultValue?: AnswerType;
  submitIDKAnswer: () => Promise<QuestionnaireType>;
  paginationDispatch: Dispatch<PaginationAction>;
}
