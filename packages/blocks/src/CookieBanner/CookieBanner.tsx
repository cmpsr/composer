import React, { FC, useEffect, useState } from 'react';
import { Alert, Button, Flex } from '@cmpsr/components';
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

  return shouldShow ? (
    <Flex
      direction={['column', null, 'row']}
      alignItems="center"
      bg="background-info"
      pr={['1rem', null, '0']}
      py="1rem"
      borderRadius="0.375rem"
      {...rest}
    >
      <Alert pt="0" variant="subtle" pr={['0', null, '2rem']} pb={['2rem', null, '0']}>
        <Alert.Description>{children}</Alert.Description>
      </Alert>
      <Flex
        px="1rem"
        justifyContent="center"
        alignItems="center"
        direction="row"
        pr={['0', null, '1.5rem']}
        pb={['1.5rem', null, '0']}
      >
        <Button variant="link" onClick={handleAllowRequiredOnly}>
          {acceptRequiredOnlyCta}
        </Button>
      </Flex>
      <Flex px="1rem" justifyContent="center" alignItems="center" direction="row">
        <Button variant="primary" onClick={handleAllowAllCookies}>
          {acceptAllCta}
        </Button>
      </Flex>
    </Flex>
  ) : null;
};
