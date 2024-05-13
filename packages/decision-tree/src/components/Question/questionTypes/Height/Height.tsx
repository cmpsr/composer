import React, { FC, useState } from 'react';
import { HeightAnswer, HeightProps } from './types';
import { Box, Flex } from '@cmpsr/components';
import { HandleAnswersActions } from '@hooks';
import { QuestionTitle } from '@components/Question/components/QuestionTitle';
import { DecisionTreeInput } from '@components/Question/components/DecisionTreeInput';
import { inputMargin } from '@components/Question/Question';

export const Height: FC<HeightProps> = ({ data, answersDispatch, defaultValue }) => {
  const { label, explanation, tooltip, feet, inches } = data;
  const [answers, setAnswers] = useState<HeightAnswer>({ type: 'height', feet: '', inches: '' });

  return (
    <Box>
      <QuestionTitle question={label} tooltip={tooltip} explanation={explanation} />
      <Flex gap="spacer-4" px={inputMargin}>
        <DecisionTreeInput
          variant="outline"
          placeholder={feet.placeholder}
          defaultValue={defaultValue?.feet}
          trailingMask={feet.trailingMask}
          onKeyUp={({ currentTarget }) => {
            const newAnswer = { ...answers, feet: currentTarget.value };
            setAnswers(newAnswer);
            answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: newAnswer });
          }}
        />
        <DecisionTreeInput
          variant="outline"
          placeholder={inches.placeholder}
          defaultValue={defaultValue?.inches}
          trailingMask={inches.trailingMask}
          onKeyUp={({ currentTarget }) => {
            const newAnswer = { ...answers, inches: currentTarget.value };
            setAnswers(newAnswer);
            answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: newAnswer });
          }}
        />
      </Flex>
    </Box>
  );
};
