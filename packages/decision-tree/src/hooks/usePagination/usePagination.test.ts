import { renderHookWithProviders, act, waitFor } from '@tests/renderHookWithProviders';
import { usePagination } from './usePagination';
import { Steps } from '@types';
import { PaginationActions, PaginationProps, PaginationResponse } from './types';

describe('usePagination', () => {
  const steps: Steps = [
    { id: '1', name: 'step1' },
    { id: '2', name: 'step2' },
    { id: '3', name: 'step3' },
  ];
  const initialState = { currentSection: '1', currentQuestion: '1' };
  const answersDispatch = jest.fn();
  const submitAnswer = jest.fn();

  afterAll(() => {
    submitAnswer.mockReset();
    answersDispatch.mockReset();
  });

  test('should return an activeStep number', () => {
    const { result } = renderHookWithProviders<PaginationProps, PaginationResponse>(usePagination, {
      steps,
      initialState,
      answersDispatch,
      submitAnswer,
    });

    const hookResult = result.current;

    expect(typeof hookResult.activeStep).toBe('number');
  });

  test('should return a state with the page', () => {
    const { result } = renderHookWithProviders<PaginationProps, PaginationResponse>(usePagination, {
      steps,
      initialState,
      answersDispatch,
      submitAnswer,
    });

    const hookResult = result.current;

    expect(hookResult.state).toEqual(initialState);
  });

  test('should return a dispatch function', () => {
    const { result } = renderHookWithProviders<PaginationProps, PaginationResponse>(usePagination, {
      steps,
      initialState,
      answersDispatch,
      submitAnswer,
    });

    const hookResult = result.current;

    expect(typeof hookResult.paginationDispatch).toBe('function');
  });

  test('should return a isBackDisabled boolean', () => {
    const { result } = renderHookWithProviders<PaginationProps, PaginationResponse>(usePagination, {
      steps,
      initialState,
      answersDispatch,
      submitAnswer,
    });

    const hookResult = result.current;

    expect(typeof hookResult.isBackDisabled).toBe('boolean');
  });

  test('should go to the next Question', async () => {
    const { result } = renderHookWithProviders<PaginationProps, PaginationResponse>(usePagination, {
      steps,
      initialState,
      answersDispatch,
      submitAnswer,
    });

    const { paginationDispatch } = result.current;

    act(() => {
      paginationDispatch({
        type: PaginationActions.NextQuestion,
        payload: { nextQuestion: { sectionId: '1', questionId: '2' }, answers: {} },
      });
    });

    await waitFor(() => {
      expect(result.current.state).toEqual({ currentSection: '1', currentQuestion: '2' });
    });
  });

  test('should go to the previous Question', async () => {
    const { result } = renderHookWithProviders<PaginationProps, PaginationResponse>(usePagination, {
      steps,
      initialState,
      answersDispatch,
      submitAnswer,
    });

    const { paginationDispatch } = result.current;

    await act(async () => {
      await paginationDispatch({
        type: PaginationActions.NextQuestion,
        payload: { nextQuestion: { sectionId: '1', questionId: '2' }, answers: {} },
      });
      await paginationDispatch({ type: PaginationActions.PreviousQuestion });
    });

    await waitFor(() => {
      expect(result.current.state).toEqual(initialState);
    });
  });
});
