import React, { FC, useState } from 'react';
import { Box } from '@cmpsr/components';
import { MultipleChoiceAnswer, MultipleChoiceProps } from './types';
import { HandleAnswersActions } from '@hooks';
import { QuestionTitle } from '@components/Question/components/QuestionTitle';
import { QuestionOption } from '@components/Question/components/QuestionOption';
import { inputMargin } from '@components/Question/Question';

export const MultipleChoice: FC<MultipleChoiceProps> = ({ data, answersDispatch, defaultValue }) => {
  const { question, choices, tooltip } = data;
  const [answers, setAnswers] = useState<MultipleChoiceAnswer>(defaultValue ?? { type: 'multipleChoice', values: [] });

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
            defaultChecked: defaultValue && defaultValue.values.length > 0 && defaultValue.values.includes(id),
            onChange: ({ currentTarget }) => {
              const newAnswers = !currentTarget.checked
                ? { ...answers, values: answers.values.filter((answer) => answer !== currentTarget.value) }
                : { ...answers, values: [...answers.values, currentTarget.value] };
              setAnswers(newAnswers);
              answersDispatch({
                type: HandleAnswersActions.SaveAnswer,
                payload: newAnswers,
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
