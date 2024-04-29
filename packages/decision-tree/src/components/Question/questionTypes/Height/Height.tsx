import React, { FC, useState } from 'react';
import { HeightAnswer, HeightQuestion } from './types';
import { Box, Flex } from '@cmpsr/components';
import { HandleAnswersActions, createAnswer } from '@hooks';
import { type QuestionProps } from '@components/Question/types';
import { QuestionTitle } from '@components/Question/components/QuestionTitle';
import { DecisionTreeInput } from '@components/Question/components/DecisionTreeInput';
import { inputMargin } from '@components/Question/Question';

export const Height: FC<QuestionProps> = ({ data, answersDispatch, defaultValue }) => {
  const { question, tooltip, feet, inches, type } = data as HeightQuestion;
  const [answers, setAnswers] = useState({ feet: '', inches: '' });
  const defaultValues = defaultValue ? (defaultValue as HeightAnswer) : { feet: '', inches: '' };

  return (
    <Box>
      <QuestionTitle question={question} tooltip={tooltip} />
      <Flex gap="spacer-4" px={inputMargin}>
        <DecisionTreeInput
          variant="outline"
          placeholder={feet.placeholder}
          defaultValue={defaultValues.feet}
          trailingMask={feet.trailingMask}
          onChange={({ target }) => {
            setAnswers({ ...answers, feet: target.value });
            answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: createAnswer(type, answers) });
          }}
        />
        <DecisionTreeInput
          variant="outline"
          placeholder={inches.placeholder}
          defaultValue={defaultValues.inches}
          trailingMask={inches.trailingMask}
          onChange={({ target }) => {
            setAnswers({ ...answers, inches: target.value });
            answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: createAnswer(type, answers) });
          }}
        />
      </Flex>
    </Box>
  );
};
