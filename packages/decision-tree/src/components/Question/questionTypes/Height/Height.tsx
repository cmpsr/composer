import React, { FC, useState } from 'react';
import { HeightAnswer, HeightQuestion } from './types';
import { Box, Flex } from '@cmpsr/components';
import { HandleAnswersActions } from '@hooks';
import { type QuestionProps } from '@components/Question/types';
import { QuestionTitle } from '@components/Question/components/QuestionTitle';
import { DecisionTreeInput } from '@components/Question/components/DecisionTreeInput';
import { inputMargin } from '@components/Question/Question';

export const Height: FC<QuestionProps> = ({ data, answersDispatch, defaultValue }) => {
  const { question, tooltip, feet, inches } = data as HeightQuestion;
  const [answers, setAnswers] = useState({});
  const defaultValues = defaultValue ? (defaultValue as HeightAnswer) : { feet: '', inches: '' };

  return (
    <Box>
      <QuestionTitle question={question} tooltip={tooltip} />
      <Flex gap="spacer-4">
        <DecisionTreeInput
          ml={inputMargin}
          variant="outline"
          placeholder={feet.placeholder}
          defaultValue={defaultValues.feet}
          trailingMask={feet.trailingMask}
          onBlur={({ target }) => {
            setAnswers({ ...answers, feet: target.value });
            answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: answers });
          }}
        />
        <DecisionTreeInput
          mr={inputMargin}
          variant="outline"
          placeholder={inches.placeholder}
          defaultValue={defaultValues.inches}
          trailingMask={inches.trailingMask}
          onBlur={({ target }) => {
            setAnswers({ ...answers, inches: target.value });
            answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: answers });
          }}
        />
      </Flex>
    </Box>
  );
};
