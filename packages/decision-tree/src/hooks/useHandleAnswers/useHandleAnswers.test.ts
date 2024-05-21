import { renderHookWithProviders, act, waitFor } from '@tests/renderHookWithProviders';
import { useHandleAnswers } from './useHandleAnswers';
import { UseSetupCallbackCB } from '@types';
import { HandleAnswersActions, useHandleActionResponse } from './types';
import { sectionIntroId } from '../../DecisionTree.normalizer';

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

    expect(state).toEqual({ answer: null, previousAnswers: [], isAnswered: false });
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
      expect(result.current.state.answer).toEqual('stringAnswer');
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
      expect(result.current.state.answer).toBeNull();
    });
  });

  test('should save the previous answers', async () => {
    const mockFn = jest.fn();
    const previousAnswers = { '1': { type: 'iDontKnow' } } as PreviousAnswersType;
    const { result } = renderHookWithProviders<UseSetupCallbackCB, useHandleActionResponse>(useHandleAnswers, mockFn);

    const { answersDispatch } = result.current;

    await act(async () => {
      await answersDispatch({ type: HandleAnswersActions.SetPreviousAnswers, payload: previousAnswers });
    });
    await waitFor(() => {
      expect(result.current.state.previousAnswers).toEqual(previousAnswers);
    });
  });

  test('should get the previous answers', async () => {
    const mockFn = jest.fn();
    const previousAnswers = { '1': { type: 'iDontKnow' } } as PreviousAnswersType;
    const { result } = renderHookWithProviders<UseSetupCallbackCB, useHandleActionResponse>(useHandleAnswers, mockFn);

    const { answersDispatch } = result.current;

    await act(async () => {
      await answersDispatch({ type: HandleAnswersActions.SetPreviousAnswers, payload: previousAnswers });
      await answersDispatch({ type: HandleAnswersActions.GetPreviousAnswer, payload: '1' });
    });
    await waitFor(() => {
      expect(result.current.state.answer).toEqual(previousAnswers['1']);
      expect(result.current.state.isAnswered).toBeTruthy;
    });
  });

  test('should override the callback when sending a sectionIntro', async () => {
    const mockFn = jest.fn();
    const { result } = renderHookWithProviders<UseSetupCallbackCB, useHandleActionResponse>(useHandleAnswers, mockFn);

    const { answersDispatch, submitAnswer } = result.current;

    await act(async () => {
      await answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: 'stringAnswer' });
    });

    await waitFor(async () => {
      const submitResult = await submitAnswer(`${'1'}${sectionIntroId}`);
      expect(submitResult).toEqual({
        nextQuestion: { sectionId: 'nextQuestionOverride', questionId: 'nextQuestionOverride' },
        answers: {},
        version: 0,
        sections: [],
      });
    });
  });

  test('should detect filled answers for height question feet answer', async () => {
    const mockFn = jest.fn();
    const previousAnswers = { '1': { type: 'height', feet: 5, inches: null } } as PreviousAnswersType;
    const { result } = renderHookWithProviders<UseSetupCallbackCB, useHandleActionResponse>(useHandleAnswers, mockFn);

    const { answersDispatch } = result.current;

    await act(async () => {
      await answersDispatch({ type: HandleAnswersActions.SetPreviousAnswers, payload: previousAnswers });
      await answersDispatch({ type: HandleAnswersActions.GetPreviousAnswer, payload: '1' });
    });
    await waitFor(() => {
      expect(result.current.state.isAnswered).toBeTruthy;
    });
  });

  test('should detect filled answers for height question inches answer', async () => {
    const mockFn = jest.fn();
    const previousAnswers = { '1': { type: 'height', feet: null, inches: 5 } } as PreviousAnswersType;
    const { result } = renderHookWithProviders<UseSetupCallbackCB, useHandleActionResponse>(useHandleAnswers, mockFn);

    const { answersDispatch } = result.current;

    await act(async () => {
      await answersDispatch({ type: HandleAnswersActions.SetPreviousAnswers, payload: previousAnswers });
      await answersDispatch({ type: HandleAnswersActions.GetPreviousAnswer, payload: '1' });
    });
    await waitFor(() => {
      expect(result.current.state.isAnswered).toBeTruthy;
    });
  });

  test('should detect non filled answers for height question', async () => {
    const mockFn = jest.fn();
    const previousAnswers = { '1': { type: 'height', feet: null, inches: null } } as PreviousAnswersType;
    const { result } = renderHookWithProviders<UseSetupCallbackCB, useHandleActionResponse>(useHandleAnswers, mockFn);

    const { answersDispatch } = result.current;

    await act(async () => {
      await answersDispatch({ type: HandleAnswersActions.SetPreviousAnswers, payload: previousAnswers });
      await answersDispatch({ type: HandleAnswersActions.GetPreviousAnswer, payload: '1' });
    });
    await waitFor(() => {
      expect(result.current.state.isAnswered).toBeFalsy;
    });
  });

  test('should detect filled answers for singleChoice question', async () => {
    const mockFn = jest.fn();
    const previousAnswers = { '1': { type: 'singleChoice', value: '5' } } as PreviousAnswersType;
    const { result } = renderHookWithProviders<UseSetupCallbackCB, useHandleActionResponse>(useHandleAnswers, mockFn);

    const { answersDispatch } = result.current;

    await act(async () => {
      await answersDispatch({ type: HandleAnswersActions.SetPreviousAnswers, payload: previousAnswers });
      await answersDispatch({ type: HandleAnswersActions.GetPreviousAnswer, payload: '1' });
    });
    await waitFor(() => {
      expect(result.current.state.isAnswered).toBeTruthy;
    });
  });

  test('should detect non filled answers for singleChoice question', async () => {
    const mockFn = jest.fn();
    const previousAnswers = { '1': { type: 'singleChoice', value: null } } as PreviousAnswersType;
    const { result } = renderHookWithProviders<UseSetupCallbackCB, useHandleActionResponse>(useHandleAnswers, mockFn);

    const { answersDispatch } = result.current;

    await act(async () => {
      await answersDispatch({ type: HandleAnswersActions.SetPreviousAnswers, payload: previousAnswers });
      await answersDispatch({ type: HandleAnswersActions.GetPreviousAnswer, payload: '1' });
    });
    await waitFor(() => {
      expect(result.current.state.isAnswered).toBeFalsy;
    });
  });

  test('should detect filled answers for multipleChoice question', async () => {
    const mockFn = jest.fn();
    const previousAnswers = { '1': { type: 'multipleChoice', values: ['5'] } } as PreviousAnswersType;
    const { result } = renderHookWithProviders<UseSetupCallbackCB, useHandleActionResponse>(useHandleAnswers, mockFn);

    const { answersDispatch } = result.current;

    await act(async () => {
      await answersDispatch({ type: HandleAnswersActions.SetPreviousAnswers, payload: previousAnswers });
      await answersDispatch({ type: HandleAnswersActions.GetPreviousAnswer, payload: '1' });
    });
    await waitFor(() => {
      expect(result.current.state.isAnswered).toBeTruthy;
    });
  });

  test('should detect non filled answers for multipleChoice question', async () => {
    const mockFn = jest.fn();
    const previousAnswers = { '1': { type: 'multipleChoice', values: null } } as PreviousAnswersType;
    const { result } = renderHookWithProviders<UseSetupCallbackCB, useHandleActionResponse>(useHandleAnswers, mockFn);

    const { answersDispatch } = result.current;

    await act(async () => {
      await answersDispatch({ type: HandleAnswersActions.SetPreviousAnswers, payload: previousAnswers });
      await answersDispatch({ type: HandleAnswersActions.GetPreviousAnswer, payload: '1' });
    });
    await waitFor(() => {
      expect(result.current.state.isAnswered).toBeFalsy;
    });
  });

  test('should detect filled answers for numeric question', async () => {
    const mockFn = jest.fn();
    const previousAnswers = { '1': { type: 'numeric', value: 5 } } as PreviousAnswersType;
    const { result } = renderHookWithProviders<UseSetupCallbackCB, useHandleActionResponse>(useHandleAnswers, mockFn);

    const { answersDispatch } = result.current;

    await act(async () => {
      await answersDispatch({ type: HandleAnswersActions.SetPreviousAnswers, payload: previousAnswers });
      await answersDispatch({ type: HandleAnswersActions.GetPreviousAnswer, payload: '1' });
    });
    await waitFor(() => {
      expect(result.current.state.isAnswered).toBeTruthy;
    });
  });

  test('should detect non filled answers for numeric question', async () => {
    const mockFn = jest.fn();
    const previousAnswers = { '1': { type: 'numeric', value: null } } as PreviousAnswersType;
    const { result } = renderHookWithProviders<UseSetupCallbackCB, useHandleActionResponse>(useHandleAnswers, mockFn);

    const { answersDispatch } = result.current;

    await act(async () => {
      await answersDispatch({ type: HandleAnswersActions.SetPreviousAnswers, payload: previousAnswers });
      await answersDispatch({ type: HandleAnswersActions.GetPreviousAnswer, payload: '1' });
    });
    await waitFor(() => {
      expect(result.current.state.isAnswered).toBeFalsy;
    });
  });
});
