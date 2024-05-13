import React from 'react';
import { renderWithProviders, screen, act, fireEvent, waitFor } from '@tests/renderWithProviders';
import { IDontKnowButton } from './IDontKnowButton';
import { PaginationActions } from '@hooks';

describe('IDontKnowButton', () => {
  const BEResponse = {
    nextQuestion: {
      sectionId: '4',
      questionId: '8',
    },
    answers: {
      '3': '6',
    },
  };
  const mockIDKAnswer = jest.fn().mockResolvedValue(BEResponse);
  const mockDispatch = jest.fn();

  afterEach(() => {
    mockIDKAnswer.mockReset();
    mockDispatch.mockReset();
  });

  test('should call the IDKAnswer function on click', () => {
    renderWithProviders(<IDontKnowButton submitIDKAnswer={mockIDKAnswer} paginationDispatch={mockDispatch} />);

    const idkButton = screen.getByText('I&aposm not sure right now').parentElement;

    act(() => {
      fireEvent.click(idkButton);
    });

    expect(mockIDKAnswer).toHaveBeenCalledWith('3');
  });

  test('should call the next question action function', async () => {
    renderWithProviders(<IDontKnowButton submitIDKAnswer={mockIDKAnswer} paginationDispatch={mockDispatch} />);

    const idkButton = screen.getByText('I&aposm not sure right now').parentElement;

    act(() => {
      fireEvent.click(idkButton);
    });

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({ type: PaginationActions.NextQuestion, payload: undefined });
    });
  });
});
