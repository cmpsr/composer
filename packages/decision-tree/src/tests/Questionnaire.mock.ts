import { UserQuestionnaireType } from '@types';

// Temp file to test
export const serverMockup = {
  1: {
    nextQuestion: { sectionId: '1', questionId: '2' },
    answers: [{ sectionId: '1', questionId: '1', type: 'singleChoice', value: '1' }],
  },
  2: {
    nextQuestion: { sectionId: '2', questionId: '3' },
    answers: [
      { sectionId: '1', questionId: '1', type: 'singleChoice', value: '1' },
      { sectionId: '1', questionId: '2', type: 'heightAnswer', feet: '5', inches: '5' },
    ],
  },
  3: {
    nextQuestion: { sectionId: '3', questionId: '4' },
    answers: [
      { sectionId: '1', questionId: '1', type: 'singleChoice', value: '1' },
      { sectionId: '1', questionId: '2', type: 'heightAnswer', feet: '5', inches: '5' },
      { sectionId: '2', questionId: '3', type: 'multipleChoice', values: ['1', '2'] },
    ],
  },
  4: null,
};

export const userQuestionnaire: UserQuestionnaireType = {
  nextQuestion: {
    questionId: '1',
    sectionId: '1',
  },
  answers: [],
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
            whyWeAskExplanation: 'This is an text explaining why we are asking this particular question at this point.',
            tooltip: 'Tooltip for the question',
            options: [
              {
                id: '1',
                label: 'Male',
                description: 'male description',
              },
              {
                id: '2',
                label: 'Female',
                description: 'female description',
              },
            ],
          },
          {
            id: '2',
            type: 'height',
            label: 'What is your current height?',
            whyWeAskExplanation: 'This is an text explaining why we are asking this particular question at this point.',
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
            whyWeAskExplanation: 'This is an text explaining why we are asking this particular question at this point.',
            tooltip: 'Tooltip for the question',
            options: [
              {
                id: '1',
                label: 'Male',
                description: 'standard description',
              },
              {
                id: '2',
                label: 'Female',
                description: 'standard description',
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
            type: 'number',
            label: 'How much do you weigh?',
            whyWeAskExplanation: 'This is an text explaining why we are asking this particular question at this point.',
            tooltip: 'Tooltip for the question',
            placeholder: 'Pounds',
            trailingMask: '(lbs)',
          },
        ],
      },
    ],
  },
};
