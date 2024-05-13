import React, { FC } from 'react';
import { type QuestionProps } from './types';
import { Flex, Box } from '@cmpsr/components';
import { Height, SingleChoice, MultipleChoice, Numeric, SectionIntro } from './questionTypes';
import { IDontKnowButton } from './components/IDontKnowButton';

const questionTypesMap = {
  height: (props) => <Height {...props} />,
  singleChoice: (props) => <SingleChoice {...props} />,
  multipleChoice: (props) => <MultipleChoice {...props} />,
  numeric: (props) => <Numeric {...props} />,
  sectionIntro: (props) => <SectionIntro {...props} />,
};

export const Question: FC<QuestionProps> = ({ submitIDKAnswer, paginationDispatch, ...props }) => (
  <Box mb={{ base: 'spacer-14', lg: 'spacer-16' }} flexGrow="1">
    <Flex
      justifyContent="center"
      mt={{ base: 'spacer-8', lg: 'spacer-16' }}
      mb="spacer-8"
      mx={{ base: 'spacer-5', md: 'spacer-20', lg: 'spacer-16', xl: 'spacer-24', xxl: 'spacer-32' }}
      px={{ base: '0', lg: 'spacer-32', xl: 'spacer-52', xxl: 'spacer-64' }}
    >
      {questionTypesMap[props.data.type](props)}
    </Flex>
    {props.data.skippable !== false ?? (
      <Flex justifyContent="center">
        <IDontKnowButton
          submitIDKAnswer={submitIDKAnswer}
          currentPage={props.data.id}
          paginationDispatch={paginationDispatch}
        />
      </Flex>
    )}
  </Box>
);

export const inputMargin = { base: '0', md: 'spacer-28', lg: 'spacer-36', xl: 'spacer-40' };
