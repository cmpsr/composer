import { QuestionBase } from '@components/Question/types';
import { AnswerModel } from '@hooks';

type Measurement = {
  placeholder: string;
  trailingMask: string;
};

export interface HeightQuestion extends QuestionBase {
  feet: Measurement;
  inches: Measurement;
  type: 'height';
}

export type HeightAnswer = {
  type: 'height';
  feet: number;
  inches: number;
};

export type HeightProps = {
  data: HeightQuestion;
  defaultValue?: HeightAnswer;
  saveAnswer: (payload: AnswerModel) => void;
};
