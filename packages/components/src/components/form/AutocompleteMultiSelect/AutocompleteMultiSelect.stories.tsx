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
                  size={size}
                >
                  <AutocompleteMultiSelect.SelectedItems />
                  <AutocompleteMultiSelect.Input placeholder={state} />
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

const Template = ({ variant, ...args }) => {
  const defaultItemsWithStructure = [
    { id: '1', name: 'Super-Fast Websites' },
    { id: '2', name: 'Optimized Performance' },
    { id: '3', name: 'Seamless Integration' },
    { id: '4', name: 'Responsive Design' },
    { id: '5', name: 'Improved SEO' },
    { id: '6', name: 'Effortless Scaling' },
    { id: '7', name: 'Easy Deployment' },
  ];

  return (
    <AutocompleteMultiSelect
      items={defaultItemsWithStructure}
      size={args.size}
      itemToString={(item: { name: string }) => (item ? item.name : '')}
    >
      <AutocompleteMultiSelect.SelectedItems />
      <AutocompleteMultiSelect.Input
        placeholder={args.placeholder}
        variant={variant}
        clearButtonMode={args.clearButtonMode}
      />
      <AutocompleteMultiSelect.List renderItem={(item: { name: string }) => <div>{item.name}</div>} />
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
  variant: {
    control: { type: 'select' },
    options: ['outline', 'flushed'],
  },
};
