import { AnswerModel } from '@hooks';
import { QuestionType } from './components/Question';
import { RenderSectionIntroType } from '@components/Question/questionTypes';

export type UseSetupCallbackCB = (questionId: string, answer: AnswerModel) => Promise<QuestionnaireType>;

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
  nextQuestion: nextQuestion;
  answers: any;
};

export type DecisionTreeProps = {
  questionnaire: QuestionnaireType;
  callback: UseSetupCallbackCB;
  firstQuestion?: nextQuestion;
  renderSectionIntro?: RenderSectionIntroType;
};

export type Steps = Array<{ id: string; name: string }>;
