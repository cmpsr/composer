import { useReducer } from 'react';
import { UseSetupCallbackCB } from 'src/types';
import { useHandleActionResponse, HandleAnswersActions, iDontKnowAnswer } from './types';

export const useHandleAnswers = (callback: UseSetupCallbackCB): useHandleActionResponse => {
  const handleAnswersReducer = (state, action) => {
    const actionMap = {
      [HandleAnswersActions.SaveAnswer]: (submittedAnswer) => {
        return { ...state, answer: submittedAnswer };
      },
      [HandleAnswersActions.ResetAnswer]: () => {
        return { ...state, answer: null };
      },
      [HandleAnswersActions.SetPreviousAnswers]: (previousAnswers) => {
        return { ...state, previousAnswers };
      },
      [HandleAnswersActions.GetPreviousAnswer]: (questionId) => {
        return { ...state, answer: state.previousAnswers[questionId] };
      },
    };

    return actionMap[action.type](action.payload);
  };

  const [state, dispatch] = useReducer(handleAnswersReducer, { answer: null, previousAnswers: {} });

  const submitAnswer = async (questionId) => {
    return await callback(questionId, state.answer);
  };

  const submitIDKAnswer = async (questionId) => {
    return await callback(questionId, iDontKnowAnswer);
  };

  return { state, answersDispatch: dispatch, submitAnswer, submitIDKAnswer };
};
