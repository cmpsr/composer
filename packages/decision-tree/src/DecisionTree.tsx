import React, { FC } from 'react';
import { StepBar } from './components/StepBar';
import { CallToActions } from './components/CallToActions';
import { Question } from './components/Question';
import { usePagination, useHandleAnswers } from './hooks';
import { DecisionTreeProps, Steps } from './types';
import { Box } from '@cmpsr/components';

export const DecisionTree: FC<DecisionTreeProps> = ({ questionnaire, callback }) => {
  const steps: Steps = questionnaire.sections.map(({ id, name }) => ({ id, name }));
  const initialState = { currentQuestion: questionnaire.nextQuestionId, currentSection: questionnaire.nextSectionId };

  const { state: answerState, answersDispatch, submitAnswer } = useHandleAnswers(callback);
  const {
    state: { currentQuestion, currentSection },
    paginationDispatch,
    activeStep,
    isBackDisabled,
    nextQuestion,
  } = usePagination({ steps, initialState, answersDispatch, submitAnswer });

  const section = questionnaire.sections.find((section) => section.id == currentSection);
  const question = section.questions.find((question) => question.id == currentQuestion);

  return (
    <Box columnGap="0.5rem">
      <StepBar steps={steps} activeStep={activeStep} />
      <Question data={question} answersDispatch={answersDispatch} />
      <CallToActions
        isBackDisabled={isBackDisabled}
        isNextDisabled={answerState.answer === null}
        dispatch={paginationDispatch}
        nextQuestion={nextQuestion}
      />
    </Box>
  );
};
