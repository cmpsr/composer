import React from 'react';
import { act, fireEvent, renderWithProviders, screen, waitFor } from '@tests/renderWithProviders';
import { Height } from './Height';
import { QuestionBase } from '../../types';
import { HeightQuestion } from './types';
import { AnswerModel } from '@hooks';

describe('HeightQuestion', () => {
  const baseData = {
    id: '1',
    label: 'hello there!',
    whyWeAskExplanation: 'question tooltip',
  } as QuestionBase;

  const saveAnswer = jest.fn() as (payload: AnswerModel) => void;

  test('should call saveAnswer on value change on feet', async () => {
    const data = {
      ...baseData,
      type: 'height',
      feet: {
        placeholder: 'placeholderFeet',
        trailingMask: 'tralingMaskFeet',
      },
      inches: {
        placeholder: 'placeHolderInches',
        trailingMask: 'tralingMaskInches',
      },
    } as HeightQuestion;

    renderWithProviders(<Height defaultValue={null} data={data} saveAnswer={saveAnswer} />);

    await act(async () => {
      const input = screen.getByPlaceholderText(/placeholderFeet/);
      fireEvent.input(input, { target: { value: '4' } });
    });

    await waitFor(() => {
      expect(saveAnswer).toHaveBeenCalledWith({ type: 'height', feet: 4, inches: null });
    });
  });

  test('should call saveAnswer on value change on inches', async () => {
    const data = {
      ...baseData,
      type: 'height',
      feet: {
        placeholder: 'placeholderFeet',
        trailingMask: 'tralingMaskFeet',
      },
      inches: {
        placeholder: 'placeHolderInches',
        trailingMask: 'tralingMaskInches',
      },
    } as HeightQuestion;

    renderWithProviders(<Height defaultValue={null} data={data} saveAnswer={saveAnswer} />);

    const input = screen.getByPlaceholderText(/placeHolderInches/);
    fireEvent.input(input, { target: { value: '4' } });

    await waitFor(() => {
      expect(saveAnswer).toHaveBeenCalledWith({ type: 'height', feet: null, inches: 4 });
    });
  });
});
