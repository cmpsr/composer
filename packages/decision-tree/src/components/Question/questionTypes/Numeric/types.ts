import { QuestionBase, QuestionProps } from '@components/Question/types';

export interface NumericQuestion extends QuestionBase {
  placeholder: string;
  trailingMask: string;
  type: 'number';
}

export type NumericAnswer = {
  type: 'number';
  value: number;
};

export interface NumericProps extends QuestionProps {
  data: NumericQuestion;
  defaultValue?: NumericAnswer;
}
