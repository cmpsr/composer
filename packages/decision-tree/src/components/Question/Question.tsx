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

  return (
    <Flex
      justifyContent="center"
      flexGrow="1"
      mt={{ base: 'spacer-8', lg: 'spacer-16' }}
      mb={{ base: 'spacer-14', lg: 'spacer-16' }}
      mx={{ base: 'spacer-5', md: 'spacer-20', lg: 'spacer-16', xl: 'spacer-24', xxl: 'spacer-32' }}
      px={{ base: '0', lg: 'spacer-32', xl: 'spacer-52', xxl: 'spacer-64' }}
    >
      {questionTypesMap[data.type]({ data, answersDispatch })}
    </Flex>
  );
};

export const inputMargin = { base: '0', md: 'spacer-28', lg: 'spacer-36', xl: 'spacer-40' };
