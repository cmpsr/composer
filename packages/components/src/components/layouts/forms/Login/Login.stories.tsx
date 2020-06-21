import React from 'react';
import { action } from '@storybook/addon-actions';
import { lock as Lock } from 'components/primitives/Icon/icons/action';

import { Login } from './Login';

export default {
  title: 'Composer/Forms/Login',
  component: Login,
};

export const withTitle = () => <Login title="Sign in to your account" />;

withTitle.story = {
  name: 'With Title',
};

export const withAsset = () => (
  <Login
    asset={{
      contentType: 'img',
      title: 'Image Title',
      url:
        'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg',
    }}
  />
);

withAsset.story = {
  name: 'With Asset',
};

export const withSubmit = () => (
  <Login onSubmit={action('on submit form action')} />
);

withSubmit.story = {
  name: 'With Submit Action',
};

withSubmit.story = {
  name: 'With Submit Action',
};

export const withRemember = () => <Login remember="Remember me" />;

withRemember.story = {
  name: 'With Remember me',
};

export const withForgotPassword = () => (
  <Login forgot={{ title: 'Forgot your password?' }} />
);

withForgotPassword.story = {
  name: 'With Forgot Password',
};

export const withSignInTitleAndIcon = () => {
  const icon = <Lock type="filled" />;
  return <Login signIn={{ title: 'Sign in title', icon }} />;
};

withSignInTitleAndIcon.story = {
  name: 'With Sign in title & Icon',
};

export const withAll = () => {
  const icon = <Lock type="filled" />;
  return (
    <Login
      asset={{
        contentType: 'img',
        title: 'Image Title',
        url:
          'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg',
      }}
      title="Sign in to your account"
      remember="Remember me"
      forgot={{ title: 'Forgot your password?' }}
      signIn={{ title: 'Sign in title', icon }}
    />
  );
};

withAll.story = {
  name: 'With all properties set',
};
