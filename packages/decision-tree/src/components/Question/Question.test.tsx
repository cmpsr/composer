import React from 'react';
import { renderWithProviders, screen } from '@tests/renderWithProviders';
import { Question } from './Question';
import { HeightQuestion, MultipleChoiceQuestion, NumericQuestion, SingleChoiceQuestion } from './questionTypes';
import { QuestionBase } from './types';

describe('Question', () => {
  const baseData = {
    id: '1',
    label: 'hello there!',
  } as QuestionBase;

  const saveAnswer = jest.fn();
  const paginationDispatch = jest.fn();
  const submitIDKAnswer = jest.fn();

  afterAll(() => {
    saveAnswer.mockReset();
    paginationDispatch.mockReset();
    submitIDKAnswer.mockReset();
  });

  test('should render a singleChoice component when calling one', () => {
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

    screen.getAllByText('choice 1');
    screen.getAllByText('choice 2');
  });

  test('should render a numeric component when calling one', () => {
    const data = {
      ...baseData,
      type: 'number',
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

    screen.getAllByPlaceholderText('numericPlaceholder');
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

    screen.getAllByText('choice 1');
    screen.getAllByText('choice 2');
    screen.getAllByText('choice 3');
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
    screen.getAllByPlaceholderText('feetPlaceholder');
    screen.getAllByPlaceholderText('inchesPlaceholder');
  });

  test('should render a section Intro component when calling one', () => {
    const data = {
      ...baseData,
      type: 'sectionIntro',
      orderNumber: 2,
      description: 'section intro description',
    } as unknown as HeightQuestion;

    renderWithProviders(
      <Question
        submitIDKAnswer={submitIDKAnswer}
        paginationDispatch={paginationDispatch}
        data={data}
        saveAnswer={saveAnswer}
      />
    );

    screen.getByText('section intro description');
    screen.getByText('SECTION 2');
  });
});
