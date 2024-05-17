import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { autocompleteMultiSelectSizes } from './types';
import { AutocompleteMultiSelect } from './AutocompleteMultiSelect';
import { Tag } from '@components/dataDisplay';
import { IconX } from '@components/media';

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

// const AllTemplate = () => {
//   const states = ['default', 'filled', 'disabled', 'disabled-and-filled', 'error'];
//   return (
//     <Table variant="simple">
//       <Thead>
//         <Tr>
//           <Th>State</Th>
//           <Th>S</Th>
//           <Th>M</Th>
//           <Th>L</Th>
//         </Tr>
//       </Thead>
//       <Tbody>
//         {states.map((state, i) => (
//           <Tr key={`${state}-${i}`}>
//             <Td>{state}</Td>
//             {autocompleteMultiSelectSizes.map((size, i) => (
//               <Td key={`${size}-${i}-${state}`}>
//                 <AutocompleteWrapper initialState={defaultItems}>
//                   {(items: string[], setItems) => (
//                     <AutocompleteMultiSelect
//                       items={items}
//                       onInputValueChange={({ inputValue }) => {
//                         if (!inputValue) setItems(defaultItems);
//                         setItems(defaultItems.filter((item) => item.includes(inputValue)));
//                       }}
//                       {...{
//                         ...((state === 'filled' || state === 'disabled-and-filled') && {
//                           defaultInputValue: items[0],
//                           defaultSelectedItem: items[0],
//                         }),
//                       }}
//                     >
//                       <AutocompleteMultiSelect.Input
//                         size={size}
//                         placeholder={state}
//                         {...{
//                           ...((state === 'disabled' || state === 'disabled-and-filled') && {
//                             isDisabled: true,
//                           }),
//                         }}
//                         {...{
//                           ...(state === 'error' && {
//                             isInvalid: true,
//                           }),
//                         }}
//                         {...{
//                           ...(state === 'leadingIcon' && {
//                             leadingIcon: <IconCloud />,
//                           }),
//                         }}
//                         {...{
//                           ...(state === 'trailingIcon' && {
//                             trailingIcon: <IconCloud />,
//                           }),
//                         }}
//                         {...{
//                           ...(state === 'filled' && {
//                             clearButtonMode: 'item-selected',
//                           }),
//                         }}
//                       />
//                       <AutocompleteMultiSelect.List renderItem={(item: string) => <div>{item}</div>} />
//                     </AutocompleteMultiSelect>
//                   )}
//                 </AutocompleteWrapper>
//               </Td>
//             ))}
//           </Tr>
//         ))}
//       </Tbody>
//     </Table>
//   );
// };

// const AutocompleteWrapper = ({ initialState, children }) => {
//   const [items, setItems] = useState(initialState);
//   return children(items, setItems);
// };

// export const All = AllTemplate.bind({});

const Template = () => {
  const [items, setItems] = useState(defaultItems);

  return (
    <AutocompleteMultiSelect
      // @ts-ignore

      useMultipleSelectionProps={{
        // defaultSelectedItems: items,
        onSelectedItemsChange: ({ selectedItems }) => {
          setItems((prevItems) => prevItems.filter((item) => !selectedItems.includes(item)));
        },
      }}
      useComboboxProps={{
        items,
        onInputValueChange: ({ inputValue, ...rest }) => {
          console.log('writing ', rest);
          // if (!inputValue) setItems(defaultItems);
          // setItems(defaultItems.filter((item) => item.includes(inputValue)));
        },
      }}
    >
      {/* @ts-ignore */}
      <AutocompleteMultiSelect.SelectedItems
        renderSelectedItem={(selectedItem: string, removeSelectedItem) => (
          <Tag>
            <Tag.Label>{selectedItem}</Tag.Label>
            <Tag.RightIcon as={IconX} onClick={removeSelectedItem} />
          </Tag>
        )}
      />
      {/* @ts-ignore */}
      <AutocompleteMultiSelect.Input placeholder="Search for a feature" />
      {/* @ts-ignore */}
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
    options: ['item-selected', 'has-value', 'never', 'always'],
  },
};
