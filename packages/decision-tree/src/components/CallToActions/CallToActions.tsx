import React, { FC } from 'react';
import { type CallToActionsProps } from './types';
import { Flex, Button, IconArrowRight, IconArrowLeft } from '@cmpsr/components';

export const CallToActions: FC<CallToActionsProps> = ({
  isBackDisabled,
  isNextDisabled,
  goToPreviousQuestion,
  goToNextQuestion,
}) => {
  return (
    <Flex justifyContent="center">
      <Button
        onClick={goToPreviousQuestion}
        variant="link"
        isDisabled={isBackDisabled}
        size="m"
        leadingIcon={<IconArrowLeft />}
        mr="spacer-4"
      >
        Back
      </Button>
      <Button
        onClick={goToNextQuestion}
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
