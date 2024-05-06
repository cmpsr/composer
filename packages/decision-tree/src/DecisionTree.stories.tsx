import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { DecisionTree } from './DecisionTree';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { QuestionnaireType, type UseSetupCallbackCB } from './types';
import { questionnaire } from './tests/Questionnaire.mock';
import { Box } from '@cmpsr/components';

const serverMockup = {
  1: { nextSectionId: 1, nextQuestionId: 2 },
  2: { nextSectionId: 2, nextQuestionId: 3 },
  3: { nextSectionId: 3, nextQuestionId: 4 },
  4: null,
};

const callback = async function (questionId, value) {
  console.log(questionId, value);
  return serverMockup[questionId];
} as UseSetupCallbackCB;

export default {
  component: DecisionTree,
  title: 'DecisionTree/DecisionTree',
  argTypes: {
    variant: {
      options: ['default'],
      control: { type: 'select' },
    },
  },
} as Meta;

const states = ['default'];

export const All = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Variant</Th>
      </Tr>
    </Thead>
    <Tbody>
      {['default'].map((variant, i) => (
        <Fragment key={`${variant}-${i}`}>
          <Tr>
            <Td rowSpan={6}>{variant}</Td>
          </Tr>
          {states.map((state, i) => (
            <Tr key={`${variant}-${state}-${i}`}>
              <Td>{state}</Td>
              <Td>
                <Box height="80svh">
                  <DecisionTree questionnaire={questionnaire as QuestionnaireType} callback={callback} />
                </Box>
              </Td>
            </Tr>
          ))}
        </Fragment>
      ))}
    </Tbody>
  </Table>
);

const Template = (args) => (
  <Box height="80svh">
    <DecisionTree {...args} />
  </Box>
);
export const Playground = Template.bind({});
Playground.args = {
  questionnaire,
  callback,
};
