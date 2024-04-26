import React, { FC, useState } from 'react';
import { type QuestionProps } from '@components/Question/types';
import { Box } from '@cmpsr/components';
import { QuestionTitle } from '../../components/QuestionTitle';
import { MultipleChoiceQuestion } from './types';
import { HandleAnswersActions } from '@hooks';
import { QuestionOption } from '../../components/QuestionOption';

export const MultipleChoice: FC<QuestionProps> = ({ data, answersDispatch }) => {
  const { question, choices, tooltip } = data as MultipleChoiceQuestion;
  const [answers, setAnswers] = useState(new Set<string>());

  return (
    <Box>
      <QuestionTitle question={question} tooltip={tooltip} />
      {choices.map(({ id, label, subLabel }) => (
        <QuestionOption
          key={`multipleChoice-${id}`}
          componentType="checkbox"
          componentProps={{
            value: id,
            onChange: ({ target }) => {
              setAnswers(answers.add(target.value));
              answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: answers.values() });
            },
          }}
          label={label}
          subLabel={subLabel}
        />
      ))}
    </Box>
  );
};
