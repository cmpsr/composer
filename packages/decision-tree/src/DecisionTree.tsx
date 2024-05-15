import React, { FC } from 'react';
import { StepBar } from './components/StepBar';
import { CallToActions } from './components/CallToActions';
import { Question } from './components/Question';
import { usePagination, useHandleAnswers, PaginationActions } from './hooks';
import { DecisionTreeProps, Steps } from './types';
import { Flex } from '@cmpsr/components';
import { normalizeQuestionnaire } from './DecisionTree.normalizer';

export const DecisionTree: FC<DecisionTreeProps> = ({
  userQuestionnaire,
  callback,
  firstQuestion,
  renderSectionIntro,
  backOnFirstQuestion,
}) => {
  const normalizedQuestionnaire = normalizeQuestionnaire(userQuestionnaire.questionnaire);
  const steps: Steps = normalizedQuestionnaire.sections.map(({ id, name }) => ({ id, name }));
  const initialState = firstQuestion ?? {
    questionId: userQuestionnaire.nextQuestion.questionId,
    sectionId: userQuestionnaire.nextQuestion.sectionId,
  };

  const { state: answerState, answersDispatch, submitAnswer, submitIDKAnswer } = useHandleAnswers(callback);
  const {
    state: { currentQuestion, currentSection },
    paginationDispatch,
    activeStep,
    isBackDisabled,
    goToNextQuestion,
  } = usePagination({ steps, initialState, answersDispatch, submitAnswer, backOnFirstQuestion });

  const section = normalizedQuestionnaire.sections.find((section) => section.id == currentSection);
  const question = section.questions.find((question) => question.id == currentQuestion);

  return (
    <Flex flexDirection="column" height="100%">
      <StepBar steps={steps} activeStep={activeStep} />
      <Question
        data={question}
        answersDispatch={answersDispatch}
        paginationDispatch={paginationDispatch}
        defaultValue={answerState.answer}
        submitIDKAnswer={submitIDKAnswer}
        renderSectionIntro={renderSectionIntro}
      />
      <CallToActions
        isBackDisabled={isBackDisabled}
        isNextDisabled={!answerState.isAnswered && question.type !== 'sectionIntro'}
        goToPreviousQuestion={() => paginationDispatch({ type: PaginationActions.PreviousQuestion })}
        goToNextQuestion={goToNextQuestion}
      />
    </Flex>
  );
};
