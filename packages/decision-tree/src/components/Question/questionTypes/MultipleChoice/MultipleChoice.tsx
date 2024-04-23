import React, { FC, useState } from 'react';
import { type QuestionProps } from '../../types';
import { Box, Checkbox } from '@cmpsr/components';
import { QuestionTitle } from '../../components/QuestionTitle';
import { MultipleChoiceQuestion } from './types';

export const MultipleChoice: FC<QuestionProps> = ({ data, submitAnswer }) => {
  const { question, choices, tooltip, id: questionId } = data as MultipleChoiceQuestion;
  const [answers, setAnswers] = useState(new Set());

  return (
    <Box>
      <QuestionTitle question={question} tooltip={tooltip} />
      {choices.map(({ id, label, subLabel }) => (
        <Box key={id}>
          <Box>
            <Box>{label}</Box>
            {subLabel ? <Box>{subLabel}</Box> : null}
          </Box>
          <Checkbox
            size="l"
            onBlur={(nextValue) => {
              setAnswers(answers.add(nextValue));
              submitAnswer({ questionId, value: JSON.stringify(answers.values()) });
            }}
          />
        </Box>
      ))}
    </Box>
  );
};
