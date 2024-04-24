import { renderHookWithProviders } from '../../tests/renderHookWithProviders';
import { useSubmitAnswers } from './useSubmitAnswers';
import { UseSetupCallbackCB } from '../../types'
import { UseSetupCallbackResponse } from './types'

describe('useSubmitAnswers', () => {
  const callback = async function ( questionId, value ) {
    console.log(questionId, value);
    return true;
  } as UseSetupCallbackCB;

  test('should return a submitAnswer object', () => {
    const { result } = renderHookWithProviders<UseSetupCallbackCB, UseSetupCallbackResponse>(useSubmitAnswers, callback);

    const hookResult = result.current

    expect(typeof hookResult.submitAnswer).toBe('function');
  });

  test('should execute the setup callback on submiting', () => {
    const mockFn = jest.fn()
    const { result } = renderHookWithProviders<UseSetupCallbackCB, UseSetupCallbackResponse>(useSubmitAnswers, mockFn);

    const hookResult = result.current

    hookResult.submitAnswer('1', 'answerValue')

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
