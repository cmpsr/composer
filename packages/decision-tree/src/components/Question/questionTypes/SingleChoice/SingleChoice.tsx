import React, { FC } from 'react';
import { Box, RadioGroup } from '@cmpsr/components';
import { SingleChoiceProps } from './types';
import { QuestionTitle } from '@components/Question/components/QuestionTitle';
import { QuestionOption } from '@components/Question/components/QuestionOption';
import { inputMargin } from '@components/Question/Question';

export const SingleChoice: FC<SingleChoiceProps> = ({ data, saveAnswer, defaultValue }) => {
  const { label, options, tooltip, explanation } = data;

  const handleChange = (nextValue) => saveAnswer({ type: 'singleChoice', value: nextValue });

  return (
    <Box>
      <QuestionTitle question={label} tooltip={tooltip} explanation={explanation} />
      <RadioGroup onChange={handleChange} defaultValue={defaultValue?.value}>
        {options.map(({ id, label, subLabel }) => (
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
