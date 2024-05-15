import { PaginationAction } from '@hooks';
import { QuestionnaireType } from '@types';
import { Dispatch } from 'react';

export type IDontKnowButtonProps = {
  submitIDKAnswer: () => Promise<QuestionnaireType>;
  paginationDispatch: Dispatch<PaginationAction>;
};
