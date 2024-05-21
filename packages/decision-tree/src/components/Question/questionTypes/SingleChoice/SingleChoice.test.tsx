import React from 'react';
import { fireEvent, renderWithProviders, screen, waitFor } from '@tests/renderWithProviders';
import { SingleChoice } from './SingleChoice';
import { QuestionBase } from '../../types';
import { SingleChoiceQuestion } from './types';
import { AnswerModel } from '@hooks';

describe('SingleChoiceQuestion', () => {
  const baseData = {
    id: '1',
    question: 'hello there!',
    tooltip: 'question tooltip',
  } as QuestionBase;

  const saveAnswer = jest.fn() as (payload: AnswerModel) => void;

  test('should render a singleChoide component when calling one', async () => {
    const data = {
      ...baseData,
      type: 'singleChoice',
      choices: [
        { id: '1', label: 'choice 1' },
        { id: '2', label: 'choice 2' },
      ],
    } as SingleChoiceQuestion;

    renderWithProviders(<SingleChoice defaultValue={null} data={data} saveAnswer={saveAnswer} />);

    fireEvent.click(screen.getByRole('radio', { name: 'choice 1' }));

    await waitFor(() => {
      expect(saveAnswer).toHaveBeenCalledWith({ type: 'singleChoice', value: '1' });
    });
  });
});
