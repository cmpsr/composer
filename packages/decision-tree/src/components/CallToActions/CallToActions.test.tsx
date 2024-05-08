import React from 'react';
import { renderWithProviders, screen, fireEvent, act, waitFor } from '@tests/renderWithProviders';
import { CallToActions } from './CallToActions';

describe('CallToActions', () => {
  const submitResponse = { nextQuestionId: 'mockQuestionId' };
  const mockPreviousQuestion = jest.fn();
  const mockNextQuestion = jest.fn().mockResolvedValue(submitResponse);

  afterAll(() => {
    mockPreviousQuestion.mockReset();
    mockNextQuestion.mockReset();
  });

  test('should render 1 button and 1 link', () => {
    renderWithProviders(
      <CallToActions
        isBackDisabled={false}
        isNextDisabled={false}
        goToPreviousQuestion={mockPreviousQuestion}
        goToNextQuestion={mockNextQuestion}
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
        goToPreviousQuestion={mockPreviousQuestion}
        goToNextQuestion={mockNextQuestion}
      />
    );
    expect(screen.getByText('Back').parentElement).toBeDisabled();
  });

  test('should not disable the back button when not configed', () => {
    renderWithProviders(
      <CallToActions
        isBackDisabled={false}
        isNextDisabled={false}
        goToPreviousQuestion={mockPreviousQuestion}
        goToNextQuestion={mockNextQuestion}
      />
    );
    expect(screen.getByText('Back').parentElement).not.toBeDisabled();
  });

  test('should disable the next button when configed', () => {
    renderWithProviders(
      <CallToActions
        isBackDisabled={false}
        isNextDisabled={true}
        goToPreviousQuestion={mockPreviousQuestion}
        goToNextQuestion={mockNextQuestion}
      />
    );
    expect(screen.getByText('Next').parentElement).toBeDisabled();
  });

  test('should not disable the next button when not configed', () => {
    renderWithProviders(
      <CallToActions
        isBackDisabled={false}
        isNextDisabled={false}
        goToPreviousQuestion={mockPreviousQuestion}
        goToNextQuestion={mockNextQuestion}
      />
    );
    expect(screen.getByText('Next').parentElement).not.toBeDisabled();
  });

  test('should call the goToPreviousQuestion with previous page action on back click', () => {
    renderWithProviders(
      <CallToActions
        isBackDisabled={false}
        isNextDisabled={false}
        goToPreviousQuestion={mockPreviousQuestion}
        goToNextQuestion={mockNextQuestion}
      />
    );
    const backButton = screen.getByText('Back').parentElement;

    act(() => {
      fireEvent.click(backButton);
    });

    expect(mockPreviousQuestion).toHaveBeenCalled();
  });

  test('should call the goToPreviousQuestion with next page action on next click', async () => {
    renderWithProviders(
      <CallToActions
        isBackDisabled={false}
        isNextDisabled={false}
        goToPreviousQuestion={mockPreviousQuestion}
        goToNextQuestion={mockNextQuestion}
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
