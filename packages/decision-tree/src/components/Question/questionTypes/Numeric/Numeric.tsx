import React, { FC } from 'react';
import { Box, Flex } from '@cmpsr/components';
import { NumericProps } from './types';
import { HandleAnswersActions } from '@hooks';
import { QuestionTitle } from '@components/Question/components/QuestionTitle';
import { DecisionTreeInput } from '@components/Question/components/DecisionTreeInput';
import { inputMargin } from '@components/Question/Question';

export const Numeric: FC<NumericProps> = ({ data, answersDispatch, defaultValue }) => {
  const { question, tooltip, id, placeholder, trailingMask } = data;

  const handleChange = ({ currentTarget }) =>
    answersDispatch({
      type: HandleAnswersActions.SaveAnswer,
      payload: { type: 'numeric', value: Number(currentTarget.value) },
    });

  return (
    <Box>
      <QuestionTitle question={question} tooltip={tooltip} />
      <Flex px={inputMargin}>
        <DecisionTreeInput
          trailingMask={trailingMask}
          key={id}
          variant="outline"
          placeholder={placeholder}
          defaultValue={defaultValue?.value}
          onKeyUp={handleChange}
        />
      </Flex>
    </Box>
  );
};
