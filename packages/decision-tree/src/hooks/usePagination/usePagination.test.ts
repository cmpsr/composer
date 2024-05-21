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
  const submitAnswer = jest.fn();
  const backOnFirstQuestion = jest.fn();

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
      backOnFirstQuestion,
    });

    const hookResult = result.current;

    expect(typeof hookResult.activeStep).toBe('number');
  });

  test('should return the first section intro state with the page', () => {
    const { result } = renderHookWithProviders<PaginationProps, PaginationResponse>(usePagination, {
      steps,
      initialState,
      answersDispatch,
      submitAnswer,
      backOnFirstQuestion,
    });

    const hookResult = result.current;

    expect(hookResult.state).toEqual({ currentQuestion: '1-section-intro', currentSection: '1' });
  });

  test('should return a dispatch function', () => {
    const { result } = renderHookWithProviders<PaginationProps, PaginationResponse>(usePagination, {
      steps,
      initialState,
      answersDispatch,
      submitAnswer,
      backOnFirstQuestion,
    });

    const hookResult = result.current;

    expect(typeof hookResult.paginationDispatch).toBe('function');
  });

  test('should go to the next Question', async () => {
    const { result } = renderHookWithProviders<PaginationProps, PaginationResponse>(usePagination, {
      steps,
      initialState,
      answersDispatch,
      submitAnswer,
      backOnFirstQuestion,
    });

    const { paginationDispatch } = result.current;

    act(() => {
      paginationDispatch({
        type: PaginationActions.NextQuestion,
        payload: { nextQuestion: { sectionId: '1', questionId: '1' }, answers: [] },
      });
    });

    await waitFor(() => {
      expect(result.current.state).toEqual({ currentSection: '1', currentQuestion: '1' });
    });
  });

  test('should go to the previous Question', async () => {
    const { result } = renderHookWithProviders<PaginationProps, PaginationResponse>(usePagination, {
      steps,
      initialState,
      answersDispatch,
      submitAnswer,
      backOnFirstQuestion,
    });

    const { paginationDispatch } = result.current;

    await act(async () => {
      await paginationDispatch({
        type: PaginationActions.NextQuestion,
        payload: { nextQuestion: { sectionId: '1', questionId: '1' }, answers: [] },
      });
      await paginationDispatch({ type: PaginationActions.PreviousQuestion });
    });

    await waitFor(() => {
      expect(result.current.state).toEqual({
        currentQuestion: '1-section-intro',
        currentSection: '1',
      });
    });
  });

  test('should trigger the next question on gotoNextQuesiton Function', async () => {
    const submitAnswerMock = jest
      .fn()
      .mockResolvedValue({ nextQuestion: { sectionId: '1', questionId: '1' }, answers: [] });
    const { result } = renderHookWithProviders<PaginationProps, PaginationResponse>(usePagination, {
      steps,
      initialState,
      answersDispatch,
      submitAnswer: submitAnswerMock,
      backOnFirstQuestion,
    });

    const { goToNextQuestion } = result.current;

    await act(async () => {
      await goToNextQuestion();
    });

    await waitFor(() => {
      expect(result.current.state).toEqual({ currentSection: '1', currentQuestion: '1' });
    });
  });

  test('should not trigger the next question on gotoNextQuesiton Function when empty response', async () => {
    const submitAnswerMock = jest.fn().mockResolvedValue({ nextQuestion: {}, answers: [] });
    const { result } = renderHookWithProviders<PaginationProps, PaginationResponse>(usePagination, {
      steps,
      initialState,
      answersDispatch,
      submitAnswer: submitAnswerMock,
      backOnFirstQuestion,
    });

    const { goToNextQuestion } = result.current;

    await act(async () => {
      await goToNextQuestion();
    });

    await waitFor(() => {
      expect(result.current.state).toEqual({ currentQuestion: '1-section-intro', currentSection: '1' });
    });
  });

  test('should not trigger the next question on gotoNextQuesiton Function when empty response', async () => {
    const { result } = renderHookWithProviders<PaginationProps, PaginationResponse>(usePagination, {
      steps,
      initialState,
      answersDispatch,
      submitAnswer,
      backOnFirstQuestion,
    });

    const { paginationDispatch } = result.current;

    await act(async () => {
      await paginationDispatch({
        type: PaginationActions.NextQuestion,
        payload: { nextQuestion: { sectionId: '1', questionId: '1' }, answers: [] },
      });
      await paginationDispatch({
        type: PaginationActions.NextQuestion,
        payload: { nextQuestion: { sectionId: '1', questionId: '2' }, answers: [] },
      });
    });

    await waitFor(() => {
      expect(result.current.state).toEqual({ currentQuestion: '2', currentSection: '1' });
    });
  });
});
