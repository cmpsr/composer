import React from 'react';
import { fireEvent, renderWithProviders, screen, waitFor } from '@tests/renderWithProviders';
import { MultipleChoice } from './MultipleChoice';
import { MultipleChoiceQuestion } from './types';
import { AnswerModel } from '@hooks';

describe('MultipleChoiceQuestion', () => {
  const data = {
    id: '1',
    question: 'hello there!',
    tooltip: 'question tooltip',
    type: 'multipleChoice',
    choices: [
      {
        id: '1',
        label: 'choice 1',
        subLabel: 'sublabel 1',
      },
      {
        id: '2',
        label: 'choice 2',
        subLabel: 'sublabel 2',
      },
    ],
  } as MultipleChoiceQuestion;

  const saveAnswer = jest.fn() as (payload: AnswerModel) => void;

  test('should call saveAnswer on value change on feet', async () => {
    renderWithProviders(<MultipleChoice defaultValue={null} data={data} saveAnswer={saveAnswer} />);

    fireEvent.click(screen.getByRole('checkbox', { name: 'choice 1 sublabel 1' }));

    await waitFor(() => {
      expect(saveAnswer).toHaveBeenCalledWith({ type: 'multipleChoice', values: ['1'] });
    });
  });
});
