import React, { FC } from 'react';
import { type QuestionProps } from './types';
import { Flex } from '@cmpsr/components';
import { Height, SingleChoice, MultipleChoice, Numeric } from './questionTypes';

const questionTypesMap = {
  height: (props) => <Height {...props} />,
  singleChoice: (props) => <SingleChoice {...props} />,
  multipleChoice: (props) => <MultipleChoice {...props} />,
  numeric: (props) => <Numeric {...props} />,
};

export const Question: FC<QuestionProps> = ({ data, answersDispatch, defaultValue }) => {
  if (!questionTypesMap[data.type]) return null;
  if (typeof questionTypesMap[data.type] != 'function') return null;

  return (
    <Flex justifyContent="center" mb="spacer-4">
      {questionTypesMap[data.type]({ data, answersDispatch, defaultValue })}
    </Flex>
  );
};
