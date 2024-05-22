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

  test('should render 1 button and 1 link-button', () => {
    renderWithProviders(
      <CallToActions
        isNextDisabled={false}
        goToPreviousQuestion={mockPreviousQuestion}
        goToNextQuestion={mockNextQuestion}
      />
    );
    expect(screen.getAllByText('Next')).toHaveLength(1);
    expect(screen.getAllByText('Back')).toHaveLength(1);
  });

  test('should disable the next button when configed', () => {
    renderWithProviders(
      <CallToActions
        isNextDisabled={true}
        goToPreviousQuestion={mockPreviousQuestion}
        goToNextQuestion={mockNextQuestion}
      />
    );
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled();
  });

  test('should not disable the next button when not configed', () => {
    renderWithProviders(
      <CallToActions
        isNextDisabled={false}
        goToPreviousQuestion={mockPreviousQuestion}
        goToNextQuestion={mockNextQuestion}
      />
    );
    expect(screen.getByRole('button', { name: 'Next' })).not.toBeDisabled();
  });

  test('should call the goToPreviousQuestion with previous page action on back click', () => {
    renderWithProviders(
      <CallToActions
        isNextDisabled={false}
        goToPreviousQuestion={mockPreviousQuestion}
        goToNextQuestion={mockNextQuestion}
      />
    );
    const backButton = screen.getByRole('button', { name: 'Back' });

    act(() => {
      fireEvent.click(backButton);
    });

    expect(mockPreviousQuestion).toHaveBeenCalled();
  });

  test('should call the goToPreviousQuestion with next page action on next click', async () => {
    renderWithProviders(
      <CallToActions
        isNextDisabled={false}
        goToPreviousQuestion={mockPreviousQuestion}
        goToNextQuestion={mockNextQuestion}
      />
    );
    const nextButton = screen.getByRole('button', { name: 'Next' });

    act(() => {
      fireEvent.click(nextButton);
    });
    await waitFor(() => {
      expect(mockNextQuestion).toHaveBeenCalled();
    });
  });
});
