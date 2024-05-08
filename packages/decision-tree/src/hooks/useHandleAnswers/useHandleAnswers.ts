import { useReducer } from 'react';
import { UseSetupCallbackCB } from 'src/types';
import { useHandleActionResponse, HandleAnswersActions } from './types';

export const useHandleAnswers = (callback: UseSetupCallbackCB): useHandleActionResponse => {
  const handleAnswersReducer = (state, { type, payload }) => {
    switch (type) {
      case HandleAnswersActions.SaveAnswer:
        return { answer: payload };
      case HandleAnswersActions.ResetAnswer:
        return { answer: null };
    }
  };

  const [state, dispatch] = useReducer(handleAnswersReducer, { answer: null });

  const submitAnswer = async (questionId) => {
    return await callback(questionId, state.answer);
  };

  return { state, answersDispatch: dispatch, submitAnswer };
};
