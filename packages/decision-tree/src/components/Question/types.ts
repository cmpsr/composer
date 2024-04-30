import { type Dispatch } from 'react';
import { HeightQuestion, NumericQuestion, SingleChoiceQuestion, MultipleChoiceQuestion } from './questionTypes';
import { HandleAnswersAction } from '@hooks';

export interface QuestionBase {
  id: string;
  type: 'numeric' | 'singleChoice' | 'multipleChoice' | 'height';
  skippable?: boolean;
  question: string;
  tooltip: string;
}

export type QuestionType = HeightQuestion | NumericQuestion | SingleChoiceQuestion | MultipleChoiceQuestion;

export type QuestionProps = {
  data: QuestionType;
  answersDispatch: Dispatch<HandleAnswersAction>;
};
