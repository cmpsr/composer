import React, { FC } from 'react';
import { StepBar } from './components/StepBar';
import { CallToActions } from './components/CallToActions';
import { Question } from './components/Question';
import { usePagination, useHandleAnswers, PaginationActions } from './hooks';
import { DecisionTreeProps, DecisionTreeStaticMembers, Steps } from './types';
import { Flex } from '@cmpsr/components';
import { CallToActionsProps } from '@components/CallToActions/types';
import { StepBarProps } from '@components/StepBar/types';
import { normalizeQuestionnaire } from './DecisionTree.normalizer';
import { SectionIntro } from './components/Question/questionTypes/SectionIntro';

export const DecisionTree: FC<DecisionTreeProps> & DecisionTreeStaticMembers = ({
  questionnaire,
  callback,
  firstQuestion,
}) => {
  const normalizedQuestionnaire = normalizeQuestionnaire(questionnaire);
  const steps: Steps = normalizedQuestionnaire.sections.map(({ id, name }) => ({ id, name }));
  const initialState = firstQuestion ?? {
    questionId: normalizedQuestionnaire.nextQuestion.questionId,
    sectionId: normalizedQuestionnaire.nextQuestion.sectionId,
  };

  const { state: answerState, answersDispatch, submitAnswer, submitIDKAnswer } = useHandleAnswers(callback);
  const {
    state: { currentQuestion, currentSection },
    paginationDispatch,
    activeStep,
    isBackDisabled,
    goToNextQuestion,
  } = usePagination({ steps, initialState, answersDispatch, submitAnswer });

  const section = normalizedQuestionnaire.sections.find((section) => section.id == currentSection);
  const question = section.questions.find((question) => question.id == currentQuestion);

  return (
    <Flex flexDirection="column" height="100%">
      <DecisionTree.Stepper steps={steps} activeStep={activeStep} />
      <Question
        data={question}
        answersDispatch={answersDispatch}
        paginationDispatch={paginationDispatch}
        defaultValue={answerState.answer}
        submitIDKAnswer={submitIDKAnswer}
      />
      <DecisionTree.CallToActions
        isBackDisabled={isBackDisabled}
        isNextDisabled={!answerState.isAnswered && question.type !== 'sectionIntro'}
        goToPreviousQuestion={() => paginationDispatch({ type: PaginationActions.PreviousQuestion })}
        goToNextQuestion={goToNextQuestion}
      />
    </Flex>
  );
};

const Navigation = (props: CallToActionsProps) => <CallToActions {...props} />;
const Stepper = (props: StepBarProps) => <StepBar {...props} />;

DecisionTree.CallToActions = Navigation;
DecisionTree.Stepper = Stepper;
DecisionTree.SectionIntro = SectionIntro;

export const CustomizedSectionIntro = DecisionTree.SectionIntro;
