import React, { FC } from 'react';
import { type IDontKnowButtonProps } from './types';
import { IconArrowRight, Button } from '@cmpsr/components';
import { PaginationActions } from '@hooks';

export const IDontKnowButton: FC<IDontKnowButtonProps> = ({ submitIDKAnswer, paginationDispatch }) => {
  const handleChange = async () => {
    const response = await submitIDKAnswer();
    paginationDispatch({ type: PaginationActions.NextQuestion, payload: response });
  };

  return (
    <Button onClick={handleChange} variant="link" size="m" trailingIcon={<IconArrowRight />}>
      I&apos;m not sure right now
    </Button>
  );
};
