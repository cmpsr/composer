import React, { FC } from 'react';
import { Box, RadioGroup } from '@cmpsr/components';
import { SingleChoiceProps } from './types';
import { HandleAnswersActions } from '@hooks';
import { QuestionTitle } from '@components/Question/components/QuestionTitle';
import { QuestionOption } from '@components/Question/components/QuestionOption';
import { inputMargin } from '@components/Question/Question';

export const SingleChoice: FC<SingleChoiceProps> = ({ data, answersDispatch, defaultValue }) => {
  const { question, choices, tooltip } = data;

  const handleChange = (nextValue) =>
    answersDispatch({
      type: HandleAnswersActions.SaveAnswer,
      payload: { type: 'singleChoice', value: nextValue },
    });

  return (
    <Box>
      <QuestionTitle question={question} tooltip={tooltip} />
      <RadioGroup onChange={handleChange} defaultValue={defaultValue?.value}>
        {choices.map(({ id, label, subLabel }) => (
          <QuestionOption
            mx={inputMargin}
            key={`SingleChoice-${id}`}
            componentType="radio"
            componentProps={{
              value: id,
            }}
            label={label}
            subLabel={subLabel}
          />
        ))}
      </RadioGroup>
    </Box>
  );
};
