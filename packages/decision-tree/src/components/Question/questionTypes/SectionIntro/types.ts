import { QuestionBase, QuestionProps } from '@components/Question/types';
import { ReactNode } from 'react';

export interface SectionIntroQuestion extends QuestionBase {
  orderNumber: number;
  description: string;
  type: 'sectionIntro';
}

export type RenderSectionIntroType = (label: string, description: string, orderNumber: number) => ReactNode;

export interface SectionIntroProps extends QuestionProps {
  data: SectionIntroQuestion;
  renderSectionIntro?: RenderSectionIntroType;
}
