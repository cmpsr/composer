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

  test('should render the section intro', () => {
    renderWithProviders(<DecisionTree questionnaire={questionnaire} callback={callback} />);
    expect(screen.getByText('Next'));
    expect(screen.getByText('Back'));
    expect(screen.getByText('SECTION 1'));
    expect(screen.getAllByText('Diet and Lifestyle')).toHaveLength(2);
  });

  test('should disable the back button and enable the next button', () => {
    renderWithProviders(<DecisionTree questionnaire={questionnaire} callback={callback} />);
    expect(screen.getByRole('button', { name: 'Back' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Next' })).not.toBeDisabled();
  });

  test('should render the second question', async () => {
    renderWithProviders(<DecisionTree questionnaire={questionnaire} callback={callback} />);

    fireEvent.click(screen.getByText('Next'));

    await waitFor(() => {
      expect(screen.getByText('Next'));
      expect(screen.getByText('Back'));
      expect(screen.getByText('Male'));
      expect(screen.getByText('Female'));
      expect(screen.getByText('What sex were you assigned at birth?'));
    });
  });

  test('should disable the next button on a question and enable the back button', async () => {
    renderWithProviders(<DecisionTree questionnaire={questionnaire} callback={callback} />);

    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Back' })).not.toBeDisabled();
      expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled();
    });
  });

  test('should enable next button on value select', async () => {
    renderWithProviders(<DecisionTree questionnaire={questionnaire} callback={callback} />);

    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    await waitFor(() => {
      expect(screen.getByText('What sex were you assigned at birth?'));
    });

    fireEvent.click(screen.getByText('Female'));

    expect(screen.getByRole('button', { name: 'Next' })).not.toBeDisabled();
  });

  test('should display the next question on answering', async () => {
    renderWithProviders(<DecisionTree questionnaire={questionnaire} callback={callback} />);

    fireEvent.click(screen.getByText('Next'));

    await waitFor(() => {
      expect(screen.getByText('What sex were you assigned at birth?'));
    });

    fireEvent.click(screen.getByText('Male'));
    fireEvent.click(screen.getByText('Next'));

    await waitFor(() => {
      screen.getByPlaceholderText('Feet');
      screen.getByPlaceholderText('Inches');
    });
  });

  test('should enable the back button on the second answer', async () => {
    renderWithProviders(<DecisionTree questionnaire={questionnaire} callback={callback} />);

    fireEvent.click(screen.getByText('Next'));

    await waitFor(() => {
      expect(screen.getByText('What sex were you assigned at birth?'));
    });

    fireEvent.click(screen.getByText('Male'));
    fireEvent.click(screen.getByText('Next'));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Back' })).not.toBeDisabled();
    });
  });

  test('should come back to the first question on clicking back', async () => {
    renderWithProviders(<DecisionTree questionnaire={questionnaire} callback={callback} />);

    fireEvent.click(screen.getByText('Next'));

    await waitFor(() => {
      expect(screen.getByText('What sex were you assigned at birth?'));
    });

    fireEvent.click(screen.getByText('Male'));
    fireEvent.click(screen.getByText('Next'));

    await waitFor(() => {
      expect(screen.getByText('Back')).not.toBeDisabled();
    });

    fireEvent.click(screen.getByText('Back'));

    await waitFor(() => {
      screen.getByText('Male');
      screen.getByText('Female');
      screen.getByText('What sex were you assigned at birth?');
    });
  });
});
