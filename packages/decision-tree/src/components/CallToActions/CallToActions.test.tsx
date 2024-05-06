import React from 'react';
import { renderWithProviders, screen, fireEvent, act, waitFor } from '@tests/renderWithProviders';
import { CallToActions } from './CallToActions';
import { PaginationActions } from '@hooks';

describe('CallToActions', () => {
  const submitResponse = { nextQuestionId: 'mockQuestionId' };
  const mockDispatch = jest.fn();
  const mockSubmitAnswer = jest.fn().mockResolvedValue(submitResponse);

  afterAll(() => {
    mockDispatch.mockReset();
    mockSubmitAnswer.mockReset();
  });

  test('should render 1 button and 1 link', () => {
    renderWithProviders(
      <CallToActions
        isBackDisabled={false}
        isNextDisabled={false}
        dispatch={mockDispatch}
        submitAnswer={mockSubmitAnswer}
      />
    );
    expect(screen.getAllByRole('button')).toHaveLength(1);
    expect(screen.getAllByRole('link')).toHaveLength(1);
  });

  test('should disable the back button when configed', () => {
    renderWithProviders(
      <CallToActions
        isBackDisabled={true}
        isNextDisabled={false}
        dispatch={mockDispatch}
        submitAnswer={mockSubmitAnswer}
      />
    );
    expect(screen.getByRole('link')).toBeDisabled();
  });

  test('should not disable the back button when not configed', () => {
    renderWithProviders(
      <CallToActions
        isBackDisabled={false}
        isNextDisabled={false}
        dispatch={mockDispatch}
        submitAnswer={mockSubmitAnswer}
      />
    );
    expect(screen.getByRole('link')).not.toBeDisabled();
  });

  test('should disable the next button when configed', () => {
    renderWithProviders(
      <CallToActions
        isBackDisabled={false}
        isNextDisabled={true}
        dispatch={mockDispatch}
        submitAnswer={mockSubmitAnswer}
      />
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('should not disable the next button when not configed', () => {
    renderWithProviders(
      <CallToActions
        isBackDisabled={false}
        isNextDisabled={false}
        dispatch={mockDispatch}
        submitAnswer={mockSubmitAnswer}
      />
    );
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  test('should call the dispatch with previous page action on back click', () => {
    renderWithProviders(
      <CallToActions
        isBackDisabled={false}
        isNextDisabled={false}
        dispatch={mockDispatch}
        submitAnswer={mockSubmitAnswer}
      />
    );
    const backButton = screen.getByRole('link');

    act(() => {
      fireEvent.click(backButton);
    });

    expect(mockDispatch).toHaveBeenCalledWith({ type: PaginationActions.PreviousQuestion });
  });

  test('should call the dispatch with next page action on next click', async () => {
    renderWithProviders(
      <CallToActions
        isBackDisabled={false}
        isNextDisabled={false}
        dispatch={mockDispatch}
        submitAnswer={mockSubmitAnswer}
      />
    );
    const nextButton = screen.getByRole('button');

    act(() => {
      fireEvent.click(nextButton);
    });
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({ type: PaginationActions.NextQuestion, payload: submitResponse });
    });
  });
});
