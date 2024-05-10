import { FC } from 'react';
import { AnswerModel } from '@hooks';
import { QuestionProps, QuestionType } from './components/Question';
import { StepBarProps } from '@components/StepBar/types';
import { CallToActionsProps } from '@components/CallToActions/types';

export type UseSetupCallbackCB = (questionId: string, answer: AnswerModel) => Promise<UserQuestionnaireType | null>;

export type SaveAnswerType = (submittedAnswer: string | object) => void;

export type SectionType = {
  id: string;
  name: string;
  description: string;
  questions: Array<QuestionType>;
};

type nextQuestion = {
  questionId: string;
  sectionId: string;
};

export type QuestionnaireType = {
  version: number;
  sections: Array<SectionType>;
};

export type UserQuestionnaireType = {
  nextQuestion: nextQuestion;
  answers: any;
  questionnaire: QuestionnaireType;
};

export type DecisionTreeProps = {
  userQuestionnaire: UserQuestionnaireType;
  callback: UseSetupCallbackCB;
  firstQuestion?: nextQuestion;
};

export interface DecisionTreeStaticMembers {
  Stepper: FC<StepBarProps>;
  SectionIntro: FC<QuestionProps>;
  CallToActions: FC<CallToActionsProps>;
}

export type Steps = Array<{ id: string; name: string }>;

export { AnswerModel };
