import React, { FC } from 'react';
import { type NavigationBarProps } from './types';
import { Flex, Button, IconArrowRight, IconArrowLeft } from '@cmpsr/components';
import { PaginationActions } from '@hooks';

export const NavigationBar: FC<NavigationBarProps> = ({ isBackDisabled, isNextDisabled, dispatch, submitAnswer }) => {
  return (
    <Flex justifyContent={'center'}>
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
        onClick={async () => {
          const response = await submitAnswer();
          dispatch({ type: PaginationActions.NextQuestion, payload: response });
        }}
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
