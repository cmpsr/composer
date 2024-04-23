import { BooleanQuestion, NumericQuestion, SingleChoiceQuestion, MultipleChoiceQuestion } from './questionTypes';
import { callbackFn } from 'src/types';

export interface QuestionBase {
  id: string;
  order: number;
  type: 'numeric' | 'singleChoice' | 'multipleChoice' | 'boolean';
  skippable?: boolean;
  question: string;
  tooltip: string;
}

export type QuestionProps = {
  data: BooleanQuestion | NumericQuestion | SingleChoiceQuestion | MultipleChoiceQuestion;
  submitAnswer: callbackFn;
};
