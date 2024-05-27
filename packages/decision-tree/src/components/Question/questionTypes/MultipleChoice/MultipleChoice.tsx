import React, { FC, useState } from 'react';
import { Box } from '@cmpsr/components';
import { MultipleChoiceAnswer, MultipleChoiceProps } from './types';
import { QuestionTitle } from '@components/Question/components/QuestionTitle';
import { QuestionOption } from '@components/Question/components/QuestionOption';
import { inputMargin } from '@components/Question/Question';

export const MultipleChoice: FC<MultipleChoiceProps> = ({ data, saveAnswer, defaultValue }) => {
  const { label, options, whyWeAskExplanation } = data;
  const [answers, setAnswers] = useState<MultipleChoiceAnswer>(defaultValue ?? { type: 'multipleChoice', values: [] });

  const handleNoneChange = ({ currentTarget }) => {
    const newAnswers = !currentTarget.checked
      ? { ...answers, values: answers.values.filter((answer) => answer !== currentTarget.value) }
      : { ...answers, values: [currentTarget.value] };
    setAnswers(newAnswers);
    saveAnswer(newAnswers);
  };

  const handleChange = ({ currentTarget }) => {
    const newAnswers = !currentTarget.checked
      ? { ...answers, values: answers.values.filter((answer) => answer !== currentTarget.value) }
      : { ...answers, values: [...answers.values, currentTarget.value] };
    setAnswers(newAnswers);
    saveAnswer(newAnswers);
  };

  return (
    <Box>
      <QuestionTitle question={label} whyWeAskExplanation={whyWeAskExplanation} />
      {options.map(({ id, label, description, type }) => (
        <QuestionOption
          mx={inputMargin}
          key={`multipleChoice-${id}`}
          componentType="checkbox"
          componentProps={{
            value: id,
            defaultChecked: defaultValue?.values?.includes(id),
            isChecked: answers.values.includes(id),
            onChange: type === 'none' ? handleNoneChange : handleChange,
          }}
          label={label}
          description={description}
        />
      ))}
    </Box>
  );
};
