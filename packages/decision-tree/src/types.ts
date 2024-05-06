import { FC } from 'react';
import { BoxProps } from '@cmpsr/components';
import { QuestionType } from './components/Question';

export type UseSetupCallbackCB = (questionId: string, value: string) => Promise<QuestionnaireType>;

export type SaveAnswerType = (submittedAnswer: string | object) => void;

export type SectionType = {
  id: string;
  name: string;
  questions: Array<QuestionType>;
};

export type QuestionnaireType = {
  version: number;
  sections: Array<SectionType>;
  nextQuestionId: string;
  nextSectionId: string;
  answers: any;
};

export type DecisionTreeProps = {
  questionnaire: QuestionnaireType;
  callback: UseSetupCallbackCB;
};

export interface DecisionTreeStaticMembers {
  Container: FC<BoxProps>;
}

export type Steps = Array<{ id: string; name: string }>;
