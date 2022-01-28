import React from 'react';
import { Meta } from '@storybook/react';
import { HStack, StackDivider, VStack } from '@chakra-ui/react';
import { Input } from '.';
import { inputSizes, inputVariants } from './types';
import { IconCloud } from '../Icons';
import { Text } from '..';

export default {
  component: Input,
  title: 'Components/Primitives/Input',
  argTypes: {
    variant: {
      options: inputVariants,
      control: { type: 'select' },
    },
    size: {
      options: inputSizes,
      control: { type: 'select' },
    },
    showTrailingIcon: {
      control: { type: 'boolean' },
    },
    isInvalid: {
      control: { type: 'boolean' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
    leftLabel: {
      type: { name: 'string', required: false },
    },
    rightLabel: {
      type: { name: 'string', required: false },
    },
    placeholder: {
      type: { name: 'string', required: false },
    },
  },
} as Meta;

const AllTemplate = () => {
  const [values, setValues] = React.useState({});

  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
      {inputVariants.map((variant) => (
        <HStack key={variant}>
          <HStack>
            <VStack>
              <Text>{variant}</Text>
              {inputSizes.map((size) => (
                <VStack key={size}>
                  <Input
                    key={`${variant}-${size}`}
                    variant={variant}
                    size={size}
                    value={values[`${variant}-${size}`]}
                    placeholder="Label"
                    onChange={(evt) =>
                      setValues({
                        ...values,
                        [`${variant}-${size}`]: evt.target.value,
                      })
                    }
                  />
                </VStack>
              ))}
            </VStack>
            <VStack>
              <Text>{variant} - With Icon</Text>
              {inputSizes.map((size) => (
                <VStack key={size}>
                  <Input
                    key={`${variant}-${size}`}
                    variant={variant}
                    size={size}
                    value={values[`${variant}-${size}`]}
                    placeholder="Label"
                    trailingIcon={<IconCloud />}
                    showTrailingIcon
                    onChange={(evt) =>
                      setValues({
                        ...values,
                        [`${variant}-${size}`]: evt.target.value,
                      })
                    }
                  />
                </VStack>
              ))}
            </VStack>
            <VStack>
              <Text>{variant} - Error</Text>
              {inputSizes.map((size) => (
                <VStack key={size}>
                  <Input
                    key={`${variant}-${size}`}
                    variant={variant}
                    size={size}
                    value={values[`${variant}-${size}`]}
                    placeholder="Label"
                    isInvalid
                    onChange={(evt) =>
                      setValues({
                        ...values,
                        [`${variant}-${size}`]: evt.target.value,
                      })
                    }
                  />
                </VStack>
              ))}
            </VStack>
            <VStack>
              <Text>{variant} - Disabled</Text>
              {inputSizes.map((size) => (
                <VStack key={size}>
                  <Input
                    key={`${variant}-${size}`}
                    variant={variant}
                    size={size}
                    value={values[`${variant}-${size}`]}
                    placeholder="Label"
                    isDisabled
                    onChange={(evt) =>
                      setValues({
                        ...values,
                        [`${variant}-${size}`]: evt.target.value,
                      })
                    }
                  />
                </VStack>
              ))}
            </VStack>
          </HStack>
        </HStack>
      ))}
    </VStack>
  );
};

export const All = AllTemplate.bind({});

const Template = (args) => <Input trailingIcon={<IconCloud />} {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  variant: 'flushed',
  size: 'l',
  showTrailingIcon: false,
  placeholder: 'A placeholder',
  leftLabel: '',
  rightLabel: '',
  isInvalid: false,
  isDisabled: false,
};
