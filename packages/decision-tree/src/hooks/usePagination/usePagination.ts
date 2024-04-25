import { useReducer, useState, type Reducer } from 'react';
import { useSteps } from '@cmpsr/components';
import { PaginationResponse, PaginationState, PaginationAction, PaginationActions, PaginationProps } from './types';

export const usePagination = ({ steps, initialState }: PaginationProps): PaginationResponse => {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  const [pageHistory, setPageHistory] = useState<Array<PaginationState>>([]);

  const paginationReducer = (state: PaginationState, action: PaginationAction) => {
    const actionMap = {
      [PaginationActions.PreviousQuestion]: () => {
        const { currentQuestion, currentSection, step } = pageHistory.at(-1);
        setActiveStep(step);
        setPageHistory(pageHistory.splice(-1));
        return {
          currentQuestion,
          currentSection,
        };
      },
      [PaginationActions.NextQuestion]: ({ nextSectionId, nextQuestionId }) => {
        const iSection = steps.findIndex((step) => step.id == nextSectionId);
        setPageHistory([...pageHistory, { ...state, step: iSection }]);
        setActiveStep(iSection);
        return {
          currentQuestion: nextQuestionId,
          currentSection: nextSectionId,
        };
      },
    };
    return actionMap[action.type](action.payload);
  };

  const [state, dispatch] = useReducer<Reducer<PaginationState, PaginationAction>>(paginationReducer, initialState);

  return { state, activeStep, paginationDispatch: dispatch, isBackDisabled: pageHistory.length < 1 };
};
