import React, { FC } from 'react';
import { type QuestionProps } from '@components/Question/types';
import { Box, MaskInput, Flex } from '@cmpsr/components';
import { QuestionTitle } from '../../components/QuestionTitle';
import { NumericQuestion } from './types';
import { HandleAnswersActions } from '@hooks';

export const Numeric: FC<QuestionProps> = ({ data, answersDispatch, defaultValue }) => {
  const { question, tooltip, id, placeholder, trailingMask } = data as NumericQuestion | null;

  return (
    <Box>
      <QuestionTitle question={question} tooltip={tooltip} />
      <Flex>
        <MaskInput
          maskOptions={{
            mask: /^\d{0,3}(\.\d{0,2})?$/,
            postfix: ` ${trailingMask}`,
          }}
          key={id}
          variant="outline"
          size="l"
          placeholder={placeholder}
          defaultValue={defaultValue as string}
          onBlur={({ target }) => answersDispatch({ type: HandleAnswersActions.SaveAnswer, payload: target.value })}
        />
      </Flex>
    </Box>
  );
};
