import React, { FC, useState } from 'react';
import { Box } from '@cmpsr/components';
import { MultipleChoiceAnswer, MultipleChoiceProps } from './types';
import { HandleAnswersActions } from '@hooks';
import { QuestionTitle } from '@components/Question/components/QuestionTitle';
import { QuestionOption } from '@components/Question/components/QuestionOption';
import { inputMargin } from '@components/Question/Question';

export const MultipleChoice: FC<MultipleChoiceProps> = ({ data, answersDispatch, defaultValue }) => {
  const { question, choices, tooltip } = data;
  const [answers, setAnswers] = useState<MultipleChoiceAnswer>({ type: 'multipleChoice', values: [] });

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
              if (currentTarget.checked) setAnswers({ ...answers, values: [...answers.values, currentTarget.value] });
              if (!currentTarget.checked)
                setAnswers({ ...answers, values: answers.values.filter((answer) => answer !== currentTarget.value) });
              answersDispatch({
                type: HandleAnswersActions.SaveAnswer,
                payload: answers,
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
