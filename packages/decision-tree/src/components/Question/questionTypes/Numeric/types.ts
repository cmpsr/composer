import { QuestionBase } from '@components/Question/types';
import { AnswerModel } from '@hooks';

export interface NumericQuestion extends QuestionBase {
  placeholder: string;
  trailingMask: string;
  type: 'number';
}

export type NumericAnswer = {
  type: 'number';
  value: number;
};

export type NumericProps = {
  data: NumericQuestion;
  defaultValue?: NumericAnswer;
  saveAnswer: (payload: AnswerModel) => void;
};
