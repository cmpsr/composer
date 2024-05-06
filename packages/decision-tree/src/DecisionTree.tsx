import React, { FC } from 'react';
import { StepBar } from './components/StepBar';
import { CallToActions } from './components/CallToActions';
import { Question } from './components/Question';
import { usePagination } from './hooks';
import { DecisionTreeProps, DecisionTreeStaticMembers, Steps } from './types';
import { Box, BoxProps } from '@cmpsr/components';
import { useHandleAnswers } from './hooks';

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
      <StepBar steps={steps} activeStep={activeStep} />
      <Question data={question} answersDispatch={answersDispatch} />
      <CallToActions
        isBackDisabled={isBackDisabled}
        isNextDisabled={answerState.answer === null}
        dispatch={paginationDispatch}
        submitAnswer={() => submitAnswer(currentQuestion)}
      />
    </DecisionTree.Container>
  );
};

const DecisionTreeContainer = (props: BoxProps) => <Box columnGap="0.5rem" {...props} />;

DecisionTree.Container = DecisionTreeContainer;
