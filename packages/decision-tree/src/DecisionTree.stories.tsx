import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { DecisionTree } from './DecisionTree';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { QuestionnaireType, type UseSetupCallbackCB } from './types';
import { questionnaire, serverMockup } from './tests/Questionnaire.mock';

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
    size: {
      options: ['s', 'm', 'l'],
      control: { type: 'select' },
    },
  },
} as Meta;

const states = ['default', 'filled'];

export const All = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Variant</Th>
        <Th>State</Th>
        <Th textAlign="center">S</Th>
        <Th textAlign="center">M</Th>
        <Th textAlign="center">L</Th>
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
              {['l'].map((size, i) => (
                <Td key={`${variant}-${state}-${size}-${i}`}>
                  <DecisionTree questionnaire={questionnaire as QuestionnaireType} callback={callback} />
                </Td>
              ))}
            </Tr>
          ))}
        </Fragment>
      ))}
    </Tbody>
  </Table>
);

const Template = (args) => <DecisionTree {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  questionnaire,
  callback,
};
