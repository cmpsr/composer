import React, { useEffect } from 'react';
import { Meta } from '@storybook/react';
import { alertStatuses, toastVariants, Button, useToast, UseToastOptions } from '@components';

export default {
  title: 'Components/Notifications/Toast',
  argTypes: {
    status: {
      options: alertStatuses,
      control: { type: 'select' },
      defaultValue: 'success',
    },
    variant: {
      options: toastVariants,
      control: { type: 'select' },
      defaultValue: 'solid',
    },
    position: {
      options: ['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'],
      control: { type: 'select' },
      defaultValue: 'bottom',
    },
    titleAlignment: {
      options: ['top', 'left'],
      control: { type: 'select' },
      defaultValue: 'left',
    },
  },
  parameters: {
    chromatic: { delay: 1000 },
  },
  decorators: [(storyFn) => <div style={{ width: '1200px', height: '800px' }}>{storyFn()}</div>],
} as Meta;

export const SolidSuccess = () => {
  const toast = useToast();

  useEffect(() => {
    toast({
      title: 'Title',
      description: 'This is a description',
      isClosable: true,
      variant: 'solid',
      status: 'success',
    });
  }, []);

  return null;
};

export const SubtleWarning = () => {
  const toast = useToast();

  useEffect(() => {
    toast({
      title: 'Title',
      description: 'This is a description',
      isClosable: true,
      variant: 'subtle',
      status: 'warning',
    });
  }, []);

  return null;
};

export const LeftAccentError = () => {
  const toast = useToast();

  useEffect(() => {
    toast({
      title: 'Title',
      description: 'This is a description',
      isClosable: true,
      variant: 'left-accent',
      status: 'error',
    });
  }, []);

  return null;
};

export const TopAccentInfo = () => {
  const toast = useToast();

  useEffect(() => {
    toast({
      title: 'Title',
      description: 'This is a description',
      isClosable: true,
      variant: 'top-accent',
      status: 'info',
    });
  }, []);

  return null;
};

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
  title: 'Title',
  description: 'This is a description',
  isClosable: true,
  duration: 3000,
};
