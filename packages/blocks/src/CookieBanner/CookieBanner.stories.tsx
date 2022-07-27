import React from 'react';
import { Meta } from '@storybook/react';
import { Link, Text, Button } from '@cmpsr/components';
import { CookieBanner } from './CookieBanner';

export default {
  component: CookieBanner,
  title: 'Blocks/CookieBanner',
} as Meta;

export const StringChild = () => (
  <>
    <CookieBanner cookieKey="string-child-cookie-key">
      <CookieBanner.Content>
        We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
        three ways we could find it.
      </CookieBanner.Content>
    </CookieBanner>
    <Text mt="3rem">Click the button below if the component is not shown</Text>
    <Button
      mt="0.5rem"
      onClick={() => {
        localStorage.removeItem('string-child-cookie-key');
        window.location.reload();
      }}
    >
      Reset policy
    </Button>
  </>
);

export const CustomChild = () => (
  <>
    <CookieBanner cookieKey="custom-child-cookie-key">
      <CookieBanner.Content>
        <Text variant="text-body-regular" color="text-secondary">
          We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
          three ways we could find it. <Link>Cookies Settings</Link>
        </Text>
      </CookieBanner.Content>
    </CookieBanner>
    <Text mt="3rem">Click the button below if the component is not shown</Text>
    <Button
      mt="0.5rem"
      onClick={() => {
        localStorage.removeItem('custom-child-cookie-key');
        window.location.reload();
      }}
    >
      Reset policy
    </Button>
  </>
);

const Template = ({ copy, acceptAllCta, acceptRequiredOnlyCta }) => (
  <>
    <CookieBanner
      cookieKey="playground-child-cookie-key"
      acceptAllCta={acceptAllCta}
      acceptRequiredOnlyCta={acceptRequiredOnlyCta}
    >
      <CookieBanner.Content>{copy}</CookieBanner.Content>
    </CookieBanner>
    <Text mt="3rem">Click the button below if the component is not shown</Text>
    <Button
      mt="0.5rem"
      onClick={() => {
        localStorage.removeItem('playground-child-cookie-key');
        window.location.reload();
      }}
    >
      Reset policy
    </Button>
  </>
);

export const Playground = Template.bind({});
Playground.args = {
  copy:
    'We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.',
  acceptAllCta: 'Accept all',
  acceptRequiredOnlyCta: 'Accept required only',
};
