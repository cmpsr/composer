import React, { FC, useState } from 'react';
import { type QuestionProps } from '../../types';
import { Box, MaskInput, Flex } from '@cmpsr/components';
import { QuestionTitle } from '../../components/QuestionTitle';
import { NumericQuestion } from './types';

export const Numeric: FC<QuestionProps> = ({ data, submitAnswer }) => {
  const { question, inputs, tooltip, id: questionId } = data as NumericQuestion;
  const [answers, setAnswers] = useState({});

  return (
    <Box>
      <QuestionTitle question={question} tooltip={tooltip} />
      <Flex>
        {inputs.map(({ id, placeholder, trailingMask }) => (
          <MaskInput
            key={id}
            variant="outline"
            size="l"
            placeholder={placeholder}
            mask={{}}
            type="number"
            postFix={` ${trailingMask}`}
            onBlur={(nextValue) => {
              setAnswers({ ...answers, [id]: nextValue });
              submitAnswer({ questionId, value: JSON.stringify(answers) });
            }}
          />
        ))}
      </Flex>
    </Box>
  );
};
