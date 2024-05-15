import { QuestionBase, QuestionProps } from '@components/Question/types';

export interface NumericQuestion extends QuestionBase {
  placeholder: string;
  trailingMask: string;
  type: 'numeric';
}

export type NumericAnswer = {
  type: 'numeric';
  value: number;
};

export interface NumericProps extends QuestionProps {
  data: NumericQuestion;
  defaultValue?: NumericAnswer;
}
