import { renderHookWithProviders, act, waitFor } from '@tests/renderHookWithProviders';
import { useHandleAnswers } from './useHandleAnswers';
import { UseSetupCallbackCB } from '@types';
import { HandleAnswersActions, useHandleActionResponse } from './types';

describe('useHandleAnswers', () => {
  const serverMockup = {
    1: { nextSectionId: 1, nextQuestionId: 2 },
    2: { nextSectionId: 2, nextQuestionId: 3 },
    3: { nextSectionId: 3, nextQuestionId: 4 },
    4: null,
  };

  const callback = async function (questionId, value) {
    console.log(questionId, value);
    return serverMockup[questionId];
  } as UseSetupCallbackCB;

  test('should return a submitAnswer function', () => {
    const { result } = renderHookWithProviders<UseSetupCallbackCB, useHandleActionResponse>(useHandleAnswers, callback);

    const hookResult = result.current;

    expect(typeof hookResult.submitAnswer).toBe('function');
  });

  test('should return a dispatch function', () => {
    const { result } = renderHookWithProviders<UseSetupCallbackCB, useHandleActionResponse>(useHandleAnswers, callback);

    const hookResult = result.current;

    expect(typeof hookResult.answersDispatch).toBe('function');
  });

  test('should return a state object', () => {
    const { result } = renderHookWithProviders<UseSetupCallbackCB, useHandleActionResponse>(useHandleAnswers, callback);

    const { state } = result.current;

    expect(state).toEqual({ answer: null, previousAnswers: {}, isAnswered: false });
  });

  test('should execute the setup callback on submiting', () => {
    const mockFn = jest.fn();
    const { result } = renderHookWithProviders<UseSetupCallbackCB, useHandleActionResponse>(useHandleAnswers, mockFn);

    const hookResult = result.current;

    hookResult.submitAnswer('1');

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should save the answer', async () => {
    const mockFn = jest.fn();
    const { result } = renderHookWithProviders<UseSetupCallbackCB, useHandleActionResponse>(useHandleAnswers, mockFn);

    const { answersDispatch } = result.current;

    act(() => {
      answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: 'stringAnswer' });
    });
    await waitFor(() => {
      expect(result.current.state).toEqual({ answer: 'stringAnswer' });
    });
  });

  test('should reset the answer', async () => {
    const mockFn = jest.fn();
    const { result } = renderHookWithProviders<UseSetupCallbackCB, useHandleActionResponse>(useHandleAnswers, mockFn);

    const { answersDispatch } = result.current;

    await act(async () => {
      await answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: 'stringAnswer' });
      await answersDispatch({ type: HandleAnswersActions.ResetAnswer });
    });
    await waitFor(() => {
      expect(result.current.state).toEqual({ answer: null });
    });
  });
});
