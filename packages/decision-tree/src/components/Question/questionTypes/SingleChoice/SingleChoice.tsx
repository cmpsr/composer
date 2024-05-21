import React, { FC } from 'react';
import { Box, RadioGroup } from '@cmpsr/components';
import { SingleChoiceProps } from './types';
import { QuestionTitle } from '@components/Question/components/QuestionTitle';
import { QuestionOption } from '@components/Question/components/QuestionOption';
import { inputMargin } from '@components/Question/Question';

export const SingleChoice: FC<SingleChoiceProps> = ({ data, saveAnswer, defaultValue }) => {
  const { label, options, whyWeAskExplanation } = data;

  const handleChange = (nextValue) => saveAnswer({ type: 'singleChoice', value: nextValue });

  return (
    <Box>
      <QuestionTitle question={label} whyWeAskExplanation={whyWeAskExplanation} />
      <RadioGroup onChange={handleChange} defaultValue={defaultValue?.value}>
        {options.map(({ id, label, description }) => (
          <QuestionOption
            mx={inputMargin}
            key={`SingleChoice-${id}`}
            componentType="radio"
            componentProps={{
              value: id,
            }}
            label={label}
            description={description}
          />
        ))}
      </RadioGroup>
    </Box>
  );
};
