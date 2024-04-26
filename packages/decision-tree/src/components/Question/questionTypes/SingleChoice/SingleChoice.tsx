import React, { FC } from 'react';
import { type QuestionProps } from '@components/Question/types';
import { Box, RadioGroup } from '@cmpsr/components';
import { QuestionTitle } from '../../components/QuestionTitle';
import { SingleChoiceQuestion } from './types';
import { HandleAnswersActions } from '@hooks';
import { QuestionOption } from '../../components/QuestionOption';

export const SingleChoice: FC<QuestionProps> = ({ data, answersDispatch }) => {
  const { question, choices, tooltip } = data as SingleChoiceQuestion;
  return (
    <Box>
      <QuestionTitle question={question} tooltip={tooltip} />
      <RadioGroup
        onChange={(nextValue) => answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: nextValue })}
      >
        {choices.map(({ id, label, subLabel }) => (
          <QuestionOption
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
