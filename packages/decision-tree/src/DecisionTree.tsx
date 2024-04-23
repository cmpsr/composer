import React, { FC } from 'react';
import { StepBar } from './components/StepBar';
import { NavigationBar } from './components/NavigationBar';
import { Question } from './components/Question';
import { usePagination } from './hooks';
import { DecisionTreeProps, DecisionTreeStaticMembers } from './types';
import { Box, BoxProps } from '@cmpsr/components';
import { useSetupCallback } from './hooks';

export const DecisionTree: FC<DecisionTreeProps> & DecisionTreeStaticMembers = ({ steps, questions, callback }) => {
  const { state, dispatch, activeStep } = usePagination(questions, steps.length);
  const { submitAnswer } = useSetupCallback({ callback });

  return (
    <DecisionTree.Container>
      <StepBar steps={steps} activeStep={activeStep} />
      <Question data={questions[state.currentQuestion]} submitAnswer={submitAnswer} />
      <NavigationBar lastQuestion={questions.length - 1} currentQuestion={state.currentQuestion} dispatch={dispatch} />
    </DecisionTree.Container>
  );
};

const DecisionTreeContainer = (props: BoxProps) => <Box columnGap="0.5rem" {...props} />;

DecisionTree.Container = DecisionTreeContainer;
