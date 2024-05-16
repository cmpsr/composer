import { normalizeQuestionnaire, sectionIntroId } from './DecisionTree.normalizer';
import { QuestionnaireType } from '@types';

describe('Normalize Questionnaire', () => {
  const questionnaire = {
    version: 1,
    nextQuestion: {},
    answers: {},
    sections: [
      {
        id: '1',
        name: 'Diet and Lifestyle',
        description: 'Diet And Lifestyle section description',
        questions: [
          {
            id: '1',
            type: 'height',
          },
        ],
      },
    ],
  } as QuestionnaireType;

  test('should add question intros', () => {
    const result = normalizeQuestionnaire(questionnaire);
    expect(result.sections[0].questions[0].id).toEqual(`${result.sections[0].id}${sectionIntroId}`);
    expect(result.sections[0].questions.length).toEqual(2);
  });
});
