import { QuestionBase } from '@components/Question/types';

export interface SectionIntroQuestion extends QuestionBase {
  orderNumber: string;
  description: string;
  type: 'sectionIntro';
}
