import React from 'react';
import { renderWithProviders, screen, fireEvent } from '@tests/renderWithProviders';
import { NavigationBar } from './NavigationBar';
import { DecisionTreeActionKind } from '../../hooks/usePagination/types';

describe('Navigation Bar', () => {
  const mockDispatch = jest.fn()

  afterAll(() => {
    mockDispatch.mockReset();
  });

  test('should render 1 button and 1 link', () => {
    renderWithProviders(<NavigationBar lastQuestion={5} currentQuestion={2} dispatch={mockDispatch} />);
    expect(screen.getAllByRole('button')).toHaveLength(1);
    expect(screen.getAllByRole('link')).toHaveLength(1);
  });

  test('should disable the back button on first page', () => {
    renderWithProviders(<NavigationBar lastQuestion={5} currentQuestion={1} dispatch={mockDispatch} />);
    expect(screen.getByRole('link')).toBeDisabled();
  });

  test('should not disable the back button on second page', () => {
    renderWithProviders(<NavigationBar lastQuestion={5} currentQuestion={2} dispatch={mockDispatch} />);
    expect(screen.getByRole('link')).not.toBeDisabled();
  });

  test('should disable the next button on last page', () => {
    renderWithProviders(<NavigationBar lastQuestion={5} currentQuestion={5} dispatch={mockDispatch} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('should not disable the next button on first page', () => {
    renderWithProviders(<NavigationBar lastQuestion={5} currentQuestion={1} dispatch={mockDispatch} />);
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  test('should call the dispatch with previous page action on back click', () => {
    renderWithProviders(<NavigationBar lastQuestion={5} currentQuestion={2} dispatch={mockDispatch} />);
    const backButton = screen.getByRole('link');
    fireEvent.click(backButton);
    expect(mockDispatch).toHaveBeenCalledWith({ type: DecisionTreeActionKind.PreviousQuestion});
  });

  test('should call the dispatch with next page action on next click', () => {
    renderWithProviders(<NavigationBar lastQuestion={5} currentQuestion={2} dispatch={mockDispatch} />);
    const nextButton = screen.getByRole('button');
    fireEvent.click(nextButton);
    expect(mockDispatch).toHaveBeenCalledWith({ type: DecisionTreeActionKind.NextQuestion});
  });

});
