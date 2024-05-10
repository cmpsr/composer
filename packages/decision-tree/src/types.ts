import { FC } from 'react';
import { QuestionType } from './components/Question';
import { StepBarProps } from '@components/StepBar/types';
import { CallToActionsProps } from '@components/CallToActions/types';

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
  Stepper: FC<StepBarProps>;
  CallToActions: FC<CallToActionsProps>;
}

export type Steps = Array<{ id: string; name: string }>;
