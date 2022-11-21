import React, { FC, useState } from 'react';
import { Button, Flex, Input, Image } from '@cmpsr/components';
import { LoginProps } from './types';

export const Login: FC<LoginProps> = ({ loginLabel, onLogin, isDisabled }) => {
  const [user, setUser] = useState('');

  const handleLogin = () => {
    if (!user) return;
    onLogin(user);
  };

  return (
    <Flex flexDir="column" alignItems="center" gap="2rem">
      <Image src="/images/cmpsrooms.png" width="200px" alt="logo" />
      <Input
        isDisabled={isDisabled}
        value={user}
        placeholder="User name"
        onChange={({ target: { value } }) => setUser(value)}
      />
      <Flex flexDir="row">
        <Button variant="primary" onClick={handleLogin} isDisabled={isDisabled}>
          {loginLabel}
        </Button>
      </Flex>
    </Flex>
  );
};
