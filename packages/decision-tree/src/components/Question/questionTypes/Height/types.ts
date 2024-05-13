import { QuestionBase, QuestionProps } from '@components/Question/types';

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
  feet: string;
  inches: string;
};

export interface HeightProps extends QuestionProps {
  data: HeightQuestion;
  defaultValue?: HeightAnswer;
}
