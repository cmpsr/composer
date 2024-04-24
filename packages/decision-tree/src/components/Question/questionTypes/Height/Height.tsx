import React, { FC } from 'react';
import { type QuestionProps } from '../../types';
import { Box, RadioGroup, Radio } from '@cmpsr/components';
import { QuestionTitle } from '../../components/QuestionTitle';

export const Height: FC<QuestionProps> = ({ data, submitAnswer }) => {
  const { question, tooltip, id } = data;

  return (
    <Box>
      <QuestionTitle question={question} tooltip={tooltip} />
      <RadioGroup
        onChange={async (value) => {
          await submitAnswer({ questionId: id, value });
        }}
      >
        <Box>
          Yes
          <Radio variant="outline" size="l" />
        </Box>
        <Box>
          No
          <Radio variant="outline" size="l" />
        </Box>
      </RadioGroup>
    </Box>
  );
};
