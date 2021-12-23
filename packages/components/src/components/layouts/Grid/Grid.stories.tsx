import React from 'react';
import { Meta } from '@storybook/react';
import { Grid } from './Grid';
import { Box, Text } from 'components';

export default {
  component: Grid,
  title: 'Components/Layouts/Grid',
} as Meta;

const Template = ({ children, ...rest }) => (
  <Grid {...rest}>
    {[1, 2, 3, 4, 5].map((index) => (
      <Box
        key={index}
        padding="spacer-4"
        border="1px solid var(--chakra-colors-accent-default)"
      >
        <Text variant="text-body-bold">
          {children}:{` ${index}`}
        </Text>
      </Box>
    ))}
  </Grid>
);
export const Playground = Template.bind({});
Playground.args = {
  children: "I'm a Grid container with some child",
  border: '1px solid var(--chakra-colors-primary-default)',
  columns: 2,
  spacing: 'spacer-2',
  padding: 'spacer-1',
};
