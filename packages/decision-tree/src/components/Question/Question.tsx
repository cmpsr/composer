import React, { FC } from 'react';
import { type QuestionProps } from './types';
import { Flex } from '@cmpsr/components';
import { Height, SingleChoice, MultipleChoice, Numeric } from './questionTypes';
import { IDontKnowButton } from './components/IDontKnowButton';

const questionTypesMap = {
  height: (props) => <Height {...props} />,
  singleChoice: (props) => <SingleChoice {...props} />,
  multipleChoice: (props) => <MultipleChoice {...props} />,
  numeric: (props) => <Numeric {...props} />,
};

export const Question: FC<QuestionProps> = ({
  data,
  answersDispatch,
  defaultValue,
  iDontKnowAnswer,
  paginationDispatch,
}) => {
  if (!questionTypesMap[data.type]) return null;
  if (typeof questionTypesMap[data.type] != 'function') return null;

  return (
    <Flex
      justifyContent="center"
      mt={{ base: 'spacer-8', lg: 'spacer-16' }}
      mb={{ base: 'spacer-14', lg: 'spacer-16' }}
      mx={{ base: 'spacer-5', md: 'spacer-20', lg: 'spacer-16', xl: 'spacer-24', xxl: 'spacer-32' }}
      px={{ base: '0', lg: 'spacer-32', xl: 'spacer-52', xxl: 'spacer-64' }}
    >
      {questionTypesMap[data.type]({ data, answersDispatch, defaultValue })}
      {data.skippable ? (
        <IDontKnowButton
          iDontKnowAnswer={iDontKnowAnswer}
          currentPage={data.id}
          paginationDispatch={paginationDispatch}
        />
      ) : (
        ''
      )}
    </Flex>
  );
};

export const inputMargin = { base: '0', md: 'spacer-28', lg: 'spacer-36', xl: 'spacer-40' };
