import { useReducer, useState, type Reducer } from 'react';
import { useSteps } from '@cmpsr/components';
import { PaginationResponse, PaginationState, PaginationAction, PaginationActions, PaginationProps } from './types';
import { HandleAnswersActions } from '@hooks';
import { sectionIntroId } from '../../DecisionTree.normalizer';

export const usePagination = ({ steps, initialState, answersDispatch }: PaginationProps): PaginationResponse => {
  const firstStep = steps.findIndex(({ id }) => id === initialState.sectionId) ?? 0;
  const { activeStep, setActiveStep } = useSteps({
    index: firstStep,
    count: steps.length,
  });
  const [pageHistory, setPageHistory] = useState<Array<PaginationState>>([]);
  const [nextQuestionOverride, setNextQuestionOverride] = useState(initialState);

  const setNextQuestion = (nextQuestion, answers) => {
    const iSection = steps.findIndex((step) => step.id == nextQuestion.sectionId);
    if (answers) answersDispatch({ type: HandleAnswersActions.SetPreviousAnswers, payload: answers });
    answersDispatch({ type: HandleAnswersActions.ResetAnswer });
    answersDispatch({ type: HandleAnswersActions.GetPreviousAnswer, payload: nextQuestion.questionId });
    setActiveStep(iSection);

    return {
      currentQuestion: nextQuestion.questionId,
      currentSection: nextQuestion.sectionId,
    };
  };

  const paginationReducer = (state: PaginationState, action: PaginationAction) => {
    const actionMap = {
      [PaginationActions.PreviousQuestion]: () => {
        const { currentQuestion, currentSection, step } = pageHistory.at(-1);
        if (currentQuestion.includes(sectionIntroId))
          setNextQuestionOverride({ questionId: state.currentQuestion, sectionId: state.currentSection });
        if (!currentQuestion.includes(sectionIntroId)) setNextQuestionOverride(null);
        answersDispatch({ type: HandleAnswersActions.GetPreviousAnswer, payload: currentQuestion });
        setActiveStep(step);
        setPageHistory(pageHistory.slice(0, -1));

        return {
          currentQuestion,
          currentSection,
        };
      },
      [PaginationActions.NextQuestion]: ({ nextQuestion, answers }) => {
        setPageHistory([...pageHistory, { ...state, step: activeStep }]);

        if (nextQuestionOverride !== null) {
          const nextQuestionState = setNextQuestion(nextQuestionOverride, null);
          setNextQuestionOverride(null);
          return nextQuestionState;
        }

        if (nextQuestion.sectionId !== state.currentSection) {
          setNextQuestionOverride(nextQuestion);
          const sectionIntroQuestion = {
            questionId: `${nextQuestion.sectionId}${sectionIntroId}`,
            sectionId: nextQuestion.sectionId,
          };
          return setNextQuestion(sectionIntroQuestion, answers);
        }

        return setNextQuestion(nextQuestion, answers);
      },
    };
    return actionMap[action.type](action.payload);
  };

  const firstIntroState = {
    currentQuestion: `${initialState.sectionId}${sectionIntroId}`,
    currentSection: initialState.sectionId,
  };

  const [state, dispatch] = useReducer<Reducer<PaginationState, PaginationAction>>(paginationReducer, firstIntroState);

  return { state, activeStep, paginationDispatch: dispatch, isBackDisabled: pageHistory.length < 1 };
};
