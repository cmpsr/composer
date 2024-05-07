import { useReducer, useState, type Reducer } from 'react';
import { useSteps } from '@cmpsr/components';
import { PaginationResponse, PaginationState, PaginationAction, PaginationActions, PaginationProps } from './types';
import { HandleAnswersActions } from '@hooks';

export const usePagination = ({
  steps,
  initialState,
  answersDispatch,
  submitAnswer,
}: PaginationProps): PaginationResponse => {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });
  const [pageHistory, setPageHistory] = useState<Array<PaginationState>>([]);

  const paginationReducer = (state: PaginationState, { type, payload }: PaginationAction) => {
    switch (type) {
      case PaginationActions.PreviousQuestion: {
        const { currentQuestion, currentSection, step } = pageHistory.at(-1);
        answersDispatch({ type: HandleAnswersActions.GetPreviousAnswer, payload: currentQuestion });
        setActiveStep(step);
        setPageHistory(pageHistory.slice(0, -1));
        return {
          currentQuestion,
          currentSection,
        };
      }
      case PaginationActions.NextQuestion: {
        const { nextQuestion, answers } = payload;
        const iSection = steps.findIndex((step) => step.id == nextQuestion.sectionId);
        answersDispatch({ type: HandleAnswersActions.SetPreviousAnswers, payload: answers });
        answersDispatch({ type: HandleAnswersActions.ResetAnswer });
        setPageHistory([...pageHistory, { ...state, step: activeStep }]);
        setActiveStep(iSection);
        return {
          currentQuestion: nextQuestion.questionId,
          currentSection: nextQuestion.sectionId,
        };
      }
    }
  };

  const [state, dispatch] = useReducer<Reducer<PaginationState, PaginationAction>>(paginationReducer, initialState);

  const nextQuestion = async () => {
    const response = await submitAnswer(state.currentQuestion);
    if (!response?.nextQuestion?.questionId) return;
    dispatch({ type: PaginationActions.NextQuestion, payload: response });
  };

  return { state, activeStep, paginationDispatch: dispatch, isBackDisabled: pageHistory.length < 1, nextQuestion };
};
