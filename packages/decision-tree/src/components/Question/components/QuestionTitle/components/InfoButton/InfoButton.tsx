import React, { FC } from 'react';
import { type InfoButtonProps } from './types';
import { IconHelp, Box, Button } from '@cmpsr/components';

export const InfoButton: FC<InfoButtonProps> = ({ onClick }) => {
  return (
    <Button variant="ghost" onClick={onClick} ml="spacer-2">
      <Box display="inline" my="auto">
        <IconHelp color="text-link-secondary-default" />
      </Box>
    </Button>
  );
};
