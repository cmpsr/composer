import { QuestionBase } from '@components/Question/types';
import { AnswerModel } from '@hooks';

export interface DateQuestion extends QuestionBase {
  placeholder: string;
  type: 'date';
}

export type DateAnswer = {
  type: 'date';
  value: string;
};

export type DateProps = {
  data: DateQuestion;
  defaultValue?: DateAnswer;
  saveAnswer: (payload: AnswerModel) => void;
};

export const uiDateFormat = 'MM/dd/yyyy';
export const isoDateFormat = 'yyyy-MM-dd';
