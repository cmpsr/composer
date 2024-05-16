import React from 'react';
import { act, fireEvent, renderWithProviders, screen, waitFor } from '@tests/renderWithProviders';
import { Numeric } from './Numeric';
import { NumericQuestion } from './types';
import { AnswerModel } from '@hooks';

describe('NumericQuestion', () => {
  const data = {
    id: '1',
    question: 'hello there!',
    tooltip: 'question tooltip',
    type: 'numeric',

    placeholder: 'placeholderNumeric',
    trailingMask: 'tralingMaskNumeric',
  } as NumericQuestion;

  const saveAnswer = jest.fn() as (payload: AnswerModel) => void;

  test('should call saveAnswer on value change on feet', async () => {
    renderWithProviders(<Numeric data={data} saveAnswer={saveAnswer} />);

    await act(async () => {
      const input = screen.getByPlaceholderText(/placeholderNumeric/);
      fireEvent.input(input, { target: { value: '4' } });
    });

    await waitFor(() => {
      expect(saveAnswer).toHaveBeenCalledWith({ type: 'numeric', value: 4 });
    });
  });
});