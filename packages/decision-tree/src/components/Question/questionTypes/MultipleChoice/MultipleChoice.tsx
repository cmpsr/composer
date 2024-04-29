import React, { FC, useState } from 'react';
import { Box } from '@cmpsr/components';
import { MultipleChoiceQuestion } from './types';
import { HandleAnswersActions, createAnswer } from '@hooks';
import { type QuestionProps } from '@components/Question/types';
import { QuestionTitle } from '@components/Question/components/QuestionTitle';
import { QuestionOption } from '@components/Question/components/QuestionOption';
import { inputMargin } from '@components/Question/Question';

export const MultipleChoice: FC<QuestionProps> = ({ data, answersDispatch, defaultValue = [] }) => {
  const { question, choices, tooltip, type } = data as MultipleChoiceQuestion;
  const [answers, setAnswers] = useState([]);
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
            onChange: ({ currentTarget }) => {
              if (currentTarget.checked) setAnswers([...answers, currentTarget.value]);
              if (!currentTarget.checked) setAnswers(answers.filter((answer) => answer !== currentTarget.value));
              answersDispatch({
                type: HandleAnswersActions.SaveAnswer,
                payload: createAnswer(type, Array.from(answers)),
              });
            },
          }}
          label={label}
          subLabel={subLabel}
        />
      ))}
    </Box>
  );
};
