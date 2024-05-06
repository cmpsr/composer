import React, { FC, useState } from 'react';
import { type QuestionProps } from '@components/Question/types';
import { Box, Checkbox } from '@cmpsr/components';
import { QuestionTitle } from '../../components/QuestionTitle';
import { MultipleChoiceQuestion } from './types';
import { HandleAnswersActions } from '@hooks';

export const MultipleChoice: FC<QuestionProps> = ({ data, answersDispatch }) => {
  const { question, choices, tooltip } = data as MultipleChoiceQuestion;
  const [answers, setAnswers] = useState(new Set<string>());

  return (
    <Box>
      <QuestionTitle question={question} tooltip={tooltip} />
      {choices.map(({ id, label, subLabel }) => (
        <Box key={`multipleChoice-${id}`}>
          <Box>
            <Box>{label}</Box>
            {subLabel ? <Box>{subLabel}</Box> : null}
          </Box>
          <Checkbox
            size="l"
            onChange={({ target }) => {
              setAnswers(answers.add(target.value));
              answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: answers.values() });
            }}
          />
        </Box>
      ))}
    </Box>
  );
};
