import React, { FC, useState } from 'react';
import { Box } from '@cmpsr/components';
import { MultipleChoiceQuestion } from './types';
import { HandleAnswersActions } from '@hooks';
import { type QuestionProps } from '@components/Question/types';
import { QuestionTitle } from '@components/Question/components/QuestionTitle';
import { QuestionOption } from '@components/Question/components/QuestionOption';
import { inputMargin } from '@components/Question/Question';

export const MultipleChoice: FC<QuestionProps> = ({ data, answersDispatch, defaultValue = [] }) => {
  const { question, choices, tooltip } = data as MultipleChoiceQuestion;
  const [answers, setAnswers] = useState(new Set<string>());
  const checkedValues = defaultValue as string[] | null;

  return (
    <Box>
      <QuestionTitle question={question} tooltip={tooltip} />
      {choices.map(({ id, label, subLabel }) => (
        <QuestionOption
          mx={inputMargin}
          key={`multipleChoice-${id}`}
          componentType="checkbox"
          componentProps={{
            value: id,
            defaultChecked: checkedValues && checkedValues.length > 0 && checkedValues.includes(id),
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
