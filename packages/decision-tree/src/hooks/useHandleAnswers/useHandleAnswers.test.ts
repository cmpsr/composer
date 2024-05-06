import { renderHookWithProviders, act, waitFor } from '@tests/renderHookWithProviders';
import { useHandleAnswers } from './useHandleAnswers';
import { UseSetupCallbackCB } from '@types';
import { HandleAnswersActions, useHandleActionResponse } from './types';

describe('useHandleAnswers', () => {
  const callback = async function (questionId, value) {
    console.log(questionId, value);
    return true;
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

  test('should save the answer', () => {
    const mockFn = jest.fn();
    const { result } = renderHookWithProviders<UseSetupCallbackCB, useHandleActionResponse>(useHandleAnswers, mockFn);

    const { answersDispatch, state } = result.current;

    act(() => {
      answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: 'stringAnswer' });
    });
    waitFor(() => {
      expect(state).toEqual({ answer: 'stringAnswer' });
    });
  });

  test('should reset the answer', () => {
    const mockFn = jest.fn();
    const { result } = renderHookWithProviders<UseSetupCallbackCB, useHandleActionResponse>(useHandleAnswers, mockFn);

    const { answersDispatch, state } = result.current;

    act(() => {
      answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: 'stringAnswer' });
      answersDispatch({ type: HandleAnswersActions.ResetAnswer });
    });
    waitFor(() => {
      expect(state).toEqual({ answer: null });
    });
  });
});
