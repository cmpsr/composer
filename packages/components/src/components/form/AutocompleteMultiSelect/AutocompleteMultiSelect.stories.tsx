import React from 'react';
import { Meta } from '@storybook/react';
import { autocompleteMultiSelectSizes } from './types';
import { AutocompleteMultiSelect } from './AutocompleteMultiSelect';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

export default {
  component: AutocompleteMultiSelect,
  title: 'Components/Form/AutocompleteMultiSelect',
  argTypes: {
    size: {
      options: autocompleteMultiSelectSizes,
      control: { type: 'select' },
    },
  },
} as Meta;

const defaultItems = [
  'Super-Fast Websites',
  'Optimized Performance',
  'Seamless Integration',
  'Responsive Design',
  'Improved SEO',
  'Effortless Scaling',
  'Easy Deployment',
];

const AllTemplate = () => {
  const states = ['default', 'default with pre-selected items', 'disabled', 'disabled with pre-selected items'];
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
        {states.map((state, stateIndex) => (
          <Tr key={`${state}-${stateIndex}`}>
            <Td>{state}</Td>
            {autocompleteMultiSelectSizes.map((size, sizeIndex) => (
              <Td key={`${size}-${sizeIndex}-${state}`}>
                <AutocompleteMultiSelect
                  items={defaultItems}
                  useMultipleSelectionProps={
                    state.includes('pre-selected items')
                      ? {
                          defaultSelectedItems: [defaultItems[0], defaultItems[1]],
                        }
                      : {}
                  }
                  isDisabled={state.includes('disabled')}
                >
                  <AutocompleteMultiSelect.SelectedItems />
                  <AutocompleteMultiSelect.Input size={size} placeholder={state} />
                  <AutocompleteMultiSelect.List renderItem={(item: string) => <div>{item}</div>} />
                </AutocompleteMultiSelect>
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export const All = AllTemplate.bind({});

const Template = (args) => {
  return (
    <AutocompleteMultiSelect items={defaultItems} size={args.size}>
      <AutocompleteMultiSelect.SelectedItems />
      <AutocompleteMultiSelect.Input placeholder={args.placeholder} />
      <AutocompleteMultiSelect.List renderItem={(item: string) => <div>{item}</div>} />
    </AutocompleteMultiSelect>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  placeholder: 'Playground placeholder',
  clearButtonMode: 'never',
};
Playground.argTypes = {
  clearButtonMode: {
    control: { type: 'select' },
    options: ['has-value', 'never', 'always'],
  },
};
