import React from 'react';
import { Meta } from '@storybook/react';
import { Switch } from '.';
import { switchLabelPositions, switchSizes } from './types';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import { getFigmaDesignLink } from '@components/figmaLinks';

export default {
  component: Switch,
  title: 'Components/Primitives/Switch',
  argTypes: {
    size: {
      options: switchSizes,
      control: { type: 'select' },
    },
    labelPosition: {
      options: switchLabelPositions,
      control: { type: 'select' },
    },
  },
  parameters: getFigmaDesignLink('switchComponentLink'),
} as Meta;

export const All = () => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>State</Th>
          <Th>S</Th>
          <Th>M</Th>
          <Th>L</Th>
        </Tr>
      </Thead>
      <Tbody>
        {['Left label', 'Right label', 'No label', 'Disabled', 'Checked'].map((state, i) => (
          <Tr key={`${state}-${i}`}>
            <Td>{state}</Td>
            {switchSizes.map((size, i) => (
              <Td key={`${size}-${i}-${state}`}>
                <Switch
                  size={size}
                  label={state === 'No label' ? '' : 'Label'}
                  {...{
                    ...(state === 'Left label' && {
                      labelPosition: 'left',
                    }),
                  }}
                  {...{
                    ...(state === 'Right label' && {
                      labelPosition: 'right',
                    }),
                  }}
                  {...{
                    ...(state === 'Disabled' && {
                      isDisabled: true,
                    }),
                  }}
                  {...{
                    ...(state === 'Checked' && {
                      isChecked: true,
                    }),
                  }}
                />
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

const Template = (args) => <Switch {...args} />;
export const Playground = Template.bind({});

Playground.args = {
  size: 's',
  isDisabled: false,
  label: 'Label',
};
