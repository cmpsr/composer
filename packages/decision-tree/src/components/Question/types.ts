import { type Dispatch } from 'react';
import { HeightQuestion, NumericQuestion, SingleChoiceQuestion, MultipleChoiceQuestion } from './questionTypes';
import { RenderSectionIntroType, SectionIntroQuestion } from './questionTypes/SectionIntro';
import { AnswerModel, PaginationAction } from '@hooks';
import { QuestionnaireType } from '@types';

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
  saveAnswer: (payload: AnswerModel) => void;
  defaultValue?: AnswerModel;
  submitIDKAnswer: () => Promise<QuestionnaireType>;
  paginationDispatch: Dispatch<PaginationAction>;
  renderSectionIntro?: RenderSectionIntroType;
}
