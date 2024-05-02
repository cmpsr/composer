import { PaginationAction, SubmitAnswerFn } from '@hooks';
import { Dispatch } from 'react';

export type IDontKnowButtonProps = {
  submitIDKAnswer: SubmitAnswerFn;
  currentPage: string;
  paginationDispatch: Dispatch<PaginationAction>;
};
