import { QuestionBase } from '@components/Question/types';

type measurement = {
  placeholder: string;
  trailingMask: string;
};

export interface HeightQuestion extends QuestionBase {
  feet: measurement;
  inches: measurement;
  type: 'height';
}
