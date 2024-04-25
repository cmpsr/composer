import { QuestionBase } from '@components/Question/types';

type Choice = {
  id: string;
  label: string;
  subLabel: string;
};

export interface SingleChoiceQuestion extends QuestionBase {
  choices: Choice[];
  type: 'singleChoice';
}
