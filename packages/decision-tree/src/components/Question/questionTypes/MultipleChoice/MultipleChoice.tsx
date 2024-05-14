import React, { FC, useState } from 'react';
import { Box } from '@cmpsr/components';
import { MultipleChoiceAnswer, MultipleChoiceProps } from './types';
import { QuestionTitle } from '@components/Question/components/QuestionTitle';
import { QuestionOption } from '@components/Question/components/QuestionOption';
import { inputMargin } from '@components/Question/Question';

export const MultipleChoice: FC<MultipleChoiceProps> = ({ data, saveAnswer, defaultValue }) => {
  const { question, choices, tooltip } = data;
  const [answers, setAnswers] = useState<MultipleChoiceAnswer>({ type: 'multipleChoice', values: [] });

  const handleChange = ({ currentTarget }) => {
    if (currentTarget.checked) {
      setAnswers({ ...answers, values: [...answers.values, currentTarget.value] });
    } else {
      setAnswers({ ...answers, values: answers.values.filter((answer) => answer !== currentTarget.value) });
    }
    saveAnswer(answers);
  };

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
            defaultChecked: defaultValue?.values?.includes(id),
            onChange: handleChange,
          }}
          label={label}
          subLabel={subLabel}
        />
      ))}
    </Box>
  );
};
