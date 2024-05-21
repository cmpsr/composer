import { QuestionBase } from '@components/Question/types';
import { AnswerModel } from '@hooks';

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

export type MultipleChoiceProps = {
  data: MultipleChoiceQuestion;
  defaultValue?: MultipleChoiceAnswer;
  saveAnswer: (payload: AnswerModel) => void;
};
