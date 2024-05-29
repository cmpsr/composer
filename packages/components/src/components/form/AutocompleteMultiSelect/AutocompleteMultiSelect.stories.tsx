import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { autocompleteMultiSelectSizes } from './types';
import { AutocompleteMultiSelect } from './AutocompleteMultiSelect';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { Flex } from '@components';

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
  const states = ['default', 'disabled'];
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
        {states.map((state, i) => (
          <Tr key={`${state}-${i}`}>
            <Td>{state}</Td>
            {autocompleteMultiSelectSizes.map((size, i) => (
              <Td key={`${size}-${i}-${state}`}>
                <Flex flexDirection="column" alignItems="start" gap="5">
                  <AutocompleteMultiSelectWrapper initialState={defaultItems}>
                    {(items: string[]) => (
                      <AutocompleteMultiSelect items={items}>
                        <AutocompleteMultiSelect.SelectedItems />
                        <AutocompleteMultiSelect.Input
                          size={size}
                          placeholder={state}
                          {...{
                            ...(state === 'disabled' && {
                              isDisabled: true,
                            }),
                          }}
                        />
                        <AutocompleteMultiSelect.List renderItem={(item: string) => <div>{item}</div>} />
                      </AutocompleteMultiSelect>
                    )}
                  </AutocompleteMultiSelectWrapper>
                  <AutocompleteMultiSelectWrapper initialState={defaultItems}>
                    {(items: string[]) => (
                      <AutocompleteMultiSelect
                        items={items}
                        useMultipleSelectionProps={{
                          defaultSelectedItems: [items[0], items[1]],
                        }}
                      >
                        <AutocompleteMultiSelect.SelectedItems />
                        <AutocompleteMultiSelect.Input
                          size={size}
                          placeholder={state}
                          {...{
                            ...(state === 'disabled' && {
                              isDisabled: true,
                            }),
                          }}
                        />
                        <AutocompleteMultiSelect.List renderItem={(item: string) => <div>{item}</div>} />
                      </AutocompleteMultiSelect>
                    )}
                  </AutocompleteMultiSelectWrapper>
                </Flex>
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

const AutocompleteMultiSelectWrapper = ({ initialState, children }) => {
  const [items, setItems] = useState(initialState);
  return children(items, setItems);
};

export const All = AllTemplate.bind({});

const Template = (args) => {
  return (
    <AutocompleteMultiSelect items={defaultItems}>
      <AutocompleteMultiSelect.SelectedItems />
      <AutocompleteMultiSelect.Input placeholder={args.placeholder} size={args.size} />
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
