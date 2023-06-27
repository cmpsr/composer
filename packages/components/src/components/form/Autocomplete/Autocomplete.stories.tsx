import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { Autocomplete } from './Autocomplete';
import { autocompleteSizes } from './types';
import { IconCloud } from '../../media/Icons';

export default {
  component: Autocomplete,
  title: 'Components/Form/Autocomplete',
  argTypes: {
    size: {
      options: autocompleteSizes,
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
  const states = ['default', 'leadingIcon', 'trailingIcon', 'filled', 'disabled', 'disabled-and-filled', 'error'];
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
            {autocompleteSizes.map((size, i) => (
              <Td key={`${size}-${i}-${state}`}>
                <AutocompleteWrapper initialState={defaultItems}>
                  {(items, setItems) => (
                    <Autocomplete
                      items={items}
                      onInputValueChange={({ inputValue }) => {
                        if (!inputValue) setItems(defaultItems);
                        setItems(defaultItems.filter((item) => item.toLowerCase().includes(inputValue)));
                      }}
                      {...{
                        ...((state === 'filled' || state === 'disabled-and-filled') && {
                          defaultInputValue: items[0],
                          defaultSelectedItem: items[0],
                        }),
                      }}
                    >
                      <Autocomplete.Input
                        size={size}
                        placeholder={state}
                        {...{
                          ...((state === 'disabled' || state === 'disabled-and-filled') && {
                            isDisabled: true,
                          }),
                        }}
                        {...{
                          ...(state === 'error' && {
                            isInvalid: true,
                          }),
                        }}
                        {...{
                          ...(state === 'leadingIcon' && {
                            leadingIcon: <IconCloud />,
                          }),
                        }}
                        {...{
                          ...(state === 'trailingIcon' && {
                            trailingIcon: <IconCloud />,
                          }),
                        }}
                        {...{
                          ...(state === 'filled' && {
                            showClearButton: true,
                          }),
                        }}
                      />
                      <Autocomplete.List renderItem={(item) => <div>{item}</div>} />
                    </Autocomplete>
                  )}
                </AutocompleteWrapper>
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

const AutocompleteWrapper = ({ initialState, children }) => {
  const [items, setItems] = useState(initialState);
  return children(items, setItems);
};

export const All = AllTemplate.bind({});

const Template = (args) => {
  const [items, setItems] = useState(defaultItems);
  return (
    <Autocomplete
      items={items}
      onInputValueChange={({ inputValue }) => {
        if (!inputValue) setItems(defaultItems);
        setItems(defaultItems.filter((item) => item.toLowerCase().includes(inputValue)));
      }}
    >
      <Autocomplete.Input placeholder={args.placeholder} showClearButton={args.showClearButton} />
      <Autocomplete.List renderItem={(item) => <div>{item}</div>} />
    </Autocomplete>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  placeholder: 'Playground placeholder',
  showClearButton: false,
};
