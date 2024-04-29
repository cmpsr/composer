import React, { FC } from 'react';
import { Box, RadioGroup } from '@cmpsr/components';
import { SingleChoiceQuestion } from './types';
import { HandleAnswersActions, createAnswer } from '@hooks';
import { type QuestionProps } from '@components/Question/types';
import { QuestionTitle } from '@components/Question/components/QuestionTitle';
import { QuestionOption } from '@components/Question/components/QuestionOption';
import { inputMargin } from '@components/Question/Question';

export const SingleChoice: FC<QuestionProps> = ({ data, answersDispatch, defaultValue }) => {
  const { question, choices, tooltip, type } = data as SingleChoiceQuestion;
  return (
    <Box>
      <QuestionTitle question={question} tooltip={tooltip} />
      <RadioGroup
        onChange={(nextValue) =>
          answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: createAnswer(type, nextValue) })
        }
        defaultValue={defaultValue as string}
      >
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
