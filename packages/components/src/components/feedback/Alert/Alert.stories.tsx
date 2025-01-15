import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { Alert, alertStatuses, alertVariants } from '.';
import { Flex } from '@components';

export default {
  component: Alert,
  title: 'Components/Feedback/Alert',
  argTypes: {
    status: {
      options: alertStatuses,
      control: { type: 'select' },
    },
    variant: {
      options: alertVariants,
      control: { type: 'select' },
    },
    titleAlignment: {
      options: ['top', 'left'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const All = () => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Variant</Th>
          <Th>State</Th>
          <Th>Success</Th>
          <Th>Warning</Th>
          <Th>Error</Th>
          <Th>Info</Th>
        </Tr>
      </Thead>
      <Tbody>
        {alertVariants.map((variant, i) => (
          <Fragment key={i}>
            <Tr>
              <Td rowSpan={7}>{variant}</Td>
            </Tr>
            {[
              'Description, Close',
              'Title Left, Description, Close',
              'Title Top, Description, Close',
              'Description',
              'Title Left, Description',
              'Title Top, Description',
            ].map((state, i) => (
              <Tr key={`${state}-${i}`}>
                <Td>{state}</Td>
                {alertStatuses.map((status, i) => (
                  <Td key={`${variant}-${status}-${i}`}>
                    <Alert variant={variant} status={status}>
                      <Alert.Icon />
                      {(state === 'Description, Close' || state === 'Description') && (
                        <>
                          <Alert.Description>This is a description</Alert.Description>
                          {state === 'Description, Close' && (
                            <Alert.CloseButton color={variant === 'solid' ? 'text-light' : 'text-primary'} />
                          )}
                        </>
                      )}
                      {(state === 'Title Left, Description, Close' || state === 'Title Left, Description') && (
                        <Flex>
                          <Alert.Title mr="0.75rem">Title</Alert.Title>
                          <Alert.Description>This is a description</Alert.Description>
                          {state === 'Title Left, Description, Close' && (
                            <Alert.CloseButton color={variant === 'solid' ? 'text-light' : 'text-primary'} />
                          )}
                        </Flex>
                      )}
                      {(state === 'Title Top, Description, Close' || state === 'Title Top, Description') && (
                        <Flex direction="column">
                          <Alert.Title>Title</Alert.Title>
                          <Alert.Description>This is a description</Alert.Description>
                          {state === 'Title Top, Description, Close' && (
                            <Alert.CloseButton color={variant === 'solid' ? 'text-light' : 'text-primary'} />
                          )}
                        </Flex>
                      )}
                    </Alert>
                  </Td>
                ))}
              </Tr>
            ))}
          </Fragment>
        ))}
      </Tbody>
    </Table>
  );
};

const Template = ({ titleAlignment, showDescription, showTitle, showClose, variant, status, showIcon }) => (
  <Alert variant={variant} status={status}>
    {showIcon && <Alert.Icon />}
    <Flex direction={titleAlignment === 'top' ? 'column' : 'row'}>
      {showTitle && <Alert.Title mr={titleAlignment === 'left' ? '0.75rem' : '0'}>Title</Alert.Title>}
      {showDescription && <Alert.Description>This is a description</Alert.Description>}
      {showClose && <Alert.CloseButton color={variant === 'solid' ? 'text-light' : 'text-primary'} />}
    </Flex>
  </Alert>
);

export const Playground = Template.bind({});
Playground.args = {
  variant: 'solid',
  status: 'success',
  showDescription: true,
  showTitle: true,
  showClose: true,
  showIcon: true,
};
