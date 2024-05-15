import React, { FC, useState } from 'react';
import { type CallToActionsProps } from './types';
import { Flex, Button, IconArrowRight, IconArrowLeft } from '@cmpsr/components';

export const CallToActions: FC<CallToActionsProps> = ({ isNextDisabled, goToPreviousQuestion, goToNextQuestion }) => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  return (
    <Flex
      justifyContent="center"
      px="spacer-5"
      pt="spacer-4"
      pb="spacer-6"
      borderTopWidth="1px"
      borderTopStyle="solid"
      borderTopColor="ui-element-divider"
    >
      <Button onClick={goToPreviousQuestion} variant="link" size="m" leadingIcon={<IconArrowLeft />} mr="spacer-4">
        Back
      </Button>
      <Button
        onClick={async () => {
          setIsloading(true);
          await goToNextQuestion();
          setIsloading(false);
        }}
        variant="accent"
        size="l"
        trailingIcon={<IconArrowRight />}
        isDisabled={isNextDisabled}
        isLoading={isLoading}
      >
        Next
      </Button>
    </Flex>
  );
};
