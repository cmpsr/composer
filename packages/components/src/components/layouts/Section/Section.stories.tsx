import React from 'react';
import { Meta } from '@storybook/react';
import { Section, SectionProps } from '.';
import { Text } from 'components';

export default {
  title: 'Components/Layouts/Section',
  component: Section,
} as Meta;

interface StoryProps extends SectionProps {
  content: string;
}

const Template: React.FC<StoryProps> = ({ content, ...rest }) => (
  <Section {...rest}>
    <Text variant="text-body-display-L">{content}</Text>
  </Section>
);
export const Playground = Template.bind({});
Playground.args = {
  padding: 'spacer-4',
  border: '1px solid',
  borderColor: 'accent-default',
  content: 'Composer rocks!',
  width: '100%',
};
