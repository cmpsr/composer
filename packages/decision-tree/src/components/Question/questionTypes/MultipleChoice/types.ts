import { QuestionBase } from '@components/Question/types';
import { AnswerModel } from '@hooks';

type Option = {
  id: string;
  label: string;
  description?: string;
  type?: 'none';
};

export interface MultipleChoiceQuestion extends QuestionBase {
  options: Array<Option>;
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
