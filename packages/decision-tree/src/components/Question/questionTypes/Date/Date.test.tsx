import React from 'react';
import { act, fireEvent, renderWithProviders, screen, waitFor } from '@tests/renderWithProviders';
import { DateComp } from './Date';
import { DateQuestion } from './types';
import { AnswerModel } from '@hooks';

describe('DateQuestion', () => {
  const data = {
    id: '1',
    label: 'hello there!',
    whyWeAskExplanation: 'question tooltip',
    type: 'date',
    placeholder: 'placeholderDate',
  } as DateQuestion;

  const saveAnswer = jest.fn() as (payload: AnswerModel) => void;

  test('should call saveAnswer on value change on feet', async () => {
    renderWithProviders(<DateComp data={data} saveAnswer={saveAnswer} />);

    await act(async () => {
      const input = screen.getByPlaceholderText(/placeholderDate/);
      fireEvent.input(input, { target: { value: '01012012' } });
    });

    await waitFor(() => {
      expect(saveAnswer).toHaveBeenCalledWith({ type: 'date', value: '2012-01-01T00:00:00+01:00' });
    });
  });
});
