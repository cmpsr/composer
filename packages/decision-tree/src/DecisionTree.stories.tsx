import React from 'react';
import { Meta } from '@storybook/react';
import { DecisionTree } from './DecisionTree';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { QuestionnaireType, type UseSetupCallbackCB } from './types';
import { questionnaire, serverMockup } from './tests/Questionnaire.mock';
import { Box } from '@cmpsr/components';

const callback = async function (questionId, value) {
  console.log(questionId, value);
  return serverMockup[questionId];
} as UseSetupCallbackCB;

export default {
  component: DecisionTree,
  title: 'DecisionTree/DecisionTree',
} as Meta;

export const All = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Variant</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Default</Td>
        <Td>
          <Box height="80svh">
            <DecisionTree questionnaire={questionnaire as QuestionnaireType} callback={callback} />
          </Box>
        </Td>
      </Tr>
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
