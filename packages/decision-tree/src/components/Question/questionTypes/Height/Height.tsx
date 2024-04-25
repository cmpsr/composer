import React, { FC, useState } from 'react';
import { type QuestionProps } from '@components/Question/types';
import { Box, MaskInput, Flex } from '@cmpsr/components';
import { QuestionTitle } from '../../components/QuestionTitle';
import { HeightQuestion } from './types';
import { HandleAnswersActions } from '@hooks';

export const Height: FC<QuestionProps> = ({ data, answersDispatch }) => {
  const { question, tooltip, feet, inches } = data as HeightQuestion;
  const [answers, setAnswers] = useState({});

  return (
    <Box>
      <QuestionTitle question={question} tooltip={tooltip} />
      <Flex>
        <MaskInput
          variant="outline"
          size="l"
          placeholder={feet.placeholder}
          maskOptions={{
            mask: /^\d{0,3}(\.\d{0,2})?$/,
            postfix: ` ${feet.trailingMask}`,
          }}
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
          onBlur={({ target }) => {
            setAnswers({ ...answers, inches: target.value });
            answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: answers });
          }}
        />
      </Flex>
    </Box>
  );
};
