import { FC } from 'react';
import { AnswerModel } from '@hooks';
import { BoxProps } from '@cmpsr/components';
import { QuestionType } from './components/Question';
import { StepBarProps } from '@components/StepBar/types';
import { NavigationBarProps } from '@components/NavigationBar/types';

export type UseSetupCallbackCB = (questionId: string, answer: AnswerModel) => Promise<any>;

export type SaveAnswerType = (submittedAnswer: string | object) => void;

export type SectionType = {
  id: string;
  name: string;
  description: string;
  questions: Array<QuestionType>;
};

export type QuestionnaireType = {
  version: number;
  sections: Array<SectionType>;
  nextQuestion: {
    questionId: string;
    sectionId: string;
  };
  answers: any;
};

export type DecisionTreeProps = {
  questionnaire: QuestionnaireType;
  callback: UseSetupCallbackCB;
};

export interface DecisionTreeStaticMembers {
  Container: FC<BoxProps>;
  Stepper: FC<StepBarProps>;
  NavigationBar: FC<NavigationBarProps>;
}

export type Steps = Array<{ id: string; name: string }>;
