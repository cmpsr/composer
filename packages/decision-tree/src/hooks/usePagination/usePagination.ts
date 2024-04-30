import { useReducer, useState, type Reducer } from 'react';
import { useSteps } from '@cmpsr/components';
import { PaginationResponse, PaginationState, PaginationAction, PaginationActions, PaginationProps } from './types';
import { HandleAnswersActions } from '@hooks';

export const usePagination = ({ steps, initialState, answersDispatch }: PaginationProps): PaginationResponse => {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });
  const [pageHistory, setPageHistory] = useState<Array<PaginationState>>([]);

  const paginationReducer = (state: PaginationState, action: PaginationAction) => {
    const actionMap = {
      [PaginationActions.PreviousQuestion]: () => {
        const { currentQuestion, currentSection, step } = pageHistory.at(-1);
        answersDispatch({ type: HandleAnswersActions.GetPreviousAnswer, payload: currentQuestion });
        setActiveStep(step);
        setPageHistory(pageHistory.slice(0, -1));
        return {
          currentQuestion,
          currentSection,
        };
      },
      [PaginationActions.NextQuestion]: ({ nextQuestion, answers }) => {
        const iSection = steps.findIndex((step) => step.id == nextQuestion.sectionId);
        answersDispatch({ type: HandleAnswersActions.SetPreviousAnswers, payload: answers });
        answersDispatch({ type: HandleAnswersActions.ResetAnswer });
        setPageHistory([...pageHistory, { ...state, step: iSection }]);
        setActiveStep(iSection);
        return {
          currentQuestion: nextQuestion.questionId,
          currentSection: nextQuestion.sectionId,
        };
      },
    };
    return actionMap[action.type](action.payload);
  };

  const [state, dispatch] = useReducer<Reducer<PaginationState, PaginationAction>>(paginationReducer, initialState);

  return { state, activeStep, paginationDispatch: dispatch, isBackDisabled: pageHistory.length < 1 };
};
