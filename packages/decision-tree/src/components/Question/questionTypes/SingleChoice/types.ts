import { QuestionBase } from '@components/Question/types';
import { AnswerModel } from '@hooks';

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

export type SingleChoiceProps = {
  data: SingleChoiceQuestion;
  defaultValue?: SingleChoiceAnswer;
  saveAnswer: (payload: AnswerModel) => void;
};
