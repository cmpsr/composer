import { QuestionBase, QuestionProps } from '@components/Question/types';

type Option = {
  id: string;
  label: string;
  description?: string;
};

export interface SingleChoiceQuestion extends QuestionBase {
  options: Option[];
  type: 'singleChoice';
}

export type SingleChoiceAnswer = {
  type: 'singleChoice';
  value: string;
};

export interface SingleChoiceProps extends QuestionProps {
  data: SingleChoiceQuestion;
  defaultValue?: SingleChoiceAnswer;
}
