// Temp file to test

export const steps = [
  {
    id: 1,
    label: 'Diet and Lifestyle',
  },
  {
    id: 2,
    label: 'Symptoms',
  },
];

export const questions = [
  {
    id: 'gender',
    order: 1,
    step: 1,
    type: 'singleChoice',
    question: 'What sex were you assigned at birth?',
    tooltip: 'Tooltip for the question',
    choices: [
      {
        id: '1',
        label: 'Male',
      },
      {
        id: '2',
        label: 'Female',
      },
    ],
  },
  {
    id: 'height',
    order: 2,
    step: 1,
    type: 'numeric',
    question: 'What is your current height?',
    tooltip: 'Tooltip for the question',
    inputs: [
      {
        id: '1',
        placeholder: 'Feet',
      },
      {
        id: '2',
        placeholder: 'Inches',
      },
    ],
  },
  {
    id: 'symptoms',
    order: 3,
    step: 2,
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
];
