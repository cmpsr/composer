import { QuestionBase } from '@components/Question/types';
import { AnswerModel } from '@hooks';

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

export type MultipleChoiceProps = {
  data: MultipleChoiceQuestion;
  defaultValue?: MultipleChoiceAnswer;
  saveAnswer: (payload: AnswerModel) => void;
};
