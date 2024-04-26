import React, { FC, useState } from 'react';
import { type QuestionProps } from '@components/Question/types';
import { Box, MaskInput, Flex } from '@cmpsr/components';
import { QuestionTitle } from '../../components/QuestionTitle';
import { HeightAnswer, HeightQuestion } from './types';
import { HandleAnswersActions } from '@hooks';

export const Height: FC<QuestionProps> = ({ data, answersDispatch, defaultValue }) => {
  const { question, tooltip, feet, inches } = data as HeightQuestion;
  const [answers, setAnswers] = useState({});
  const defaultValues = defaultValue ? (defaultValue as HeightAnswer) : { feet: '', inches: '' };

  return (
    <Box>
      <QuestionTitle question={question} tooltip={tooltip} />
      <Flex gap="spacer-4">
        <MaskInput
          variant="outline"
          size="l"
          placeholder={feet.placeholder}
          maskOptions={{
            mask: /^\d{0,3}(\.\d{0,2})?$/,
            postfix: ` ${feet.trailingMask}`,
          }}
          defaultValue={defaultValues.feet}
          onBlur={({ target }) => {
            setAnswers({ ...answers, feet: target.value });
            answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: answers });
          }}
        />
        <MaskInput
          variant="outline"
          size="l"
          placeholder={inches.placeholder}
          maskOptions={{
            mask: /^\d{0,3}(\.\d{0,2})?$/,
            postfix: ` ${inches.trailingMask}`,
          }}
          defaultValue={defaultValues.inches}
          onBlur={({ target }) => {
            setAnswers({ ...answers, inches: target.value });
            answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: answers });
          }}
        />
      </Flex>
    </Box>
  );
};
