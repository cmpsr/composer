import { QuestionType } from '@components/Question';
import { QuestionnaireType, SectionType } from '@types';

export const sectionIntroId = '-section-intro';

const createSectionIntro = ({ id, name, description }: SectionType, orderNumber) => {
  return {
    id: `${id}${sectionIntroId}`,
    type: 'sectionIntro',
    label: name,
    description,
    orderNumber,
    skippable: false,
  } as QuestionType;
};

export const normalizeQuestionnaire = (questionnaire: QuestionnaireType): QuestionnaireType => {
  questionnaire.sections = questionnaire.sections.map((section, index) => {
    if (section.questions[0].id === `${section.id}${sectionIntroId}`) return section;

    return {
      ...section,
      questions: [createSectionIntro(section, index + 1), ...section.questions],
    };
  });

  return questionnaire;
};
