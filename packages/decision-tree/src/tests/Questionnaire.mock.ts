import { QuestionnaireType } from '@types';

// Temp file to test
export const serverMockup = {
  1: { nextQuestion: { sectionId: '1', questionId: '2' }, answers: { '1': { type: 'singleChoice', value: '1' } } },
  2: {
    nextQuestion: { sectionId: '2', questionId: '3' },
    answers: { '1': { type: 'singleChoice', value: '1' }, '2': { type: 'heightAnswer', feet: '5', inches: '5' } },
  },
  3: {
    nextQuestion: { sectionId: '3', questionId: '4' },
    answers: {
      '1': { type: 'singleChoice', value: '1' },
      '2': { type: 'heightAnswer', feet: '5', inches: '5' },
      '3': { type: 'multipleChoice', values: ['1'] },
    },
  },
  4: null,
};

export const questionnaire: QuestionnaireType = {
  version: 1,
  nextQuestion: {
    questionId: '1',
    sectionId: '1',
  },
  answers: {},
  sections: [
    {
      id: '1',
      name: 'Diet and Lifestyle',
      questions: [
        {
          id: '1',
          type: 'singleChoice',
          question: 'What sex were you assigned at birth?',
          tooltip: 'Tooltip for the question',
          choices: [
            {
              id: '1',
              label: 'Male',
              subLabel: 'male sublabel',
            },
            {
              id: '2',
              label: 'Female',
              subLabel: 'female sublabel',
            },
          ],
        },
        {
          id: '2',
          type: 'height',
          question: 'What is your current height?',
          tooltip: 'Tooltip for the question',
          feet: {
            placeholder: 'Feet',
            trailingMask: '(ft)',
          },
          inches: {
            placeholder: 'Inches',
            trailingMask: '(in)',
          },
        },
      ],
    },
    {
      id: '2',
      name: 'Symptoms',
      questions: [
        {
          id: '3',
          type: 'multipleChoice',
          question: 'Have you been experiencing these symptoms?',
          tooltip: 'Tooltip for the question',
          choices: [
            {
              id: '1',
              label: 'Male',
              subLabel: 'standard sublabel',
            },
            {
              id: '2',
              label: 'Female',
              subLabel: 'standard sublabel',
            },
          ],
        },
      ],
    },
    {
      id: '3',
      name: 'Physical',
      questions: [
        {
          id: '4',
          type: 'numeric',
          question: 'How much do you weigh?',
          tooltip: 'Tooltip for the question',
          placeholder: 'Pounds',
          trailingMask: '(lbs)',
        },
      ],
    },
  ],
};
