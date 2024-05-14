import React, { FC, useState } from 'react';
import { HeightAnswer, HeightProps } from './types';
import { Box, Flex } from '@cmpsr/components';
import { HandleAnswersActions } from '@hooks';
import { QuestionTitle } from '@components/Question/components/QuestionTitle';
import { DecisionTreeInput } from '@components/Question/components/DecisionTreeInput';
import { inputMargin } from '@components/Question/Question';

export const Height: FC<HeightProps> = ({ data, answersDispatch, defaultValue }) => {
  const { question, tooltip, feet, inches } = data;
  const [answers, setAnswers] = useState<HeightAnswer>({ type: 'height', feet: '', inches: '' });

  const handleChangeFeet = ({ currentTarget }) => {
    setAnswers({ ...answers, feet: currentTarget.value });
    answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: answers });
  };

  const handleChangeInches = ({ currentTarget }) => {
    setAnswers({ ...answers, inches: currentTarget.value });
    answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: answers });
  };

  return (
    <Box>
      <QuestionTitle question={question} tooltip={tooltip} />
      <Flex gap="spacer-4" px={inputMargin}>
        <DecisionTreeInput
          variant="outline"
          placeholder={feet.placeholder}
          defaultValue={defaultValue?.feet}
          trailingMask={feet.trailingMask}
          onInput={handleChangeFeet}
        />
        <DecisionTreeInput
          variant="outline"
          placeholder={inches.placeholder}
          defaultValue={defaultValue?.inches}
          trailingMask={inches.trailingMask}
          onInput={handleChangeInches}
        />
      </Flex>
    </Box>
  );
};
