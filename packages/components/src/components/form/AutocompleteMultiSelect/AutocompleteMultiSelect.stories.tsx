import React from 'react';
import { Meta } from '@storybook/react';
import { autocompleteMultiSelectSizes } from './types';
import { AutocompleteMultiSelect } from './AutocompleteMultiSelect';
// import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import { storiesOf } from '@storybook/react';
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
    tagSize: {
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
//                 <AutocompleteMultiSelectWrapper initialState={defaultItems}>
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
//                 </AutocompleteMultiSelectWrapper>
//               </Td>
//             ))}
//           </Tr>
//         ))}
//       </Tbody>
//     </Table>
//   );
// };

// const AutocompleteMultiSelectWrapper = ({ initialState, children }) => {
//   const [items, setItems] = useState(initialState);
//   return children(items, setItems);
// };

// export const All = AllTemplate.bind({});

const Template = (args) => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  // return (
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     <AutocompleteMultiSelect items={defaultItems}>
  //       <AutocompleteMultiSelect.SelectedItems size={args.tagSize} />
  //       <AutocompleteMultiSelect.Input placeholder={args.placeholder} size={args.size} />
  //       <AutocompleteMultiSelect.List renderItem={(item: string) => <div>{item}</div>} />
  //     </AutocompleteMultiSelect>
  //     <button type="submit">Submit</button>
  //   </form>
  // );
  const { control, handleSubmit, formState } = useForm({ defaultValues: { selectedItems: [defaultItems[0]] } });

  const onSubmit = (data) => {
    console.log('Submitted Data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="selectedItems"
        control={control}
        // defaultValue={[]}
        render={({ field: { onChange, value } }) => (
          <AutocompleteMultiSelect
            items={defaultItems}
            // @ts-ignore
            selectedItems={value}
            itemToString={(item: string) => item}
            useMultipleSelectionProps={{
              defaultSelectedItems: formState.defaultValues['selectedItems'],
              onSelectedItemsChange: ({ selectedItems }) => onChange(selectedItems),
            }}
          >
            <AutocompleteMultiSelect.SelectedItems
              renderSelectedItem={(selectedItem: string, removeSelectedItem) => (
                <Tag>
                  <Tag.Label>{selectedItem}</Tag.Label>
                  <Tag.RightIcon as={IconX} onClick={removeSelectedItem} />
                </Tag>
              )}
            />
            <AutocompleteMultiSelect.Input placeholder={args.placeholder} size={args.size} />
            <AutocompleteMultiSelect.List marginTop="60px" renderItem={(item: string) => <div>{item}</div>} />
          </AutocompleteMultiSelect>
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

storiesOf('MyComponent', module)
  .add('default', (args) => <Template {...args} />)
  .add('with validation', (args) => <Template {...args} validation={{ required: 'This field is required' }} />);

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
