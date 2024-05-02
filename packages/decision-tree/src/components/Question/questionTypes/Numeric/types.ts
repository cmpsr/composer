import { QuestionBase, QuestionProps } from '@components/Question/types';

export interface NumericQuestion extends QuestionBase {
  placeholder: string;
  trailingMask: string;
  type: 'numeric';
}

export type NumericAnswer = {
  type: 'numeric';
  value: string;
};

export interface NumericProps extends QuestionProps {
  data: NumericQuestion;
  defaultValue?: NumericAnswer | null;
}
