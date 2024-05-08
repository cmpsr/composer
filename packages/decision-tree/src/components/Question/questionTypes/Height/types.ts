import { QuestionBase } from '@components/Question/types';

type Measurement = {
  placeholder: string;
  trailingMask: string;
};

export interface HeightQuestion extends QuestionBase {
  feet: Measurement;
  inches: Measurement;
  type: 'height';
}
