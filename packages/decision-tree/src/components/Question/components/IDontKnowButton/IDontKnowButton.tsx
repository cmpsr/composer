import React, { FC } from 'react';
import { type IDontKnowButtonProps } from './types';
import { IconArrowRight, Button } from '@cmpsr/components';
import { PaginationActions, PaginationPayload } from '@hooks';

export const IDontKnowButton: FC<IDontKnowButtonProps> = ({ submitIDKAnswer, currentPage, paginationDispatch }) => {
  return (
    <Button
      onClick={async () => {
        const response = await submitIDKAnswer(currentPage);
        paginationDispatch({ type: PaginationActions.NextQuestion, payload: response as PaginationPayload });
      }}
      variant="link"
      size="m"
      trailingIcon={<IconArrowRight />}
      children="I'm not sure right now"
      role="link"
    />
  );
};
