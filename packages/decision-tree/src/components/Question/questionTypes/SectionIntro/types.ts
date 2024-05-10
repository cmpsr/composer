import { BoxProps, TextProps } from '@cmpsr/components';
import { QuestionBase, QuestionProps } from '@components/Question/types';

export interface SectionIntroQuestion extends QuestionBase {
  orderNumber: string;
  description: string;
  type: 'sectionIntro';
}

export interface SectionIntroProps extends QuestionProps {
  data: SectionIntroQuestion;
  textProps: TextProps;
  boxProps: BoxProps;
}
