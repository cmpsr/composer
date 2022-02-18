import React from 'react';
import { Meta } from '@storybook/react';
import { alertStatuses, alertTitleAlignments, alertVariants, Button, useToast, UseToastOptions } from '@components';

export default {
  title: 'Components/Notifications/Toast',
  argTypes: {
    status: {
      options: alertStatuses,
      control: { type: 'select' },
      defaultValue: 'success',
    },
    titleAlignment: {
      options: alertTitleAlignments,
      control: { type: 'select' },
      defaultValue: 'top',
    },
    variant: {
      options: ['subtle', 'solid', 'left-accent', 'top-accent'],
      control: { type: 'select' },
      defaultValue: 'solid',
    },
    position: {
      options: ['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'],
      control: { type: 'select' },
      defaultValue: 'bottom',
    },
  },
} as Meta;

const Template = (args: UseToastOptions) => {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          ...args,
        })
      }
    >
      Click to show Toast
    </Button>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  title: 'Composer rocks!',
  description: 'And this description rocks even more!',
  duration: 4000,
};
