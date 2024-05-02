import { QuestionBase, QuestionProps } from '@components/Question/types';

type Choice = {
  id: string;
  label: string;
  subLabel: string;
};

export interface SingleChoiceQuestion extends QuestionBase {
  choices: Choice[];
  type: 'singleChoice';
}

export type SingleChoiceAnswer = {
  type: 'singleChoice';
  value: string;
};

export interface SingleChoiceProps extends QuestionProps {
  data: SingleChoiceQuestion;
  defaultValue?: SingleChoiceAnswer | null;
}
