import React from 'react';
import { DecisionTree } from './DecisionTree';
import { renderWithProviders, screen, fireEvent, waitFor } from '@tests/renderWithProviders';
import { questionnaire, serverMockup } from './tests/Questionnaire.mock';
import { UseSetupCallbackCB } from '@types';

describe('DecisionTree', () => {
  const callback = async function (questionId, value) {
    console.log(questionId, value);
    return serverMockup[questionId];
  } as UseSetupCallbackCB;

  test('should render all the components', () => {
    renderWithProviders(<DecisionTree questionnaire={questionnaire} callback={callback} />);
    expect(screen.getAllByText('Next')).toHaveLength(1);
    expect(screen.getAllByText('Back')).toHaveLength(1);
    expect(screen.getAllByText('Male')).toHaveLength(1);
    expect(screen.getAllByText('Female')).toHaveLength(1);
    expect(screen.getAllByText('What sex were you assigned at birth?')).toHaveLength(1);
  });

  test('should disable both buttons by default', () => {
    renderWithProviders(<DecisionTree questionnaire={questionnaire} callback={callback} />);
    expect(screen.getByText('Back').parentElement).toBeDisabled();
    expect(screen.getByText('Next').parentElement).toBeDisabled();
  });

  test('should enable next button on value select', () => {
    renderWithProviders(<DecisionTree questionnaire={questionnaire} callback={callback} />);

    fireEvent.click(screen.getByText('Female'));

    expect(screen.getByText('Next').parentElement).not.toBeDisabled();
  });

  test('should display the next question on answering', async () => {
    renderWithProviders(<DecisionTree questionnaire={questionnaire} callback={callback} />);

    fireEvent.click(screen.getByText('Male'));
    fireEvent.click(screen.getByText('Next').parentElement);

    await waitFor(() => {
      expect(screen.getAllByTestId('cmpsr.input')).toHaveLength(2);
    });
  });

  test('should enable the back button on the second answer', async () => {
    renderWithProviders(<DecisionTree questionnaire={questionnaire} callback={callback} />);

    fireEvent.click(screen.getByText('Male'));
    fireEvent.click(screen.getByText('Next').parentElement);

    await waitFor(() => {
      expect(screen.getByText('Back').parentElement).not.toBeDisabled();
    });
  });

  test('should come back to the first question on clicking back', async () => {
    renderWithProviders(<DecisionTree questionnaire={questionnaire} callback={callback} />);

    fireEvent.click(screen.getByText('Male'));
    fireEvent.click(screen.getByText('Next').parentElement);

    await waitFor(() => {
      expect(screen.getByText('Back').parentElement).not.toBeDisabled();
    });

    fireEvent.click(screen.getByText('Back').parentElement);

    await waitFor(() => {
      expect(screen.getAllByText('Male')).toHaveLength(1);
      expect(screen.getAllByText('Female')).toHaveLength(1);
      expect(screen.getAllByText('What sex were you assigned at birth?')).toHaveLength(1);
    });
  });
});
