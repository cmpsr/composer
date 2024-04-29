import React from 'react';
import { renderWithProviders, screen, act, fireEvent } from '@tests/renderWithProviders';
import { IDontKnowButton } from './IDontKnowButton';
import { PaginationActions } from '@hooks';

describe('IDontKnowButton', () => {
  const BEAnswer = {
    nextQuestion: {
      sectionId: '4',
      questionId: '8',
    },
    answers: {
      '3': '6',
    },
  };
  const mockIDKAnswer = jest.fn().mockResolvedValue(BEAnswer);
  const mockDispatch = jest.fn();

  afterEach(() => {
    mockIDKAnswer.mockReset();
    mockDispatch.mockReset();
  });

  test('should call the IDKAnswer FN on click', () => {
    renderWithProviders(
      <IDontKnowButton iDontKnowAnswer={mockIDKAnswer} currentPage="3" paginationDispatch={mockDispatch} />
    );

    const idkButton = screen.getByRole('link');

    act(() => {
      fireEvent.click(idkButton);
    });

    expect(mockIDKAnswer).toHaveBeenCalledWith('3');
  });

  test('should call the next question action function', () => {
    renderWithProviders(
      <IDontKnowButton iDontKnowAnswer={mockIDKAnswer} currentPage="3" paginationDispatch={mockDispatch} />
    );

    const idkButton = screen.getByRole('link');

    act(() => {
      fireEvent.click(idkButton);
    });

    expect(mockDispatch).toHaveBeenCalledWith({ type: PaginationActions.NextQuestion, payload: BEAnswer });
  });
});
