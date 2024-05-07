import { type Dispatch } from 'react';
import { HeightQuestion, NumericQuestion, SingleChoiceQuestion, MultipleChoiceQuestion } from './questionTypes';
import { AnswerModel, HandleAnswersAction, PaginationAction, SubmitAnswerFn } from '@hooks';
import { SectionIntroQuestion } from './questionTypes/SectionIntro';

export interface QuestionBase {
  id: string;
  type: 'numeric' | 'singleChoice' | 'multipleChoice' | 'height' | 'sectionIntro';
  skippable?: boolean;
  question: string;
  tooltip?: string;
}

export type QuestionType =
  | HeightQuestion
  | NumericQuestion
  | SingleChoiceQuestion
  | MultipleChoiceQuestion
  | SectionIntroQuestion;

export type AnswersType = {
  [key: string]: AnswerModel;
};

export interface QuestionProps {
  data: QuestionType;
  answersDispatch: Dispatch<HandleAnswersAction>;
  defaultValue?: AnswerModel | null;
  submitIDKAnswer: SubmitAnswerFn;
  paginationDispatch: Dispatch<PaginationAction>;
}
