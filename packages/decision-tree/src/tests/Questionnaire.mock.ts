import { UserQuestionnaireType } from '@types';

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
      '3': { type: 'multipleChoice', values: ['1', '2'] },
    },
  },
  4: null,
};

export const userQuestionnaire: UserQuestionnaireType = {
  nextQuestion: {
    questionId: '1',
    sectionId: '1',
  },
  answers: {},
  questionnaire: {
    version: 1,

    sections: [
      {
        id: '1',
        name: 'Diet and Lifestyle',
        description: 'Diet And Lifestyle section description',
        questions: [
          {
            id: '1',
            type: 'singleChoice',
            label: 'What sex were you assigned at birth?',
            explanation: 'This is an text explaining why we are asking this particular question at this point.',
            tooltip: 'Tooltip for the question',
            options: [
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
            label: 'What is your current height?',
            explanation: 'This is an text explaining why we are asking this particular question at this point.',
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
        description: 'Symptoms section description',
        questions: [
          {
            id: '3',
            type: 'multipleChoice',
            label: 'Have you been experiencing these symptoms?',
            explanation: 'This is an text explaining why we are asking this particular question at this point.',
            tooltip: 'Tooltip for the question',
            options: [
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
        description: 'Physical section description',
        questions: [
          {
            id: '4',
            type: 'numeric',
            label: 'How much do you weigh?',
            explanation: 'This is an text explaining why we are asking this particular question at this point.',
            tooltip: 'Tooltip for the question',
            placeholder: 'Pounds',
            trailingMask: '(lbs)',
          },
        ],
      },
    ],
  },
};
