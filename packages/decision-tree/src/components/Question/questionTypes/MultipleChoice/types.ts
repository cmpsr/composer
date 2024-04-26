import { QuestionBase } from '@components/Question/types';

type Choice = {
  id: string;
  label: string;
  subLabel: string;
};

export interface MultipleChoiceQuestion extends QuestionBase {
  choices: Choice[];
  type: 'multipleChoice';
}
