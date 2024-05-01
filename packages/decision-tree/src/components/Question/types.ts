import { type Dispatch } from 'react';
import {
  HeightQuestion,
  NumericQuestion,
  SingleChoiceQuestion,
  MultipleChoiceQuestion,
  HeightAnswer,
} from './questionTypes';
import { HandleAnswersAction, PaginationAction, SubmitAnswerFn } from '@hooks';
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
