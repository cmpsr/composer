import React, { FC } from 'react';
import { Box, Flex } from '@cmpsr/components';
import { NumericQuestion } from './types';
import { HandleAnswersActions } from '@hooks';
import { type QuestionProps } from '@components/Question/types';
import { QuestionTitle } from '@components/Question/components/QuestionTitle';
import { DecisionTreeInput } from '@components/Question/components/DecisionTreeInput';
import { inputMargin } from '@components/Question/Question';

export const Numeric: FC<QuestionProps> = ({ data, answersDispatch }) => {
  const { question, tooltip, id, placeholder, trailingMask } = data as NumericQuestion;

  return (
    <Box>
      <QuestionTitle question={question} tooltip={tooltip} />
      <Flex>
        <DecisionTreeInput
          mx={inputMargin}
          trailingMask={trailingMask}
          key={id}
          variant="outline"
          placeholder={placeholder}
          onBlur={({ target }) => answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: target.value })}
        />
      </Flex>
    </Box>
  );
};
