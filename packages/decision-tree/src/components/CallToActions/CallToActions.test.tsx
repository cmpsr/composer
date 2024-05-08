import React from 'react';
import { renderWithProviders, screen, fireEvent, act, waitFor } from '@tests/renderWithProviders';
import { CallToActions } from './CallToActions';
import { PaginationActions } from '@hooks';

describe('CallToActions', () => {
  const submitResponse = { nextQuestionId: 'mockQuestionId' };
  const mockDispatch = jest.fn();
  const mockNextQuestion = jest.fn().mockResolvedValue(submitResponse);

  afterAll(() => {
    mockDispatch.mockReset();
    mockNextQuestion.mockReset();
  });

  test('should render 1 button and 1 link', () => {
    renderWithProviders(
      <CallToActions
        isBackDisabled={false}
        isNextDisabled={false}
        dispatch={mockDispatch}
        nextQuestion={mockNextQuestion}
      />
    );
    expect(screen.getAllByText('Next')).toHaveLength(1);
    expect(screen.getAllByText('Back')).toHaveLength(1);
  });

  test('should disable the back button when configed', () => {
    renderWithProviders(
      <CallToActions
        isBackDisabled={true}
        isNextDisabled={false}
        dispatch={mockDispatch}
        nextQuestion={mockNextQuestion}
      />
    );
    expect(screen.getByText('Back').parentElement).toBeDisabled();
  });

  test('should not disable the back button when not configed', () => {
    renderWithProviders(
      <CallToActions
        isBackDisabled={false}
        isNextDisabled={false}
        dispatch={mockDispatch}
        nextQuestion={mockNextQuestion}
      />
    );
    expect(screen.getByText('Back').parentElement).not.toBeDisabled();
  });

  test('should disable the next button when configed', () => {
    renderWithProviders(
      <CallToActions
        isBackDisabled={false}
        isNextDisabled={true}
        dispatch={mockDispatch}
        nextQuestion={mockNextQuestion}
      />
    );
    expect(screen.getByText('Next').parentElement).toBeDisabled();
  });

  test('should not disable the next button when not configed', () => {
    renderWithProviders(
      <CallToActions
        isBackDisabled={false}
        isNextDisabled={false}
        dispatch={mockDispatch}
        nextQuestion={mockNextQuestion}
      />
    );
    expect(screen.getByText('Next').parentElement).not.toBeDisabled();
  });

  test('should call the dispatch with previous page action on back click', () => {
    renderWithProviders(
      <CallToActions
        isBackDisabled={false}
        isNextDisabled={false}
        dispatch={mockDispatch}
        nextQuestion={mockNextQuestion}
      />
    );
    const backButton = screen.getByText('Back').parentElement;

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
        nextQuestion={mockNextQuestion}
      />
    );
    const nextButton = screen.getByText('Next').parentElement;

    act(() => {
      fireEvent.click(nextButton);
    });
    await waitFor(() => {
      expect(mockNextQuestion).toHaveBeenCalled();
    });
  });
});
