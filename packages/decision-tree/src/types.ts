import { AnswerModel } from '@hooks';
import { QuestionType } from './components/Question';
import { RenderSectionIntroType } from '@components/Question/questionTypes';

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
  renderSectionIntro?: RenderSectionIntroType;
  backOnFirstQuestion: () => void;
};

export type Steps = Array<{ id: string; name: string }>;

export { AnswerModel };
