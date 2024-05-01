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

export const DecisionTree: FC<DecisionTreeProps> & DecisionTreeStaticMembers = ({ questionnaire, callback }) => {
  const steps: Steps = questionnaire.sections.map(({ id, name }) => ({ id, name }));
  const initialState = { currentQuestion: questionnaire.nextQuestionId, currentSection: questionnaire.nextSectionId };

  const { state: answerState, answersDispatch, submitAnswer } = useHandleAnswers(callback);
  const {
    state: { currentQuestion, currentSection },
    paginationDispatch,
    activeStep,
    isBackDisabled,
  } = usePagination({ steps, initialState, answersDispatch });

  const section = questionnaire.sections.find((section) => section.id == currentSection);
  const question = section.questions.find((question) => question.id == currentQuestion);

  return (
    <DecisionTree.Container>
      <DecisionTree.Stepper steps={steps} activeStep={activeStep} />
      <Question data={question} answersDispatch={answersDispatch} />
      <DecisionTree.NavigationBar
        isBackDisabled={isBackDisabled}
        isNextDisabled={answerState.answer === null}
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
