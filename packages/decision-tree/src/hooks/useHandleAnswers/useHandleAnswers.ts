import { useReducer } from 'react';
import { UseSetupCallbackCB } from 'src/types';
import { useHandleActionResponse, HandleAnswersActions, createAnswer } from './types';
import { sectionIntroId } from '../../DecisionTree.normalizer';

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
    if (questionId.includes(sectionIntroId))
      return { nextQuestion: { sectionId: 'nextQuestionOverride', questionId: 'nextQuestionOverride' }, answers: {} };
    return await callback(questionId, state.answer);
  };

  const iDontKnowAnswer = async (questionId) => {
    return await callback(questionId, createAnswer('iDontKnow'));
  };

  return { state, answersDispatch: dispatch, submitAnswer, iDontKnowAnswer };
};
