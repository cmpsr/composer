import React, { FC } from 'react';
import { type CallToActionsProps } from './types';
import { Flex, Button, IconArrowRight, IconArrowLeft } from '@cmpsr/components';

export const CallToActions: FC<CallToActionsProps> = ({
  isBackDisabled,
  isNextDisabled,
  goToPreviousQuestion,
  goToNextQuestion,
}) => (
  <Flex
    justifyContent={'center'}
    px={'spacer-5'}
    pt={'spacer-4'}
    pb={'spacer-6'}
    borderTopWidth="1px"
    borderTopStyle="solid"
    borderTopColor="ui-element-divider"
  >
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
