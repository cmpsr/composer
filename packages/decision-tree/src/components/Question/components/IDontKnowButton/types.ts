import { PaginationAction } from '@hooks';
import { UserQuestionnaireType } from '@types';
import { Dispatch } from 'react';

export type IDontKnowButtonProps = {
  submitIDKAnswer: () => Promise<UserQuestionnaireType>;
  paginationDispatch: Dispatch<PaginationAction>;
};
