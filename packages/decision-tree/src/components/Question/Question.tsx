import React, { FC } from 'react';
import { type QuestionProps } from './types';
import { Flex } from '@cmpsr/components';
import { Height, SingleChoice, MultipleChoice, Numeric } from './questionTypes';

const questionTypesMap = {
  height: ({ data, answersDispatch }) => <Height data={data} answersDispatch={answersDispatch} />,
  singleChoice: ({ data, answersDispatch }) => <SingleChoice data={data} answersDispatch={answersDispatch} />,
  multipleChoice: ({ data, answersDispatch }) => <MultipleChoice data={data} answersDispatch={answersDispatch} />,
  numeric: ({ data, answersDispatch }) => <Numeric data={data} answersDispatch={answersDispatch} />,
};

export const Question: FC<QuestionProps> = ({ data, answersDispatch }) => {
  if (!questionTypesMap[data.type]) return null;
  if (typeof questionTypesMap[data.type] !== 'function') return null;

  return <Flex justifyContent="center">{questionTypesMap[data.type]({ data, answersDispatch })}</Flex>;
};
