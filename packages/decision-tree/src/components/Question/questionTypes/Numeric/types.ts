import { QuestionBase } from '@components/Question/types';

export interface NumericQuestion extends QuestionBase {
  placeholder: string;
  trailingMask: string;
  type: 'numeric';
}
