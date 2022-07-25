import React, { FC, useEffect, useState } from 'react';
import { Alert, Button, Flex, Text } from '@cmpsr/components';
import { CookieBannerProps } from './types';

export const CookieBanner: FC<CookieBannerProps> = ({
  children,
  acceptAllCta = 'Allow all Cookies',
  acceptRequiredOnlyCta = 'Allow functional only',
  cookieKey = 'cmpsr-cookies-policy',
  cookieVersion = '1.0.0',
  ...rest
}) => {
  const [shouldShow, setShouldShow] = useState(false);
  const [cookiePolicy, setCookiePolicy] = useState<string>(undefined);

  useEffect(() => {
    const currentPolicy = localStorage.getItem(cookieKey);
    if (currentPolicy) {
      setCookiePolicy(currentPolicy);
    } else {
      setCookiePolicy('');
    }
  }, []);

  useEffect(() => {
    if (cookiePolicy === undefined) return;
    if (cookiePolicy === '') {
      setShouldShow(true);
      return;
    }
    const policy = JSON.parse(cookiePolicy);
    if (policy['cookieVersion'] === cookieVersion) {
      setShouldShow(false);
      return;
    }
    setShouldShow(true);
  }, [cookiePolicy]);

  const updatePolicy = (allowed: 'all' | 'required') => {
    const newPolicy = JSON.stringify({
      cookieVersion,
      allow: allowed,
    });
    localStorage.setItem(cookieKey, newPolicy);
    setCookiePolicy(newPolicy);
  };

  const handleAllowAllCookies = () => updatePolicy('all');

  const handleAllowRequiredOnly = () => updatePolicy('required');

  const child = typeof children === 'string' ? <Text color="text-secondary">{children}</Text> : children;

  return shouldShow ? (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      alignItems="center"
      bg="background-inform"
      pr="1rem"
      py="1.5rem"
      {...rest}
    >
      <Alert variant="subtle" pt="0" pr={{ base: '0', lg: '2rem' }} pb={{ base: '2rem', lg: '0' }}>
        <Alert.Description>{child}</Alert.Description>
      </Alert>
      <Flex justifyContent="center" alignItems="center" direction={{ base: 'column', lg: 'row' }} gap="1.5rem">
        <Button variant="link" onClick={handleAllowRequiredOnly}>
          {acceptRequiredOnlyCta}
        </Button>
        <Button variant="primary" onClick={handleAllowAllCookies}>
          {acceptAllCta}
        </Button>
      </Flex>
    </Flex>
  ) : null;
};
