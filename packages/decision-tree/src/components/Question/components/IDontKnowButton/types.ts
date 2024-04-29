import { PaginationAction, SubmitAnswerFn } from '@hooks';
import { Dispatch } from 'react';

export type IDontKnowButtonProps = {
  iDontKnowAnswer: SubmitAnswerFn;
  currentPage: string;
  paginationDispatch: Dispatch<PaginationAction>;
};
