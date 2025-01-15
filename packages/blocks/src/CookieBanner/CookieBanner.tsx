import React, { FC, isValidElement, MouseEvent, useEffect, useState } from 'react';
import { createContext } from '@chakra-ui/react-utils';
import { Alert, AlertProps, Button, ButtonProps, Flex, FlexProps, Text } from '@cmpsr/components';
import { CookieBannerActionsStaticMembers, CookieBannerProps, CookieBannerStaticMembers } from './types';

interface CookieBannerContextProps {
  cookiePolicy: string | undefined;
  allowAllCookies: () => void;
  allowRequiredOnly: () => void;
}

const [CookieBannerProvider, useCookieBannerContext] = createContext<CookieBannerContextProps>({
  name: 'CookieBannerContext',
});

export const CookieBanner: FC<CookieBannerProps> & CookieBannerStaticMembers = ({
  children,
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

  const allowAllCookies = () => updatePolicy('all');

  const allowRequiredOnly = () => updatePolicy('required');

  const areActionsDefined = React.Children.map(
    children,
    (child) => isValidElement(child) && child.type === CookieBannerActions,
  ).some(Boolean);

  return (
    <CookieBannerProvider value={{ allowAllCookies, allowRequiredOnly, cookiePolicy }}>
      {shouldShow ? (
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          alignItems="center"
          bg="background-inform"
          pr="1rem"
          py="1.5rem"
          {...rest}
        >
          {children}
          {!areActionsDefined && (
            <CookieBanner.Actions>
              <CookieBanner.Actions.AcceptRequired />
              <CookieBanner.Actions.AcceptAll />
            </CookieBanner.Actions>
          )}
        </Flex>
      ) : null}
    </CookieBannerProvider>
  );
};

const CookieBannerContent: FC<AlertProps> = ({ children, ...props }) => (
  <Alert variant="subtle" pt="0" pr={{ base: '0', lg: '2rem' }} pb={{ base: '2rem', lg: '0' }} {...props}>
    <Alert.Icon />
    {typeof children === 'string' ? <Text color="text-secondary">{children}</Text> : children}
  </Alert>
);
CookieBanner.Content = CookieBannerContent;

const CookieBannerActionAcceptAll: FC<ButtonProps> = ({ onClick, children = 'Allow all Cookies', ...props }) => {
  const { allowAllCookies } = useCookieBannerContext();
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    allowAllCookies();
    onClick?.(event);
  };
  return (
    <Button variant="primary" onClick={handleClick} {...props}>
      {children}
    </Button>
  );
};
const CookieBannerActionAcceptRequired: FC<ButtonProps> = ({
  onClick,
  children = 'Allow functional only',
  ...props
}) => {
  const { allowRequiredOnly } = useCookieBannerContext();
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    allowRequiredOnly();
    onClick?.(event);
  };
  return (
    <Button variant="link" onClick={handleClick} {...props}>
      {children}
    </Button>
  );
};
const CookieBannerActions: FC<FlexProps> & CookieBannerActionsStaticMembers = (props) => (
  <Flex justifyContent="center" alignItems="center" direction={{ base: 'column', lg: 'row' }} gap="1.5rem" {...props} />
);
CookieBannerActions.AcceptAll = CookieBannerActionAcceptAll;
CookieBannerActions.AcceptRequired = CookieBannerActionAcceptRequired;
CookieBanner.Actions = CookieBannerActions;
