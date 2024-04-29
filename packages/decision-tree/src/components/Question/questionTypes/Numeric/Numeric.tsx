import React, { FC } from 'react';
import { Box, Flex } from '@cmpsr/components';
import { NumericQuestion } from './types';
import { HandleAnswersActions, createAnswer } from '@hooks';
import { type QuestionProps } from '@components/Question/types';
import { QuestionTitle } from '@components/Question/components/QuestionTitle';
import { DecisionTreeInput } from '@components/Question/components/DecisionTreeInput';
import { inputMargin } from '@components/Question/Question';

export const Numeric: FC<QuestionProps> = ({ data, answersDispatch, defaultValue }) => {
  const { question, tooltip, id, placeholder, trailingMask, type } = data as NumericQuestion | null;

  return (
    <Box>
      <QuestionTitle question={question} tooltip={tooltip} />
      <Flex px={inputMargin}>
        <DecisionTreeInput
          trailingMask={trailingMask}
          key={id}
          variant="outline"
          placeholder={placeholder}
          defaultValue={defaultValue as string}
          onChange={({ target }) =>
            answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: createAnswer(type, target.value) })
          }
        />
      </Flex>
    </Box>
  );
};
