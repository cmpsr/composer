import { UserQuestionnaireType } from '@types';

export const serverMockup = {
  '1': {
    nextQuestion: { questionId: '2', sectionId: '1-demographics' },
    answers: [{ questionId: '1', sectionId: '1-demographics', answer: { value: 'female', type: 'singleChoice' } }],
  },
  '2': {
    nextQuestion: { questionId: '3', sectionId: '1-demographics' },
    answers: [
      { questionId: '1', sectionId: '1-demographics', answer: { value: 'female', type: 'singleChoice' } },
      {
        questionId: '2',
        sectionId: '1-demographics',
        answer: { value: 'asian-pacific-islander', type: 'singleChoice' },
      },
    ],
  },
  '3': {
    nextQuestion: { questionId: '4', sectionId: '1-demographics' },
    answers: [
      { questionId: '1', sectionId: '1-demographics', answer: { value: 'female', type: 'singleChoice' } },
      {
        questionId: '2',
        sectionId: '1-demographics',
        answer: { value: 'asian-pacific-islander', type: 'singleChoice' },
      },
      { questionId: '3', sectionId: '1-demographics', answer: { value: '01/01/2001', type: 'date' } },
    ],
  },
  '4': {
    nextQuestion: { questionId: '5', sectionId: '1-demographics' },
    answers: [
      { questionId: '1', sectionId: '1-demographics', answer: { value: 'female', type: 'singleChoice' } },
      {
        questionId: '2',
        sectionId: '1-demographics',
        answer: { value: 'asian-pacific-islander', type: 'singleChoice' },
      },
      { questionId: '3', sectionId: '1-demographics', answer: { value: '01/01/2000', type: 'date' } },
      { questionId: '4', sectionId: '1-demographics', answer: { value: 'brown', type: 'singleChoice' } },
    ],
  },
  '5': {
    nextQuestion: { questionId: '6', sectionId: '2-diet-and-lifestyle' },
    answers: [
      { questionId: '1', sectionId: '1-demographics', answer: { value: 'female', type: 'singleChoice' } },
      {
        questionId: '2',
        sectionId: '1-demographics',
        answer: { value: 'asian-pacific-islander', type: 'singleChoice' },
      },
      { questionId: '3', sectionId: '1-demographics', answer: { value: '01/01/2000', type: 'date' } },
      { questionId: '4', sectionId: '1-demographics', answer: { value: 'brown', type: 'singleChoice' } },
      { questionId: '5', sectionId: '1-demographics', answer: { value: 'green', type: 'singleChoice' } },
    ],
  },
  '6': {
    nextQuestion: { questionId: '7', sectionId: '2-diet-and-lifestyle' },
    answers: [
      { questionId: '1', sectionId: '1-demographics', answer: { value: 'female', type: 'singleChoice' } },
      {
        questionId: '2',
        sectionId: '1-demographics',
        answer: { value: 'asian-pacific-islander', type: 'singleChoice' },
      },
      { questionId: '3', sectionId: '1-demographics', answer: { value: '01/01/2000', type: 'date' } },
      { questionId: '4', sectionId: '1-demographics', answer: { value: 'brown', type: 'singleChoice' } },
      { questionId: '5', sectionId: '1-demographics', answer: { value: 'green', type: 'singleChoice' } },
      { questionId: '6', sectionId: '1-demographics', answer: { value: 'yes', type: 'singleChoice' } },
    ],
  },
  '7': {
    nextQuestion: { questionId: '8', sectionId: '2-diet-and-lifestyle' },
    answers: [
      { questionId: '1', sectionId: '1-demographics', answer: { value: 'female', type: 'singleChoice' } },
      {
        questionId: '2',
        sectionId: '1-demographics',
        answer: { value: 'asian-pacific-islander', type: 'singleChoice' },
      },
      { questionId: '3', sectionId: '1-demographics', answer: { value: '01/01/2000', type: 'date' } },
      { questionId: '4', sectionId: '1-demographics', answer: { value: 'brown', type: 'singleChoice' } },
      { questionId: '5', sectionId: '1-demographics', answer: { value: 'green', type: 'singleChoice' } },
      { questionId: '6', sectionId: '1-demographics', answer: { value: 'yes', type: 'singleChoice' } },
      { questionId: '7', sectionId: '2-diet-and-lifestyle', answer: { feet: '4 ', inches: '4 ', type: 'height' } },
    ],
  },
};

export const userQuestionnaire: UserQuestionnaireType = {
  nextQuestion: { questionId: '1', sectionId: '1-demographics' },
  answers: [
    { questionId: '1', sectionId: '1-demographics', answer: { value: 'female', type: 'singleChoice' } },
    { questionId: '2', sectionId: '1-demographics', answer: { value: 'asian-pacific-islander', type: 'singleChoice' } },
    { questionId: '3', sectionId: '1-demographics', answer: { value: '01/01/2000', type: 'date' } },
    { questionId: '4', sectionId: '1-demographics', answer: { value: 'brown', type: 'singleChoice' } },
    { questionId: '5', sectionId: '1-demographics', answer: { value: 'green', type: 'singleChoice' } },
    { questionId: '6', sectionId: '1-demographics', answer: { value: 'yes', type: 'singleChoice' } },
    { questionId: '7', sectionId: '2-diet-and-lifestyle', answer: { feet: '4 ', inches: '4 ', type: 'height' } },
    { questionId: '8', sectionId: '2-diet-and-lifestyle', answer: { value: 4, type: 'number' } },
  ],
  questionnaire: {
    version: 1,
    sections: [
      {
        id: '1-demographics',
        name: 'Demographics',
        description: 'Demographics section description...',
        questions: [
          {
            id: '1',
            label: 'What sex were you assigned at birth?',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: null,
            options: [
              { id: 'male', label: 'Male', description: null },
              { id: 'female', label: 'Female', description: null },
            ],
            type: 'singleChoice',
          },
          {
            id: '2',
            label: 'What best describes your race/ethnicity?',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: null,
            options: [
              { id: 'american-indian-alaskan-native', label: 'American Indian / Alaska Native', description: null },
              { id: 'asian-pacific-islander', label: 'Asian / Pacific Islander', description: null },
              { id: 'black', label: 'Black', description: null },
              { id: 'hispanic-or-latino', label: 'Hispanic or Latino', description: null },
              { id: 'white', label: 'White', description: null },
              { id: 'other', label: 'other', description: null },
              { id: 'none', label: 'none', description: null, type: 'none' },
            ],
            type: 'multipleChoice',
          },
          {
            id: '3',
            label: 'What is your birthdate?',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: null,
            placeholder: 'MM/DD/YYYY',
            type: 'date',
          },
          {
            id: '4',
            label: 'What is your natural hair color?',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: null,
            options: [
              { id: 'black', label: 'Black', description: null },
              { id: 'brown', label: 'Brown', description: null },
              { id: 'blonde', label: 'Blonde', description: null },
              { id: 'red', label: 'Red', description: null },
            ],
            type: 'singleChoice',
          },
          {
            id: '5',
            label: 'What color are your eyes?',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: null,
            options: [
              { id: 'brown', label: 'Brown', description: null },
              { id: 'blue', label: 'Blue', description: null },
              { id: 'green', label: 'Green', description: null },
              { id: 'hazel', label: 'Hazel', description: null },
              { id: 'gray', label: 'Gray', description: null },
              { id: 'amber', label: 'Amber', description: null },
            ],
            type: 'singleChoice',
          },
          {
            id: '6',
            label: 'Do you have naturally fair skin?',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: null,
            options: [
              { id: 'yes', label: 'Yes', description: null },
              { id: 'no', label: 'No', description: null },
            ],
            type: 'singleChoice',
          },
        ],
      },
      {
        id: '2-diet-and-lifestyle',
        name: 'Diet and Lifestyle',
        description: 'Diet and Lifestyle description...',
        questions: [
          {
            id: '7',
            label: 'What is your current height?',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: 'height',
            type: 'height',
            feet: { placeholder: 'feet', trailingMask: '(ft)' },
            inches: { placeholder: 'inches', trailingMask: '(in)' },
          },
          {
            id: '8',
            label: 'What is your current weight?',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: null,
            placeholder: 'weight',
            trailingMask: 'lbs',
            type: 'number',
          },
          {
            id: '9',
            label: 'How many servings of fruits and vegetables do you consume daily?',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: null,
            options: [
              { id: '0', label: 'Less than 1 serving', description: null },
              { id: '1', label: '1 serving', description: null },
              { id: '2', label: '2 servings', description: null },
              { id: '3', label: '3 servings', description: null },
              { id: '4', label: '4 servings', description: null },
              { id: '5+', label: '5+ servings', description: null },
            ],
            type: 'singleChoice',
          },
          {
            id: '10',
            label: 'How many servings of whole grains and legumes (e.g. beans, lentils) do you consume daily?',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: null,
            options: [
              { id: '0', label: 'Less than 1 serving', description: null },
              { id: '1', label: '1 serving', description: null },
              { id: '2', label: '2 servings', description: null },
              { id: '3', label: '3 servings', description: null },
              { id: '4', label: '4 servings', description: null },
              { id: '5+', label: '5+ servings', description: null },
            ],
            type: 'singleChoice',
          },
          {
            id: '11',
            label:
              'How often do you consume cured, pickled, or salt-preserved foods (vegetables, fish, meats) or processed meats?',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: null,
            options: [
              { id: 'multiple-times-a-day', label: 'Multiple times a day', description: null },
              { id: 'about-once-a-day', label: 'About once a day', description: null },
              { id: 'a-few-times-a-week', label: 'A few times a week', description: null },
              { id: 'once-a-week-or-less', label: 'Once a week or less', description: null },
            ],
            type: 'singleChoice',
          },
          {
            id: '12',
            label: 'On average, how many servings of unprocessed red meat do you consume per week?',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: null,
            options: [
              { id: '0', label: 'Less than 1 serving', description: null },
              { id: '1-6', label: '1-6 servings', description: null },
              { id: '7-13', label: '7-13 servings', description: null },
              { id: '14-20', label: '14-20 servings', description: null },
              { id: '21+', label: '21+ servings', description: null },
            ],
            type: 'singleChoice',
          },
          {
            id: '13',
            label: 'On average, how many servings of processed meat do you consume per week?',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: null,
            options: [
              { id: '0', label: 'Less than 1 serving', description: null },
              { id: '1-6', label: '1-6 servings', description: null },
              { id: '7-13', label: '7-13 servings', description: null },
              { id: '14-20', label: '14-20 servings', description: null },
              { id: '21+', label: '21+ servings', description: null },
            ],
            type: 'singleChoice',
          },
          {
            id: '14',
            label: 'On average, how many servings of dairy do you consume per week?',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: null,
            options: [
              { id: '0', label: 'Less than 1 serving', description: null },
              { id: '1-3', label: '1-3 servings', description: null },
              { id: '4-6', label: '4-6 servings', description: null },
              { id: '7-13', label: '7-13 servings', description: null },
              { id: '14+', label: '14+ servings', description: null },
            ],
            type: 'singleChoice',
          },
          {
            id: '15',
            label: 'On average, how many servings of fatty fish do you consume per week?',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: null,
            options: [
              { id: '0', label: 'Less than 1 serving', description: null },
              { id: '1-3', label: '1-3 servings', description: null },
              { id: '4-6', label: '4-6 servings', description: null },
              { id: '7-13', label: '7-13 servings', description: null },
              { id: '14+', label: '14+ servings', description: null },
            ],
            type: 'singleChoice',
          },
          {
            id: '16',
            label: 'On average, how many servings of tomato-based foods do you eat per week?',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: null,
            options: [
              { id: '0', label: 'Less than 1 serving', description: null },
              { id: '1-3', label: '1-3 servings', description: null },
              { id: '4-6', label: '4-6 servings', description: null },
              { id: '7+', label: '7+ servings', description: null },
            ],
            type: 'singleChoice',
          },
          {
            id: '17',
            label: 'On average, how many meals per week are pre-prepared, frozen, or from a restaurant?',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: null,
            options: [
              { id: '0', label: 'Less than 1 meal', description: null },
              { id: '1-3', label: '1-3 meals', description: null },
              { id: '4-6', label: '4-6 meals', description: null },
              { id: '7+', label: '7+ meals', description: null },
            ],
            type: 'singleChoice',
          },
          {
            id: '18',
            label: 'On average, how many cups of coffee do you consume per day?',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: null,
            options: [
              { id: '0', label: 'Less than 1 cup', description: null },
              { id: '1', label: '1 cup', description: null },
              { id: '2', label: '2 cups', description: null },
              { id: '3+', label: '3+ cups', description: null },
            ],
            type: 'singleChoice',
          },
          {
            id: '19',
            label:
              'On average, how many alcoholic drinks (e.g. 12oz beer, 5oz wine, 1.5oz liquor) do you consume per week?',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: null,
            options: [
              { id: '0', label: 'Less than 1 drink', description: null },
              { id: '1-3', label: '1-3 drinks', description: null },
              { id: '4-7', label: '4-7 drinks', description: null },
              { id: '8-14', label: '8-14 drinks', description: null },
              { id: '15+', label: '15+ drinks', description: null },
            ],
            type: 'singleChoice',
          },
          {
            id: '20',
            label: 'Do you currently or formerly smoke cigarettes?',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: null,
            options: [
              { id: 'never', label: 'Never smoked', description: null },
              { id: 'former', label: 'Former smoker', description: null },
              { id: 'current', label: 'Current smoker', description: null },
            ],
            type: 'singleChoice',
          },
          {
            id: '21',
            label: 'If so, for how long?',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: null,
            placeholder: 'Number of years',
            trailingMask: 'years',
            type: 'number',
          },
          {
            id: '22',
            label: 'If so, roughly how many cigarettes per day? (if you smoke cigars, 1 cigar = 10 cigarettes)',
            whyWeAskExplanation: 'Should be a proper explanation of why we ask this question...',
            skippable: true,
            description: null,
            options: [
              { id: '1-9', label: '1-9', description: null },
              { id: '10-19', label: '10-19', description: null },
              { id: '20-29', label: '20-29', description: null },
              { id: '30+', label: '30+', description: null },
            ],
            type: 'singleChoice',
          },
        ],
      },
    ],
  },
};
