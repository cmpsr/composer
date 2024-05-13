import { QuestionBase, QuestionProps } from '@components/Question/types';

type label = {
  id: string;
  label: string;
  description?: string;
};

export interface MultipleChoiceQuestion extends QuestionBase {
  options: label[];
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
