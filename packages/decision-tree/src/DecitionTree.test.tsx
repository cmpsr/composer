import React from 'react';
import { DecisionTree } from './DecisionTree';
import { renderWithProviders, screen, fireEvent, waitFor, act } from '@tests/renderWithProviders';
import { userQuestionnaire, serverMockup } from './tests/Questionnaire.mock';
import { UseSetupCallbackCB } from '@types';

describe('DecisionTree', () => {
  const callback = async function (questionId, value) {
    console.log(questionId, value);
    return serverMockup[questionId];
  } as UseSetupCallbackCB;

  test('should render the section intro', () => {
    renderWithProviders(<DecisionTree userQuestionnaire={userQuestionnaire} callback={callback} />);
    expect(screen.getAllByText('Next')).toHaveLength(1);
    expect(screen.getAllByText('Back')).toHaveLength(1);
    expect(screen.getAllByText('SECTION 1')).toHaveLength(1);
    expect(screen.getAllByText('Diet and Lifestyle')).toHaveLength(2);
  });

  test('should disable the back button and enable the next button', () => {
    renderWithProviders(<DecisionTree userQuestionnaire={userQuestionnaire} callback={callback} />);
    expect(screen.getByText('Back').parentElement).toBeDisabled();
    expect(screen.getByText('Next').parentElement).not.toBeDisabled();
  });

  test('should render the second question', async () => {
    renderWithProviders(<DecisionTree userQuestionnaire={userQuestionnaire} callback={callback} />);

    fireEvent.click(screen.getByText('Next').parentElement);

    await waitFor(() => {
      expect(screen.getAllByText('Next')).toHaveLength(1);
      expect(screen.getAllByText('Back')).toHaveLength(1);
      expect(screen.getAllByText('Male')).toHaveLength(1);
      expect(screen.getAllByText('Female')).toHaveLength(1);
      expect(screen.getAllByText('What sex were you assigned at birth?')).toHaveLength(1);
    });
  });

  test('should disable the next button on a question and enable the back button', async () => {
    renderWithProviders(<DecisionTree userQuestionnaire={userQuestionnaire} callback={callback} />);

    fireEvent.click(screen.getByText('Next').parentElement);

    await waitFor(() => {
      expect(screen.getByText('Back').parentElement).not.toBeDisabled();
      expect(screen.getByText('Next').parentElement).toBeDisabled();
    });
  });

  test('should enable next button on value select', async () => {
    renderWithProviders(<DecisionTree userQuestionnaire={userQuestionnaire} callback={callback} />);

    fireEvent.click(screen.getByText('Next').parentElement);

    await waitFor(() => {
      expect(screen.getAllByText('What sex were you assigned at birth?')).toHaveLength(1);
    });

    fireEvent.click(screen.getByText('Female'));

    expect(screen.getByText('Next').parentElement).not.toBeDisabled();
  });

  test('should display the next question on answering', async () => {
    renderWithProviders(<DecisionTree userQuestionnaire={userQuestionnaire} callback={callback} />);

    fireEvent.click(screen.getByText('Next').parentElement);

    await waitFor(() => {
      expect(screen.getAllByText('What sex were you assigned at birth?')).toHaveLength(1);
    });

    fireEvent.click(screen.getByText('Male'));
    fireEvent.click(screen.getByText('Next').parentElement);

    await waitFor(() => {
      expect(screen.getAllByTestId('cmpsr.input')).toHaveLength(2);
    });
  });

  test('should enable the back button on the second answer', async () => {
    renderWithProviders(<DecisionTree userQuestionnaire={userQuestionnaire} callback={callback} />);

    fireEvent.click(screen.getByText('Next').parentElement);

    await waitFor(() => {
      expect(screen.getAllByText('What sex were you assigned at birth?')).toHaveLength(1);
    });

    fireEvent.click(screen.getByText('Male'));
    fireEvent.click(screen.getByText('Next').parentElement);

    await waitFor(() => {
      expect(screen.getByText('Back').parentElement).not.toBeDisabled();
    });
  });

  test('should come back to the first question on clicking back', async () => {
    renderWithProviders(<DecisionTree userQuestionnaire={userQuestionnaire} callback={callback} />);

    await act(async () => {
      await fireEvent.click(screen.getByText('Next').parentElement);
    });

    await waitFor(() => {
      expect(screen.getAllByText('What sex were you assigned at birth?')).toHaveLength(1);
    });

    await act(async () => {
      await fireEvent.click(screen.getByText('Male'));
      await fireEvent.click(screen.getByText('Next').parentElement);
    });

    await waitFor(() => {
      expect(screen.getByText('Back').parentElement).not.toBeDisabled();
    });

    await act(async () => {
      await fireEvent.click(screen.getByText('Back').parentElement);
    });

    await waitFor(() => {
      expect(screen.getAllByText('Male')).toHaveLength(1);
      expect(screen.getAllByText('Female')).toHaveLength(1);
      expect(screen.getAllByText('What sex were you assigned at birth?')).toHaveLength(1);
    });
  });
});
