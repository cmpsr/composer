import { QuestionBase } from '../../types';

type Choice = {
  id: string | number;
  label: string;
  subLabel: string;
};

export interface BooleanQuestion extends QuestionBase {
  choices: Choice[];
  type: 'boolean';
}
