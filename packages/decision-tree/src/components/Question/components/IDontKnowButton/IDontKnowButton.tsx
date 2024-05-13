import React, { FC } from 'react';
import { type IDontKnowButtonProps } from './types';
import { IconArrowRight, Button } from '@cmpsr/components';
import { PaginationActions } from '@hooks';

export const IDontKnowButton: FC<IDontKnowButtonProps> = ({ submitIDKAnswer, paginationDispatch }) => {
  return (
    <Button
      onClick={async () => {
        const response = await submitIDKAnswer();
        paginationDispatch({ type: PaginationActions.NextQuestion, payload: response });
      }}
      variant="link"
      size="m"
      trailingIcon={<IconArrowRight />}
    >
      I&aposm not sure right now
    </Button>
  );
};
