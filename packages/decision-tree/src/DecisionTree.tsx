import React, { FC } from 'react';
import { StepBar } from './components/StepBar';
import { NavigationBar } from './components/NavigationBar';
import { Question } from './components/Question';
import { usePagination } from './hooks';
import { DecisionTreeProps, DecisionTreeStaticMembers, Steps } from './types';
import { Box, BoxProps } from '@cmpsr/components';
import { useHandleAnswers } from './hooks';
import { NavigationBarProps } from '@components/NavigationBar/types';
import { StepBarProps } from '@components/StepBar/types';

export const DecisionTree: FC<DecisionTreeProps> & DecisionTreeStaticMembers = ({ questionnaire, callback }) => {
  const steps: Steps = questionnaire.sections.map(({ id, name }) => ({ id, name }));
  const initialState = {
    currentQuestion: questionnaire.nextQuestion.questionId,
    currentSection: questionnaire.nextQuestion.sectionId,
  };

  const { state: answerState, answersDispatch, submitAnswer, iDontKnowAnswer } = useHandleAnswers(callback);
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
      <Question
        data={question}
        answersDispatch={answersDispatch}
        paginationDispatch={paginationDispatch}
        defaultValue={answerState.answer}
        iDontKnowAnswer={iDontKnowAnswer}
      />
      <DecisionTree.NavigationBar
        isBackDisabled={isBackDisabled}
        isNextDisabled={answerState.answer === null}
        dispatch={paginationDispatch}
        submitAnswer={() => submitAnswer(currentQuestion)}
      />
    </DecisionTree.Container>
  );
};

const DecisionTreeContainer = (props: BoxProps) => <Box {...props} />;
const Navigation = (props: NavigationBarProps) => <NavigationBar {...props} />;
const Stepper = (props: StepBarProps) => <StepBar {...props} />;

DecisionTree.Container = DecisionTreeContainer;
DecisionTree.NavigationBar = Navigation;
DecisionTree.Stepper = Stepper;
