import { Reducer, useReducer } from 'react';
import { UseSetupCallbackCB } from 'src/types';
import { sectionIntroId } from '../../DecisionTree.normalizer';
import {
  useHandleActionResponse,
  HandleAnswersActions,
  iDontKnowAnswer,
  HandleAnswersState,
  HandleAnswersAction,
  AnswerModel,
  PreviousAnswersType,
} from './types';

export const useHandleAnswers = (callback: UseSetupCallbackCB): useHandleActionResponse => {
  const handleAnswersReducer = (state: HandleAnswersState, { type, payload }: HandleAnswersAction) => {
    switch (type) {
      case HandleAnswersActions.SaveAnswer: {
        const answer = payload as AnswerModel;
        return { ...state, answer, isAnswered: isAnswerFilled(answer) };
      }
      case HandleAnswersActions.ResetAnswer:
        return { ...state, answer: null, isAnswered: false };
      case HandleAnswersActions.SetPreviousAnswers: {
        return { ...state, previousAnswers: payload as PreviousAnswersType };
      }
      case HandleAnswersActions.GetPreviousAnswer: {
        const questionId = payload as string;
        return {
          ...state,
          answer: state.previousAnswers[questionId],
          isAnswered: isAnswerFilled(state.previousAnswers[questionId]),
        };
      }
    }
  };

  const [state, dispatch] = useReducer<Reducer<HandleAnswersState, HandleAnswersAction>>(handleAnswersReducer, {
    answer: null,
    previousAnswers: {},
    isAnswered: false,
  });

  const submitAnswer = async (questionId) => {
    if (questionId.includes(sectionIntroId))
      return {
        nextQuestion: { sectionId: 'nextQuestionOverride', questionId: 'nextQuestionOverride' },
        answers: {},
        version: 0,
        sections: [],
      };

    return await callback(questionId, state.answer as AnswerModel);
  };

  const submitIDKAnswer = async (questionId) => {
    return await callback(questionId, iDontKnowAnswer);
  };

  return { state, answersDispatch: dispatch, submitAnswer, submitIDKAnswer };
};

const isAnswerFilled = (answer: AnswerModel | null): boolean => {
  if (!answer) return false;

  switch (answer.type) {
    case 'singleChoice':
    case 'numeric':
      return !!answer.value;
    case 'multipleChoice':
      return answer.values?.length > 0;
    case 'height':
      return !!answer.feet || !!answer.inches;
    default:
      return true;
  }
};
