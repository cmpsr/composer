import { QuestionBase, QuestionProps } from '@components/Question/types';
import { ReactNode } from 'react';

export interface SectionIntroQuestion extends QuestionBase {
  orderNumber: string;
  description: string;
  type: 'sectionIntro';
}

export type RenderSectionIntroType = (label: string, description: string, orderNumber: string) => ReactNode;

export interface SectionIntroProps extends QuestionProps {
  data: SectionIntroQuestion;
  renderSectionIntro?: RenderSectionIntroType;
}
