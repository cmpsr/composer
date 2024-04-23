import { QuestionBase } from '../../types';

type Input = {
  id: string | number;
  placeholder: string;
  trailingMask: string;
};

export interface NumericQuestion extends QuestionBase {
  inputs: Input[];
  type: 'numeric';
}
