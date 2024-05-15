import React, { FC, useState } from 'react';
import { Box } from '@cmpsr/components';
import { MultipleChoiceAnswer, MultipleChoiceProps } from './types';
import { QuestionTitle } from '@components/Question/components/QuestionTitle';
import { QuestionOption } from '@components/Question/components/QuestionOption';
import { inputMargin } from '@components/Question/Question';

export const MultipleChoice: FC<MultipleChoiceProps> = ({ data, saveAnswer, defaultValue }) => {
  const { label, options, tooltip, whyWeAskExplanation } = data;
  const [answers, setAnswers] = useState<MultipleChoiceAnswer>(defaultValue ?? { type: 'multipleChoice', values: [] });

  const handleChange = ({ currentTarget }) => {
    const newAnswers = !currentTarget.checked
      ? { ...answers, values: answers.values.filter((answer) => answer !== currentTarget.value) }
      : { ...answers, values: [...answers.values, currentTarget.value] };
    setAnswers(newAnswers);
    saveAnswer(newAnswers);
  };

  return (
    <Box>
      <QuestionTitle question={label} tooltip={tooltip} whyWeAskExplanation={whyWeAskExplanation} />
      {options.map(({ id, label, description }) => (
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
          description={description}
        />
      ))}
    </Box>
  );
};
