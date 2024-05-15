import React from 'react';
import { renderWithProviders, screen } from '@tests/renderWithProviders';
import { Question } from './Question';
import { HeightQuestion, MultipleChoiceQuestion, NumericQuestion, SingleChoiceQuestion } from './questionTypes';
import { QuestionBase } from './types';

describe('Question', () => {
  const baseData = {
    id: '1',
    label: 'hello there!',
    tooltip: 'question tooltip',
  } as QuestionBase;

  const saveAnswer = jest.fn();
  const paginationDispatch = jest.fn();
  const submitIDKAnswer = jest.fn();

  afterAll(() => {
    saveAnswer.mockReset();
    paginationDispatch.mockReset();
    submitIDKAnswer.mockReset();
  });

  test('should render a singleChoide component when calling one', () => {
    const data = {
      ...baseData,
      type: 'singleChoice',
      options: [
        { id: '1', label: 'choice 1' },
        { id: '2', label: 'choice 2' },
      ],
    } as SingleChoiceQuestion;
    renderWithProviders(
      <Question
        submitIDKAnswer={submitIDKAnswer}
        paginationDispatch={paginationDispatch}
        data={data}
        saveAnswer={saveAnswer}
      />
    );

    expect(screen.getAllByText('choice 1')).toHaveLength(1);
    expect(screen.getAllByText('choice 2')).toHaveLength(1);
  });

  test('should render a numeric component when calling one', () => {
    const data = {
      ...baseData,
      type: 'numeric',
      placeholder: 'numericPlaceholder',
      trailingMask: ' fo sho',
    } as NumericQuestion;
    renderWithProviders(
      <Question
        submitIDKAnswer={submitIDKAnswer}
        paginationDispatch={paginationDispatch}
        data={data}
        saveAnswer={saveAnswer}
      />
    );

    expect(screen.getAllByPlaceholderText('numericPlaceholder')).toHaveLength(1);
  });

  test('should render a multipleChoice component when calling one', () => {
    const data = {
      ...baseData,
      type: 'multipleChoice',
      options: [
        { id: '1', label: 'choice 1' },
        { id: '2', label: 'choice 2' },
        { id: '3', label: 'choice 3' },
      ],
    } as MultipleChoiceQuestion;
    renderWithProviders(
      <Question
        submitIDKAnswer={submitIDKAnswer}
        paginationDispatch={paginationDispatch}
        data={data}
        saveAnswer={saveAnswer}
      />
    );

    expect(screen.getAllByText('choice 1')).toHaveLength(1);
    expect(screen.getAllByText('choice 2')).toHaveLength(1);
    expect(screen.getAllByText('choice 3')).toHaveLength(1);
  });

  test('should render a height component when calling one', () => {
    const data = {
      ...baseData,
      type: 'height',
      feet: {
        placeholder: 'feetPlaceholder',
        trailingMask: ' fo sho',
      },
      inches: {
        placeholder: 'inchesPlaceholder',
        trailingMask: ' fo sho',
      },
    } as HeightQuestion;
    renderWithProviders(
      <Question
        submitIDKAnswer={submitIDKAnswer}
        paginationDispatch={paginationDispatch}
        data={data}
        saveAnswer={saveAnswer}
      />
    );

    expect(screen.getAllByPlaceholderText('feetPlaceholder')).toHaveLength(1);
    expect(screen.getAllByPlaceholderText('inchesPlaceholder')).toHaveLength(1);
  });
});
