import { useReducer } from 'react';
import { UseSetupCallbackCB } from 'src/types';
import { useHandleActionResponse, HandleAnswersActions } from './types';

export const useHandleAnswers = (callback: UseSetupCallbackCB): useHandleActionResponse => {
  const handleAnswersReducer = (state, action) => {
    const actionMap = {
      [HandleAnswersActions.SaveAnswer]: (submittedAnswer) => {
        return { answer: submittedAnswer };
      },
      [HandleAnswersActions.ResetAnswer]: () => {
        return { answer: null };
      },
    };

    return actionMap[action.type](action.payload);
  };

  const [state, dispatch] = useReducer(handleAnswersReducer, { answer: null });

  const submitAnswer = async (questionId) => {
    return await callback(questionId, state.answer);
  };

  return { state, answersDispatch: dispatch, submitAnswer };
};
