import React, { FC } from 'react';
import { StepBar } from './components/StepBar';
import { NavigationBar } from './components/NavigationBar';
import { Question } from './components/Question';
import { usePagination } from './hooks';
import { DecisionTreeProps, DecisionTreeStaticMembers, Steps } from './types';
import { Flex, FlexProps } from '@cmpsr/components';
import { useHandleAnswers } from './hooks';
import { NavigationBarProps } from '@components/NavigationBar/types';
import { StepBarProps } from '@components/StepBar/types';
import { normalizeQuestionnaire } from './DecisionTree.normalizer';
import { SectionIntro } from './components/Question/questionTypes/SectionIntro';

export const DecisionTree: FC<DecisionTreeProps> & DecisionTreeStaticMembers = ({ questionnaire, callback }) => {
  const normalizedQuestionnaire = normalizeQuestionnaire(questionnaire);
  const steps: Steps = normalizedQuestionnaire.sections.map(({ id, name }) => ({ id, name }));
  const initialState = {
    questionId: normalizedQuestionnaire.nextQuestion.questionId,
    sectionId: normalizedQuestionnaire.nextQuestion.sectionId,
  };

  const { state: answerState, answersDispatch, submitAnswer, iDontKnowAnswer } = useHandleAnswers(callback);
  const {
    state: { currentQuestion, currentSection },
    paginationDispatch,
    activeStep,
    isBackDisabled,
  } = usePagination({ steps, initialState, answersDispatch });

  const section = normalizedQuestionnaire.sections.find((section) => section.id == currentSection);
  const question = section.questions.find((question) => question.id == currentQuestion);

  return (
    <DecisionTree.Container>
      <DecisionTree.Stepper steps={steps} activeStep={activeStep} />
      <Question
        data={question}
        answersDispatch={answersDispatch}
        paginationDispatch={paginationDispatch}
        defaultValue={answerState.answer}
        iDontKnowAnswer={iDontKnowAnswer}
      />
      <DecisionTree.NavigationBar
        isBackDisabled={isBackDisabled}
        isNextDisabled={answerState.answer === null && question.type !== 'sectionIntro'}
        dispatch={paginationDispatch}
        submitAnswer={() => submitAnswer(currentQuestion)}
      />
    </DecisionTree.Container>
  );
};

const DecisionTreeContainer = (props: FlexProps) => <Flex flexDirection="column" height="100%" {...props} />;
const Navigation = (props: NavigationBarProps) => <NavigationBar {...props} />;
const Stepper = (props: StepBarProps) => <StepBar {...props} />;

DecisionTree.Container = DecisionTreeContainer;
DecisionTree.NavigationBar = Navigation;
DecisionTree.Stepper = Stepper;
DecisionTree.SectionIntro = SectionIntro;

export const CustomizedSectionIntro = DecisionTree.SectionIntro;
