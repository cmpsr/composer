import React, { FC } from 'react';
import { Box, RadioGroup } from '@cmpsr/components';
import { SingleChoiceProps } from './types';
import { HandleAnswersActions } from '@hooks';
import { QuestionTitle } from '@components/Question/components/QuestionTitle';
import { QuestionOption } from '@components/Question/components/QuestionOption';
import { inputMargin } from '@components/Question/Question';

export const SingleChoice: FC<SingleChoiceProps> = ({ data, answersDispatch, defaultValue }) => {
  const { label, options, tooltip, whyWeAskExplanation } = data;

  return (
    <Box>
      <QuestionTitle question={label} tooltip={tooltip} whyWeAskExplanation={whyWeAskExplanation} />
      <RadioGroup
        onChange={(nextValue) =>
          answersDispatch({
            type: HandleAnswersActions.SaveAnswer,
            payload: { type: 'singleChoice', value: nextValue },
          })
        }
        defaultValue={defaultValue?.value}
      >
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
