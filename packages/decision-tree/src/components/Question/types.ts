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
import { HandleAnswersAction, PaginationAction, SubmitAnswerFn } from '@hooks';
import { SectionIntroQuestion } from './questionTypes/SectionIntro';

export interface QuestionBase {
  id: string;
  type: 'numeric' | 'singleChoice' | 'multipleChoice' | 'height' | 'sectionIntro';
  skippable?: boolean;
  question: string;
  tooltip?: string | null;
  explanation: string;
}

export type QuestionType =
  | HeightQuestion
  | NumericQuestion
  | SingleChoiceQuestion
  | MultipleChoiceQuestion
  | SectionIntroQuestion;

export type AnswerType = SingleChoiceAnswer | NumericAnswer | MultipleChoiceAnswer | HeightAnswer;

export type AnswersType = {
  [key: string]: AnswerType;
};

export interface QuestionProps {
  data: QuestionType;
  answersDispatch: Dispatch<HandleAnswersAction>;
  defaultValue?: AnswerType | null;
  submitIDKAnswer: SubmitAnswerFn;
  paginationDispatch: Dispatch<PaginationAction>;
}
