import { Reducer, useReducer } from 'react';
import { UseSetupCallbackCB } from 'src/types';
import { sectionIntroId } from '../../DecisionTree.normalizer';
import {
  useHandleActionResponse,
  HandleAnswersActions,
  iDontKnowAnswer,
  HandleAnswersState,
  HandleAnswersAction,
} from './types';
import { AnswerType } from '@components/Question';

export const useHandleAnswers = (callback: UseSetupCallbackCB): useHandleActionResponse => {
  const handleAnswersReducer = (state: HandleAnswersState, action: HandleAnswersAction) => {
    const actionMap = {
      [HandleAnswersActions.SaveAnswer]: (submittedAnswer) => {
        return { ...state, answer: submittedAnswer, isAnswered: isAnswerFilled(submittedAnswer) };
      },
      [HandleAnswersActions.ResetAnswer]: () => {
        return { ...state, answer: null, isAnswered: false };
      },
      [HandleAnswersActions.SetPreviousAnswers]: (previousAnswers) => {
        return { ...state, previousAnswers };
      },
      [HandleAnswersActions.GetPreviousAnswer]: (questionId) => {
        return {
          ...state,
          answer: state.previousAnswers[questionId],
          isAnswered: isAnswerFilled(state.previousAnswers[questionId]),
        };
      },
    };

    return actionMap[action.type](action.payload);
  };

  const [state, dispatch] = useReducer<Reducer<HandleAnswersState, HandleAnswersAction>>(handleAnswersReducer, {
    answer: null,
    previousAnswers: {},
    isAnswered: false,
  });

  const submitAnswer = async (questionId) => {
    if (questionId.includes(sectionIntroId))
      return { nextQuestion: { sectionId: 'nextQuestionOverride', questionId: 'nextQuestionOverride' }, answers: {} };
    return await callback(questionId, state.answer);
  };

  const submitIDKAnswer = async (questionId) => {
    return await callback(questionId, iDontKnowAnswer);
  };

  return { state, answersDispatch: dispatch, submitAnswer, submitIDKAnswer };
};

const isAnswerFilled = (answer: AnswerType | null): boolean => {
  if (!answer) return false;

  switch (answer.type) {
    case 'singleChoice':
    case 'numeric':
      return !!answer.value;
    case 'multipleChoice':
      return answer.values.length > 0;
    case 'height':
      return !!answer.feet || !!answer.inches;
    default:
      return true;
  }
};
