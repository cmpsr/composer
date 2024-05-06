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
  const initialState = { sectionId: '1', questionId: '1' };
  const answersDispatch = jest.fn();

  test('should return an activeStep number', () => {
    const { result } = renderHookWithProviders<PaginationProps, PaginationResponse>(usePagination, {
      steps,
      initialState,
      answersDispatch,
    });

    const hookResult = result.current;

    expect(typeof hookResult.activeStep).toBe('number');
  });

  test('should return the first section intro state with the page', () => {
    const { result } = renderHookWithProviders<PaginationProps, PaginationResponse>(usePagination, {
      steps,
      initialState,
      answersDispatch,
    });

    const hookResult = result.current;

    expect(hookResult.state).toEqual({ currentQuestion: '1-section-intro', currentSection: '1' });
  });

  test('should return a dispatch function', () => {
    const { result } = renderHookWithProviders<PaginationProps, PaginationResponse>(usePagination, {
      steps,
      initialState,
      answersDispatch,
    });

    const hookResult = result.current;

    expect(typeof hookResult.paginationDispatch).toBe('function');
  });

  test('should return a isBackDisabled boolean', () => {
    const { result } = renderHookWithProviders<PaginationProps, PaginationResponse>(usePagination, {
      steps,
      initialState,
      answersDispatch,
    });

    const hookResult = result.current;

    expect(typeof hookResult.isBackDisabled).toBe('boolean');
  });

  test('should go to the next Question', () => {
    const { result } = renderHookWithProviders<PaginationProps, PaginationResponse>(usePagination, {
      steps,
      initialState,
      answersDispatch,
    });

    const { paginationDispatch, state } = result.current;

    act(() => {
      paginationDispatch({
        type: PaginationActions.NextQuestion,
        payload: { nextQuestion: { sectionId: '1', questionId: '2' }, answers: {} },
      });
    });

    waitFor(() => {
      expect(state).toEqual({ currentSection: '1', currentQuestion: '2' });
    });
  });

  test('should go to the previous Question', () => {
    const { result } = renderHookWithProviders<PaginationProps, PaginationResponse>(usePagination, {
      steps,
      initialState,
      answersDispatch,
    });

    const { paginationDispatch, state } = result.current;

    act(() => {
      paginationDispatch({
        type: PaginationActions.NextQuestion,
        payload: { nextQuestion: { sectionId: '1', questionId: '2' }, answers: {} },
      });
      paginationDispatch({ type: PaginationActions.PreviousQuestion });
    });

    waitFor(() => {
      expect(state).toEqual(initialState);
    });
  });
});
