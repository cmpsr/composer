import { useReducer } from 'react';
import { UseSetupCallbackCB } from 'src/types';
import { useHandleActionResponse, HandleAnswersActions, iDontKnowAnswer } from './types';

export const useHandleAnswers = (callback: UseSetupCallbackCB): useHandleActionResponse => {
  const handleAnswersReducer = (state, { type, payload }) => {
    switch (type) {
      case HandleAnswersActions.SaveAnswer:
        return { ...state, answer: payload };
      case HandleAnswersActions.ResetAnswer:
        return { ...state, answer: null };
      case HandleAnswersActions.SetPreviousAnswers: {
        return { ...state, previousAnswers: payload };
      }
      case HandleAnswersActions.GetPreviousAnswer: {
        console.log(state, 'statusodes');
        return { ...state, answer: state.previousAnswers[payload] };
      }
    }
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
