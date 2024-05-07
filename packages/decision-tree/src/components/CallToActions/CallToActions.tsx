import React, { FC } from 'react';
import { type CallToActionsProps } from './types';
import { Flex, Button, IconArrowRight, IconArrowLeft } from '@cmpsr/components';
import { PaginationActions } from '@hooks';

export const CallToActions: FC<CallToActionsProps> = ({ isBackDisabled, isNextDisabled, dispatch, nextQuestion }) => {
  return (
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
        onClick={() => {
          dispatch({ type: PaginationActions.PreviousQuestion });
        }}
        variant="link"
        isDisabled={isBackDisabled}
        size="m"
        leadingIcon={<IconArrowLeft />}
        children="Back"
        mr="spacer-4"
        role="link"
      />
      <Button
        onClick={nextQuestion}
        variant="accent"
        size="l"
        trailingIcon={<IconArrowRight />}
        children="Next"
        isDisabled={isNextDisabled}
        role="button"
      />
    </Flex>
  );
};
