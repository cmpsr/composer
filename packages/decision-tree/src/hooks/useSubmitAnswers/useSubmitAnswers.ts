import { UseSetupCallbackProps } from 'src/types';
import { UseSetupCallbackResponse } from './types';

export const useSetupCallback = ({ callback }: UseSetupCallbackProps): UseSetupCallbackResponse => {
  const submitAnswer = async ({ questionId, value }) => {
    return await callback({ questionId, value });
  };

  return { submitAnswer };
};
