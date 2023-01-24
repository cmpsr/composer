import React from 'react';
import { Meta } from '@storybook/react';
import { Login } from './Login';

export default {
  component: Login,
  title: 'SignalWire/VideoChat/components/Login',
} as Meta;

const noop = () => {
  // just to make the linter happy
};

export const Default = () => <Login loginLabel="Log In" isDisabled={false} onLogin={noop} />;

export const Disabled = () => <Login loginLabel="Log In" isDisabled onLogin={noop} />;
