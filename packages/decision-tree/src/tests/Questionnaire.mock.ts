// Temp file to test

export const questionnaire = {
  version: 1,
  nextQuestionId: '1',
  nextSectionId: '1',
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
      name: 'Symptoms',
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
