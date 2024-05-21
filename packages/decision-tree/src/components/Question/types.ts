import { type Dispatch } from 'react';
import { HeightQuestion, NumericQuestion, SingleChoiceQuestion, MultipleChoiceQuestion } from './questionTypes';
import { RenderSectionIntroType, SectionIntroQuestion } from './questionTypes/SectionIntro';
import { AnswerModel, PaginationAction } from '@hooks';
import { UserQuestionnaireType } from '@types';

export interface QuestionBase {
  id: string;
  type: 'number' | 'singleChoice' | 'multipleChoice' | 'height' | 'sectionIntro' | 'date';
  description?: string;
  skippable?: boolean;
  label: string;
  whyWeAskExplanation?: string;
}

export type QuestionType =
  | HeightQuestion
  | NumericQuestion
  | SingleChoiceQuestion
  | MultipleChoiceQuestion
  | SectionIntroQuestion;

export interface QuestionProps {
  data: QuestionType;
  saveAnswer: (payload: AnswerModel) => void;
  defaultValue?: AnswerModel;
  submitIDKAnswer: () => Promise<UserQuestionnaireType>;
  paginationDispatch: Dispatch<PaginationAction>;
  renderSectionIntro?: RenderSectionIntroType;
}
