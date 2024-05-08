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
        answersDispatch({ type: HandleAnswersActions.ResetAnswer });
        setActiveStep(step);
        setPageHistory(pageHistory.slice(0, -1));
        return {
          currentQuestion,
          currentSection,
        };
      }
      case PaginationActions.NextQuestion: {
        const { nextQuestionId, nextSectionId } = payload;
        const iSection = steps.findIndex((step) => step.id == nextSectionId);
        answersDispatch({ type: HandleAnswersActions.ResetAnswer });
        setPageHistory([...pageHistory, { ...state, step: iSection }]);
        setActiveStep(iSection);
        return {
          currentQuestion: nextQuestionId,
          currentSection: nextSectionId,
        };
      }
    }
  };

  const [state, dispatch] = useReducer<Reducer<PaginationState, PaginationAction>>(paginationReducer, initialState);

  const goToNextQuestion = async () => {
    const response = await submitAnswer(state.currentQuestion);
    if (!response || !response.nextQuestionId) return;
    dispatch({ type: PaginationActions.NextQuestion, payload: response });
  };

  return { state, activeStep, paginationDispatch: dispatch, isBackDisabled: pageHistory.length < 1, goToNextQuestion };
};
