import { QuestionBase } from '@components/Question/types';
import { AnswerModel } from '@hooks';

export interface NumericQuestion extends QuestionBase {
  placeholder: string;
  trailingMask: string;
  type: 'numeric';
}

export type NumericAnswer = {
  type: 'numeric';
  value: number;
};

export type NumericProps = {
  data: NumericQuestion;
  defaultValue?: NumericAnswer;
  saveAnswer: (payload: AnswerModel) => void;
};
