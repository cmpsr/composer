import { QuestionBase, QuestionProps } from '@components/Question/types';

type measurement = {
  placeholder: string;
  trailingMask: string;
};

export interface HeightQuestion extends QuestionBase {
  feet: measurement;
  inches: measurement;
  type: 'height';
}

export type HeightAnswer = {
  type: 'height';
  feet: string;
  inches: string;
};

export interface HeightProps extends QuestionProps {
  data: HeightQuestion;
  defaultValue?: HeightAnswer | null;
}
