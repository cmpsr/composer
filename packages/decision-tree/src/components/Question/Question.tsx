import React, { FC } from 'react';
import { type QuestionProps } from './types';
import { Flex } from '@cmpsr/components';
import { Boolean, SingleChoice, MultipleChoice, Numeric } from './questionTypes';

const questionTypesMap = {
  boolean: ({ data, submitAnswer }) => <Boolean data={data} submitAnswer={submitAnswer} />,
  singleChoice: ({ data, submitAnswer }) => <SingleChoice data={data} submitAnswer={submitAnswer} />,
  multipleChoice: ({ data, submitAnswer }) => <MultipleChoice data={data} submitAnswer={submitAnswer} />,
  numeric: ({ data, submitAnswer }) => <Numeric data={data} submitAnswer={submitAnswer} />,
};

export const Question: FC<QuestionProps> = ({ data, submitAnswer }) => {
  
  if(!questionTypesMap[data.type]) return null;
  if(typeof questionTypesMap[data.type] != 'function') return null;
  
  return (<Flex justifyContent='center'>{questionTypesMap[data.type]({ data, submitAnswer })}</Flex>);
};
