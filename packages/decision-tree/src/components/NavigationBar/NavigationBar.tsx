import React, { FC, useState } from 'react';
import { type NavigationBarProps } from './types';
import { Flex, Button, IconArrowRight, IconArrowLeft } from '@cmpsr/components';
import { PaginationActions, PaginationPayload } from '@hooks';

export const NavigationBar: FC<NavigationBarProps> = ({ isBackDisabled, isNextDisabled, dispatch, submitAnswer }) => {
  const [isLoading, setIsloading] = useState<boolean>(false);

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
        onClick={async () => {
          setIsloading(true);
          const response = await submitAnswer();
          setIsloading(false);
          if (!response?.nextQuestion?.questionId) return;
          dispatch({ type: PaginationActions.NextQuestion, payload: response as PaginationPayload });
        }}
        variant="accent"
        size="l"
        trailingIcon={<IconArrowRight />}
        children="Next"
        isDisabled={isNextDisabled}
        isLoading={isLoading}
        role="button"
      />
    </Flex>
  );
};
