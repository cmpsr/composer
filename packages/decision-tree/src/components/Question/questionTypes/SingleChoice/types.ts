import { QuestionBase } from '@components/Question/types';
import { AnswerModel } from '@hooks';

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

export type SingleChoiceProps = {
  data: SingleChoiceQuestion;
  defaultValue?: SingleChoiceAnswer;
  saveAnswer: (payload: AnswerModel) => void;
};
