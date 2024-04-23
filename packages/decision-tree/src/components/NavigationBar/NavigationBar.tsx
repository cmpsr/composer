import React, { FC } from 'react';
import { type NavigationBarProps } from './types';
import { Flex, Button, IconArrowRight, IconArrowLeft } from '@cmpsr/components';
import { DecisionTreeActionKind } from '../../hooks/usePagination';

export const NavigationBar: FC<NavigationBarProps> = ({ lastQuestion, currentQuestion, dispatch }) => {
  return (
    <Flex justifyContent={'center'}>
      <Button
        onClick={() => {
          dispatch({ type: DecisionTreeActionKind.PreviousQuestion });
        }}
        variant="link"
        isDisabled={currentQuestion < 1}
        size="m"
        leadingIcon={<IconArrowLeft />}
        children="Back"
        mr="spacer-4"
      />
      <Button
        onClick={() => {
          dispatch({ type: DecisionTreeActionKind.NextQuestion });
        }}
        variant="accent"
        size="l"
        trailingIcon={<IconArrowRight />}
        children="Next"
        isDisabled={currentQuestion >= lastQuestion}
      />
    </Flex>
  );
};
