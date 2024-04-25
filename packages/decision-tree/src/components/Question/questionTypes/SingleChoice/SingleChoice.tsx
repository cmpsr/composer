import React, { FC } from 'react';
import { type QuestionProps } from '@components/Question/types';
import { Box, RadioGroup, Radio } from '@cmpsr/components';
import { QuestionTitle } from '../../components/QuestionTitle';
import { SingleChoiceQuestion } from './types';
import { HandleAnswersActions } from '@hooks';

export const SingleChoice: FC<QuestionProps> = ({ data, answersDispatch }) => {
  const { question, choices, tooltip } = data as SingleChoiceQuestion;
  return (
    <Box>
      <QuestionTitle question={question} tooltip={tooltip} />
      <RadioGroup
        onChange={(nextValue) => answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: nextValue })}
      >
        {choices.map(({ id, label, subLabel }) => (
          <Box
            key={`SingleChoice-${id}`}
            border="1px solid #666"
            borderColor="ui-element-outline-default"
            background="background-action-default"
            borderRadius="radii-4"
            width="350px"
            mb="spacer-4"
            mx="auto"
          >
            <Radio
              display="flex"
              flexDirection="row-reverse"
              variant="outline"
              size="l"
              m="auto"
              justifyContent="space-between"
              py="spacer-3"
              px="spacer-4"
              value={id}
            >
              <Box>
                <Box>{label}</Box>
                {subLabel ? <Box>{subLabel}</Box> : null}
              </Box>
            </Radio>
          </Box>
        ))}
      </RadioGroup>
    </Box>
  );
};
