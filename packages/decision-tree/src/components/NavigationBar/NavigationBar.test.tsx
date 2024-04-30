import React from 'react';
import { renderWithProviders, screen, fireEvent, act, waitFor } from '@tests/renderWithProviders';
import { NavigationBar } from './NavigationBar';
import { PaginationActions } from '@hooks';

describe('Navigation Bar', () => {
  const mockDispatch = jest.fn();
  const mockSubmitAnswer = jest.fn().mockResolvedValue('resolvedValue');

  afterAll(() => {
    mockDispatch.mockReset();
    mockSubmitAnswer.mockReset();
  });

  test('should render 1 button and 1 link', () => {
    renderWithProviders(
      <NavigationBar
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
      <NavigationBar
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
      <NavigationBar
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
      <NavigationBar
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
      <NavigationBar
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
      <NavigationBar
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

  test('should call the dispatch with next page action on next click', () => {
    renderWithProviders(
      <NavigationBar
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
    waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({ type: PaginationActions.NextQuestion });
    });
  });
});
