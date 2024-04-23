import { useReducer } from 'react';
import { useSteps } from '@cmpsr/components';
import { DecisionTreeHook, DecisionTreeState, DecisionTreeAction, DecisionTreeActionKind } from './types'

export const usePagination = (questions, stepsLength): DecisionTreeHook => {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: stepsLength,
  });

  const surveyReducer = ({ currentQuestion }: DecisionTreeState, action: DecisionTreeAction) => {
    const actionMap = {
      [DecisionTreeActionKind.NextQuestion]: () => {
        const newCurrentQuestion: number = currentQuestion < questions.length ? currentQuestion + 1 : questions.length;
        setActiveStep(questions[newCurrentQuestion].step);
        return {
          currentQuestion: newCurrentQuestion,
        };
      },
      [DecisionTreeActionKind.PreviousQuestion]: () => {
        const newCurrentQuestion: number = currentQuestion < questions.length ? currentQuestion + 1 : questions.length;
        setActiveStep(questions[newCurrentQuestion].step);
        return {
          currentQuestion: newCurrentQuestion,
        };
      },
    };
    return actionMap[action.type]();
  };

  const [state, dispatch] = useReducer(surveyReducer, { currentQuestion: 0 });

  return { state, activeStep, dispatch };
};
