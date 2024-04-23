import { QuestionBase } from '../../types';

type Choice = {
  id: string | number;
  label: string;
  subLabel: string;
};

export interface MultipleChoiceQuestion extends QuestionBase {
  choices: Choice[];
  type: 'multipleChoice';
}
