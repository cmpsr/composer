import { QuestionBase, QuestionProps } from '@components/Question/types';

type Choice = {
  id: string;
  label: string;
  subLabel: string;
};

export interface MultipleChoiceQuestion extends QuestionBase {
  choices: Choice[];
  type: 'multipleChoice';
}

export type MultipleChoiceAnswer = {
  type: 'multipleChoice';
  values: Array<string>;
};

export interface MultipleChoiceProps extends QuestionProps {
  data: MultipleChoiceQuestion;
  defaultValue?: MultipleChoiceAnswer | null;
}
