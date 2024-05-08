import React, { FC } from 'react';
import { type CallToActionsProps } from './types';
import { Flex, Button, IconArrowRight, IconArrowLeft } from '@cmpsr/components';
import { PaginationActions } from '@hooks';

export const CallToActions: FC<CallToActionsProps> = ({ isBackDisabled, isNextDisabled, dispatch, nextQuestion }) => {
  return (
    <Flex justifyContent="center">
      <Button
        onClick={() => {
          dispatch({ type: PaginationActions.PreviousQuestion });
        }}
        variant="link"
        isDisabled={isBackDisabled}
        size="m"
        leadingIcon={<IconArrowLeft />}
        mr="spacer-4"
      >
        Back
      </Button>
      <Button
        onClick={nextQuestion}
        variant="accent"
        size="l"
        trailingIcon={<IconArrowRight />}
        isDisabled={isNextDisabled}
      >
        Next
      </Button>
    </Flex>
  );
};
