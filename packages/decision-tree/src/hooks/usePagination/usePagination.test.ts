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

  test('should return an activeStep number', () => {
    const { result } = renderHookWithProviders<PaginationProps, PaginationResponse>(usePagination, {
      steps,
      initialState,
      answersDispatch,
    });

    const hookResult = result.current;

    expect(typeof hookResult.activeStep).toBe('number');
  });

  test('should return a state with the page', () => {
    const { result } = renderHookWithProviders<PaginationProps, PaginationResponse>(usePagination, {
      steps,
      initialState,
      answersDispatch,
    });

    const hookResult = result.current;

    expect(hookResult.state).toEqual(initialState);
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
        payload: { nextSectionId: '1', nextQuestionId: '2' },
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
        payload: { nextSectionId: '1', nextQuestionId: '2' },
      });
      paginationDispatch({ type: PaginationActions.PreviousQuestion });
    });

    waitFor(() => {
      expect(state).toEqual(initialState);
    });
  });
});
