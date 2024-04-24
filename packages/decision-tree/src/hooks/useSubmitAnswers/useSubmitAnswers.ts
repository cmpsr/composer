import { UseSetupCallbackCB } from 'src/types';
import { UseSetupCallbackResponse } from './types';

export const useSubmitAnswers = ( callback : UseSetupCallbackCB): UseSetupCallbackResponse => {
  const submitAnswer = async (questionId, value) => {
    return await callback(questionId, value);
  };

  return { submitAnswer };
};
